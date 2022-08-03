import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
};


export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  function createNewConnection() {
    api.post('/connections', { user_id: teacher.id });
  }

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Price/hour
          <strong>U$ {teacher.cost}</strong>
        </p>
        <a href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection} target='_blank'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Get in touch
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
