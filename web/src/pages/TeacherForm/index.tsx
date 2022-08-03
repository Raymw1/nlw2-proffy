import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);
  const navigate = useNavigate();

  function addNewScheduleItem() {
    for (const scheduleItem of scheduleItems) { 
      if (!scheduleItem.week_day || !scheduleItem.from || !scheduleItem.to) return;
    }
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    })
      .then(() => {
        alert('Class registered with success!');
        navigate('/')
      })
      .catch(() => alert('Something went wrong, try again!'));
  }

  function setScheduleItemValue(itemIndex: number, field: string, value: string) {
    const serializedScheduleItems = scheduleItems.map((scheduleItem, index) => index === itemIndex ? 
      ({...scheduleItem, [field]: value }) :
      scheduleItem
    );
    setScheduleItems(serializedScheduleItems);
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader 
        title="Do you want to teach? That's amazing!"
        description='First of all, insert your information for registration!'
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>About you</legend>
            <Input label='Full name' name='name' value={name} onChange={e => setName(e.target.value)} />
            <Input label='Avatar (URL)' name='avatar' value={avatar} onChange={e => setAvatar(e.target.value)} />
            <Input label='Whatsapp' name='whatsapp' value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
            <Textarea label='Bio' name='bio' value={bio} onChange={e => setBio(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>About your class</legend>
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
            <Input label='How much do you charge for your hour?' name='cost' value={cost} onChange={e => setCost(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>
              Available schedule
              <button type='button' onClick={addNewScheduleItem}>+ New schedule</button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => (
              <div className='schedule-item' key={scheduleItem.week_day}>
                <Select 
                  label='Week day' 
                  name='week_day'
                  onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                  value={scheduleItem.week_day}
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
                  name='from'
                  label='From'
                  type='time'
                  value={scheduleItem.from}
                  onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                <Input 
                  name='to'
                  label='To'
                  type='time'
                  value={scheduleItem.to}
                  onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt='Warning' />
              Important! <br />
              Insert every single field
            </p>
            <button type='submit'>Register</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
