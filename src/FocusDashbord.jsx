import { useEffect, useState } from 'react';
import { AboutCountainer } from './AboutCountainer.jsx';
import { Col1 } from './Col1.jsx';
import { Countainer } from './countainer.jsx';
import { DateItem } from './DateItem.jsx';
import { DayOrNight } from './DayOrNight.jsx';
import { ErrorFetch } from './errorCPN.jsx';
import { InfoCity } from './InfoCity.jsx';
import { LodongCpn } from './LodingFetching.jsx';
import { Navigation } from './Navigation.jsx';
import { SetupStep } from './SetupStep.jsx';
import { TimeItem } from './TimeItem.jsx';
import { Todo } from './Todo.jsx';
import { WelcomeForm } from './WelcomeForm.jsx';
// FetchCity: https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
//FetchIntoCity https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;

export default function FocusDashbord() {
  // state=================
  const [user, setUser] = useState(() => {
    let storage = JSON.parse(localStorage.getItem('userVorodi'));
    return storage || {};
  });
  let [tasks, setTasks] = useState(() => {
    let storage = JSON.parse(localStorage.getItem('task'));
    return storage || [];
  });
  let [errFetching, setErrFetching] = useState('');
  let [lodingCpn, setLodingCpn] = useState(false);
  const [weather, setWeather] = useState({});

  let [isOpenModal, setIsOpenModal] = useState(false);
  let [pointOfVeiw, setPointOfVeiw] = useState(true);


  // functions======================

  function handleLogout() {
    localStorage.clear();
    location.reload();
  }

  //  useEffect =================
  useEffect(() => {
    async function fetchWeather() {
      if (!user.city) return;

      try {
        setErrFetching('');
        setLodingCpn(true);

        let res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${user.city}&count=1&language=en&format=json`
        );

        if (!res.ok) throw new Error('Failed to fetch location data.');

        let data = await res.json();

        if (!data.results || data.results.length === 0) {
          throw new Error('City not found! Please check.');
        }
  

        let validCountery = data.results[0].population > 10000;

        if (!data.results[0] && validCountery) {
          throw new Error('City not found!');
        }

        const { latitude, longitude } = data.results[0];

        let resWeather = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
        );
        if (!resWeather.ok) throw new Error('Failed to fetch weather data.');

        let dataWeather = await resWeather.json();

        setWeather(dataWeather.current_weather);
        setLodingCpn(false);
      } catch (err) {
        setErrFetching(err.message);
        setLodingCpn(false);
      }
    }

    fetchWeather();
  }, [user.city]);
  let isExist = localStorage.getItem('userVorodi');
  return (
    <div className={pointOfVeiw ? 'main day' : 'main night'}>
      <Navigation>
        <DateItem />
        <DayOrNight setPointOfVeiw={setPointOfVeiw} pointOfVeiw={pointOfVeiw} />
        <TimeItem />
      </Navigation>
      <Countainer>
        {isExist ? (
          <>
            {lodingCpn && <LodongCpn />}
            {errFetching && <ErrorFetch errFetching={errFetching} />}
            {!errFetching && !lodingCpn && (
              <>
                <div className="section1">
                  <Col1>
                    <AboutCountainer
                      weather={weather}
                      user={user}
                      setIsOpenModal={setIsOpenModal}
                      tasks={tasks}
                    >
                      {isOpenModal && (
                        <Todo setIsOpenModal={setIsOpenModal} setTasks={setTasks} tasks={tasks} />
                      )}
                    </AboutCountainer>

                    <InfoCity user={user} weather={weather} />
                  </Col1>
                  <div className="col-2-section1">
                    <button className="dashboard-logout-btn" onClick={handleLogout}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                      </svg>
                      Logout
                    </button>

                    <div className="dashboard-guideline">
                      <span>
                        <span>
                          🎯 <strong>Focus Mode:</strong> Write down your next big step and press{' '}
                          <strong>Enter</strong>.
                        </span>
                      </span>
                    </div>

                    <div className="dashboard-signature">
                      Designed & Crafted by <span className="signature-name">a.Esnaashari</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <SetupStep>
            <WelcomeForm user={user} setUser={setUser} />
          </SetupStep>
        )}
      </Countainer>
    </div>
  );
}
