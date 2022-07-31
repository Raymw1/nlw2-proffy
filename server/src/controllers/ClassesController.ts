import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const subject = filters.subject as string,
      week_day = filters.week_day as string,
      time = filters.time as string;
    if (!week_day || !subject || !time)
      return response.status(400).json({ error: 'Missing filters to search classes!' });
    const timeInMinutes = convertHourToMinutes(filters.time as string);
    
    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day) || 0])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes || 0])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes || 0])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);
      
    return response.json(classes);
  }
  
  async store(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });
      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
        ...scheduleItem,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
        class_id,
      }));

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return response.status(201).json();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({ error: "Something went wrong, try again!"});
    }
  }
}

export default new ClassesController();
