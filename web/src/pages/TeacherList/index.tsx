import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are your available teachers'>
        <form id='search-teachers'>
          <Select 
            label='Subject' 
            name='subject'
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
          <Input label='Schedule' name='time' type='time' />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
