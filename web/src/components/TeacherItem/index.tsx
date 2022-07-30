import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img src='https://github.com/Raymw1.png'alt='Raymw' />
        <div>
          <strong>Rayan Wilbert</strong>
          <span>Linear Algebra</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        <br /><br />
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </p>
      <footer>
        <p>
          Price/hour
          <strong>U$ 40.00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Get in touch
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
