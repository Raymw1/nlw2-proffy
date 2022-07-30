import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Landing />} />
        <Route path='/study' element={<TeacherList />} />
        <Route path='/give-classes' element={<TeacherForm />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
