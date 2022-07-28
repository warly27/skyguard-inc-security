import React from 'react';
import {AppMain, AppAbout, AppGallery, AppService, AppCareer, AppFaq, AppContact } from '../components/pages'

const AppHome = () => {
  return (
    <div className="main">
      <AppMain/>
      <AppAbout/>
      <AppGallery/>
      <AppService/>
      <AppCareer/>
      <AppFaq/>
      <AppContact/>
    </div>
  );
}

export default AppHome;