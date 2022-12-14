import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';
import backIcon from '../../assets/images/icons/back.svg';
import logoIcon from '../../assets/images/logo.svg';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: JSX.Element;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description, children}) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={backIcon} alt='Back' />
        </Link>
        <img src={logoIcon} alt='Proffy' />
      </div>
      <div className='header-content'>
        <strong>{title}</strong>
        { description && (
          <p>{description}</p>
        )}
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
