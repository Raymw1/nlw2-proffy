import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are your available teachers'>
        <form id='search-teachers'>
          <Input label='Subject' name='subject' />
          <Input label='Week day' name='week_day' />
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
