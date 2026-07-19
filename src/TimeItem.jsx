export function TimeItem() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const currentTime = `${currentHour}:${currentMinute}`;

 
  

  return (
    <div className="countainerTime">
      <p className="time">Time:{currentTime}</p>
    </div>
  );
}
