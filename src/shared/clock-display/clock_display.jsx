import Test from "../../Test";
import ClockActions from "../clock_actions/clock_actions";
import Clock_form from "../clock_form/clock_form";
import { useState } from "react";
import classes from "./index.module.css"



const ClockDisplay = ({
  date,
  title,
  timezone,
  offset,
  isLocal,
  difference
}) => {

  const thisClock={
    date,
    title,
    timezone,
    offset,
    isLocal,
    difference
  }

  const [clock,setClock]=useState(thisClock)
  console.log("I am the clock display",date)

  console.log(classes.card)
  console.log(classes["deleted-message"])
  const [isDeleted, setIsDeleted] = useState(false)
  console.log("I am the clock display offset",offset)

  const updateClock=(updatedClock)=>{
    setClock({...updatedClock,updatedClock})
  }

  const handleDeleteButton=()=>{
    setIsDeleted(true)
  }
  console.log("I am the clock display")
  if (!date) {
    return <p>Loading...</p>; // If date is not available, show loading
  }

 
return (
  isDeleted ? (
    <div className={classes["deleted-message"]}>This clock has been deleted</div>
  ) : (
    <div className={classes.card}>

     {isLocal && (<div className={classes.welcome}>Welcome to localclock</div>)}
      <h1>Title: {clock.title || "No Title"}</h1>
      <h3>{date.toString()}</h3>
      <p>
        {clock.timezone || "Unknown Timezone"} |{" "}
        {clock.offset/60 }
      </p>
      {!isLocal && <p>Difference: {difference}</p>}
      <ClockActions
        updateClock={updateClock}
        isLocal={isLocal}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  )
);
};

export default ClockDisplay;
