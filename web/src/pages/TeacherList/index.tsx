import React, { FormEvent, useState } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    if (!subject || !week_day || !time) return;
    const {data} = await api.get('/classes', { params: { subject, week_day, time } });
    setTeachers(data);
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are your available teachers'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select 
            label='Subject' 
            name='subject'
            value={subject || 0}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Linear Algebra', label: 'Linear Algebra' },
              { value: 'Vectors and Matrices', label: 'Vectors and Matrices' },
              { value: 'Text Production', label: 'Text Production' },
              { value: 'Logical Thinking', label: 'Logical Thinking' },
              { value: 'Number Theory', label: 'Number Theory' },
              { value: 'Real Analysis', label: 'Real Analysis' },
              { value: 'Trigonometry', label: 'Trigonometry' },
              { value: 'Complex Numbers', label: 'Complex Numbers' },
              { value: 'Euclidean Geometry', label: 'Euclidean Geometry' },
              { value: 'Financial Education', label: 'Financial Education' },
            ]}
          />
          <Select 
            label='Week day' 
            name='week_day'
            value={week_day || 0}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
              { value: '7', label: 'Sunday' },
            ]}
          />
          <Input 
            label='Schedule'
            name='time'
            type='time' 
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem teacher={teacher} key={teacher.id} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
