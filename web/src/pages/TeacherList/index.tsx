import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import backIcon from '../../assets/images/icons/back.svg';
import logoIcon from '../../assets/images/logo.svg';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are your available teachers'>
        <form id='search-teachers'>
          <div className='input-block'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' />
          </div>
          <div className='input-block'>
            <label htmlFor='week-day'>Week Day</label>
            <input type='text' id='week-day' />
          </div>
          <div className='input-block'>
            <label htmlFor='time'>Schedule</label>
            <input type='text' id='time' />
          </div>
        </form>
      </PageHeader>
    </div>
  );
}

export default TeacherList;
