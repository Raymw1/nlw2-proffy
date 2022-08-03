import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...attributes}) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select id={name} value='0' {...attributes} >
        <option value='0' disabled hidden>Select an option</option>
        {options.map(option => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;

