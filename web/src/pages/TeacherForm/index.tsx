import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader 
        title="Do you want to teach? That's amazing!"
        description='First of all, insert your information for registration!'
      />
      <main>
        <fieldset>
          <legend>About you</legend>
          <Input label='Full name' name='name' />
          <Input label='Avatar (URL)' name='avatar' />
          <Input label='Whatsapp' name='whatsapp' />
        </fieldset>
        <fieldset>
          <legend>About your class</legend>
          <Input label='Subject' name='subject' />
          <Input label='How much do you charge?' name='cost' />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt='Warning' />
            Important! <br />
            Insert every single field
          </p>
          <button type='button'>Register</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
