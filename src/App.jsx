import { DateItem } from './DateItem.jsx';
import { Navigation } from './Navigation.jsx';
import { TimeItem } from './TimeItem.jsx';

// FetchCity: https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
//FetchIntoCity https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;

export default function FocusDashbord() {
  return (
    <div className="main">
      <Navigation>
        <DateItem />
        <TimeItem />
      </Navigation>
    </div>
  );
}
