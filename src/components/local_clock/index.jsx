import ClockDisplay from "../../shared/clock-display/clock_display";
import Clock_actions from "../../shared/clock_actions/clock_actions";

const LocalClock = ({ date, timezone, offset }) => {
  console.log("I am the Local Clock offset",offset);
  console.log("I am the Local Clock timezone",timezone);
  return (
    <div  >
<h1 >Welcome to TimeZone application</h1>

     
      <ClockDisplay
        date={date}
        title={"Local clock"}
        timezone={timezone}
        offset={offset}
        isLocal={true}
       
      ></ClockDisplay>
    </div>
  );
};

export default LocalClock;