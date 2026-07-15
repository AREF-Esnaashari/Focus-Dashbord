
import { useState } from 'react';
import { Countainer } from './countainer.jsx';
import { DateItem } from './DateItem.jsx';
import { Navigation } from './Navigation.jsx';
import { SetupStep } from './SetupStep.jsx';
import { TimeItem } from './TimeItem.jsx';
import { WelcomeForm } from './WelcomeForm.jsx';

// FetchCity: https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
//FetchIntoCity https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;

export default function FocusDashbord() {
  // let [userName, setUserName] = useState('');
  // let [yourCity, setYourCity] = useState('');
  // function handleSaveUser() {

  // }
  return (
    <div className="main">
      <Navigation>
        <DateItem />
        <TimeItem />
      </Navigation>
      <Countainer>
        <SetupStep>
          <WelcomeForm />
        </SetupStep>
      </Countainer>
    </div>
  );
}
