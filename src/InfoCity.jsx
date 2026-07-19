export function InfoCity({ user, weather }) {
  const hour = weather.time ? weather.time.split("T")[0].split(":")[0] : "";

  return (
    <div className={weather.is_day === 1 ? 'infoCity' : 'infoCityNight infoCity'}>
      <div className="details-card">
        <div className="details-content">
          <p className="details-title">More information about your city({user.city})</p>
          <div className="details-grid">
            <div className="detail-item">
              <span>winddirection :</span>
              <strong>{weather.winddirection}°</strong>
            </div>
            <div className="detail-item">
              <span>windspeed:</span>
              <strong>{weather.windspeed} km/h</strong>
            </div>
            <div className="detail-item">
              <span>Time:</span>
              <strong>
                {hour >= 5 && hour < 12
                  ? '🌝DAY'
                  : hour >= 12 && hour < 18
                    ? '☀️ Afternoon'
                    : hour >= 18 && hour < 21
                      ? '🌆 Evening'
                      : '🌙  Night'}
              </strong>
            </div>
            <div className="detail-item">
              <span>Clock:</span>
              <strong className="time-text">
                {weather.time ? weather.time.split('T').slice(1) : ''}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
