import React from 'react';
import Description from './description/description';
import FirstScreen from './feirst_screen/first_screen';
import Main from './main/main';

function LandingPage() {
  return (
    <div>
      <Description />
      <FirstScreen />
      <Main />
    </div>
  );
}

export default LandingPage;
