import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...attributes}) => {
  return (
    <div className='input-block'>
      <label htmlFor={name}>{label}</label>
      <input type='text' id={name} {...attributes} />
    </div>
  );
}

export default Input;

