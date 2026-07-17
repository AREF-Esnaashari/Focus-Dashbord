export function InfoCity({ user, weather }) {
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
              <strong>{weather.is_day === 1 ? '☀️ Day' : '🌙 Night'}</strong>
            </div>
            <div className="detail-item">
              <span>Update:</span>
              <strong className="time-text">
                {weather.time ? weather.time.split('T')[1] : ''}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
