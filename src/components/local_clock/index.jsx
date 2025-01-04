import ClockDisplay from "../../shared/clock-display/clock_display";
import Clock_actions from "../../shared/clock_actions/clock_actions";
const LocalClock = ({ date, timezone, offset }) => { // প্রপস অবজেক্ট ডিক্লেয়ার করা
  return (
    <div>
      Welcome to LocalClock
      <ClockDisplay date={date} title={"Local clock"
      } timezone={timezone} offset={offset}></ClockDisplay>
    <Clock_actions isLocal={true} ></Clock_actions>
    </div>
  );
};

export default LocalClock;
