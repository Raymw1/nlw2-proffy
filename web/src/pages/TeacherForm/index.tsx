import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
          <Textarea label='Bio' name='bio' />
        </fieldset>
        <fieldset>
          <legend>About your class</legend>
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
