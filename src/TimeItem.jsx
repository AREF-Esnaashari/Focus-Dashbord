export function TimeItem() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const currentTime = `${currentHour}:${currentMinute}`;

  const dayOrNight = currentHour >= 6 && currentHour < 18 ? 'day' : 'Night';
  //   Based on this 👆, we determine whether it is day or night.

  return (
    <div className="countainerTime">
      <p className="time">Time:{currentTime}</p>
    </div>
  );
}
