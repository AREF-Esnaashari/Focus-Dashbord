export function DayOrNight({ pointOfVeiw, setPointOfVeiw }) {

  function handlePointOfVeiw() {
    setPointOfVeiw((prev) => !prev);
  }
  return (
    <div className="countainerDayOrNight">
      <span onClick={handlePointOfVeiw}>{pointOfVeiw ? '🌝' : '🌑'}</span>
    </div>
  );
}
