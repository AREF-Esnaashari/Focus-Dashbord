import { useEffect, useState } from 'react';
import { Countainer } from './countainer';
import { DateItem } from './DateItem';
import { ErrorFetch } from './errorCPN';
import { LodongCpn } from './LodingFetching';
import { Navigation } from './Navigation';
import { SetupStep } from './SetupStep';
import { TimeItem } from './TimeItem';
import { WelcomeForm } from './WelcomeForm';

// FetchCity: https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
//FetchIntoCity https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;
export default function FocusDashbord() {
  // state=================
  const [user, setUser] = useState(() => {
    let storage = JSON.parse(localStorage.getItem('userVorodi'));
    return storage || {};
  });
  let [errFetching, setErrFetching] = useState('');
  let [lodingCpn, setLodingCpn] = useState(false);
  const [weather, setWeather] = useState({});

  // functions======================
  function handleLogout() {
    localStorage.clear();
    location.reload();
  }

  //  useEffect =================
  useEffect(() => {
    async function fetchWeather() {
      try {
        if (!user.city) return;
        setErrFetching('');
        setLodingCpn(true);
        let res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${user.city}&count=1&language=en&format=json`
        );
        if (!res.ok) throw new Error('Wrong things happen');
        let data = await res.json();

        let { latitude, longitude } = data.results[0];
        if (!latitude && !longitude) return;
        let resWeather = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
        );
        let dataWeather = await resWeather.json();
        let current = dataWeather.current_weather;
        setWeather(current);

        setLodingCpn(false);
      } catch (err) {
        setErrFetching(err.message);
      } finally {
        setErrFetching('');
      }
    }

    fetchWeather();
  }, [user.city]);

  let isExist = localStorage.getItem('userVorodi');
  return (
    <div className="main">
      <Navigation>
        <DateItem />
        <TimeItem />
      </Navigation>
      <Countainer>
        {isExist ? (
          <>
            {lodingCpn && <LodongCpn />}
            {errFetching && <ErrorFetch />}
            {!errFetching && !lodingCpn && (
              <>
                <div className="section1">
                  <div className="col-1-section1">
                    <div className="aboutWeather">
                      <div>
                        <span>🌑🌝</span>
                      </div>
                      <div>
                        <h1>Weather:</h1>
                      </div>
                      <div>
                        <p>in your city</p>
                      </div>
                    </div>
                    <div className="TodoCountainer">
                      <div className="inpTodo"></div>
                      <div className="listTodo"></div>
                    </div>
                    <div className="infoCity"></div>
                  </div>
                  <div className="col-2-section1"></div>
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
