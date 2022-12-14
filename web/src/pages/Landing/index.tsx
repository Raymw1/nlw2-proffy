import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      setTotalConnections(response.data.total);
    })
  }, []);
  

  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Your online studies platform.</h2>
        </div>
        <img src={landingImg} alt='Studies platform' className='hero-image' />
        <div className='buttons-container'>
          <Link to='/study' className='study'>
            <img src={studyIcon} alt='Study' />
            Study
          </Link>
          <Link to='/give-classes' className='give-classes'>
            <img src={giveClassesIcon} alt='Teach' />
            Teach
          </Link>
        </div>
        <span className='total-connections'>
          {totalConnections} connections yet <img src={purpleHeartIcon} alt='Purple Heart' />
        </span>
      </div>
    </div>
  );
};

export default Landing;
