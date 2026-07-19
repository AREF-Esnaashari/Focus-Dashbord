export function AboutCountainer({ weather, user, setIsOpenModal, tasks, children }) {
  const hour = weather.time ? weather.time.split('T')[1].split(":")[0] : 0;

  return (
    <div className={weather.is_day === 0 ? 'aboutWeather night' : 'day aboutWeather'}>
      <div>
        <div
          className="iconList"
          onClick={() => {
            setIsOpenModal((prev) => !prev);
          }}
        >
          <span className="countTask">{tasks.length}</span>
          📃
        </div>
        <h1 className="temp-display">{weather.temperature}°C</h1>
        <span className="day-night-text">
          <p>
            {hour >= 5 && hour < 12
              ? '🌅 Good Morning'
              : hour >= 12 && hour < 18
                ? '☀️ Good Afternoon'
                : hour >= 18 && hour < 21
                  ? '🌆 Good Evening'
                  : '🌙 Good Night'}
          </p>
          <p>
            {' '}
            <b className="aboutUser">{user.name.toUpperCase()}</b> from <b className="aboutUser">{user.city.toUpperCase()}</b>{' '}
          </p>
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
