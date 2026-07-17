export function AboutCountainer({ weather, user, setIsOpenModal, children }) {
  return (
    <div className={weather.is_day === 0 ? 'aboutWeather night' : '  aboutWeather'}>
      <div>
        <div
          className="iconList"
          onClick={() => {
            setIsOpenModal((prev) => !prev);
          }}
        >
          📃
        </div>
        <h1 className="temp-display">{weather.temperature}°C</h1>
        <span className="day-night-text">
          {weather.is_day === 1 ? '🌞Good morning' : '🌑 Good evening '}
          <b>{user.name.toUpperCase()}</b>
        </span>
      </div>
      <div >{children}</div>
    </div>
  );
}
