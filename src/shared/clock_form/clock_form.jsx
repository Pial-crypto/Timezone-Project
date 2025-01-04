import React, { useState } from "react";
import TIMEZONE_OFFSETS from "../../constants/constants"; // Assuming this is an object of time zone data
import useClock from "../../hook/useClock"; // Assuming this is a helper function, not a hook
import ClockList from "../../components/clock_list"; // Displays the list of clocks

const Clock_form = ({  isCreate }) => {
  // WRONG: You did not check if TIMEZONE_OFFSETS was undefined or null.
  // if (TIMEZONE_OFFSETS) { /* some logic */ }
  // FIXED: Added a null/undefined check for TIMEZONE_OFFSETS.
  if (!TIMEZONE_OFFSETS) {
    console.error("TIMEZONE_OFFSETS is undefined or null");
    return <div>Error: Timezone data is unavailable.</div>;
  }

  // WRONG: You used incorrect destructuring like `{ title, titleState }`.
  // const { title, titleState } = useState("");
  // FIXED: Proper destructuring of `useState` into `[state, setState]`.
  const [title, setTitle] = useState(""); // Holds the title of the clock
  const [offsetValue, setOffsetValue] = useState(TIMEZONE_OFFSETS["UTC"].offset_value); // Default offset (UTC)
  const [fullMeaning, setFullMeaning] = useState(TIMEZONE_OFFSETS["UTC"].full_meaning); // Default full meaning (UTC)
  const [clockList, setClockList] = useState([]); // Stores the list of clocks

  const handleTitleChange = (event) => {
    // WRONG: You tried to call titleState directly without `setState`.
    // titleState(event.target.value);
    // FIXED: Use the `setTitle` function from `useState`.
    setTitle(event.target.value);
  };

  const handleOffsetChange = (event) => {
    // WRONG: You did not convert the offset properly between hours and minutes.
    // const value = event.target.value;
    // FIXED: Convert to minutes for internal state and back to hours for display.
    const value = parseInt(event.target.value, 10) * 60; // Convert to minutes
    setOffsetValue(value);

    // Update fullMeaning only if it's not GMT or UTC
    if (fullMeaning !== "GMT" && fullMeaning !== "UTC") {
      const key = Object.keys(TIMEZONE_OFFSETS).find(
        (key) => TIMEZONE_OFFSETS[key].offset_value === value
      );
      if (key) {
        setFullMeaning(key);
      }
    }
  };

  const handleTimeZoneChange = (event) => {
    // WRONG: You did not update fullMeaning and offsetValue together.
    // const value = event.target.value; setFullMeaning(value);
    // FIXED: Update both fullMeaning and offsetValue based on the selected timezone.
    const value = event.target.value;
    setFullMeaning(value);
    setOffsetValue(TIMEZONE_OFFSETS[value].offset_value);
  };

  const handleSubmit = (event) => {
    // WRONG: You missed `event.preventDefault()`, causing page reload.
    // // some code without event.preventDefault()
    // FIXED: Prevent page reload on form submission.
    event.preventDefault();

    // WRONG: You treated `useClock` like a hook and used it incorrectly.
    // const newClock = useClock; // Improper usage
    // FIXED: Use `useClock` as a helper function and call it with arguments.
    const newClock = useClock(title, fullMeaning, offsetValue);
    console.log(newClock)
    setClockList([...clockList, newClock]); // Add the new clock to the clock list
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* WRONG:   Title input was missing conditional rendering for `isLocal`. */}
        {/* {!isLocal && <input type="text" />} */}
        {/* FIXED: Added conditional rendering for title input. */}
        {!isLocal && (
          <div>
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              value={title} // FIXED: Added controlled input binding
              onChange={handleTitleChange} // Updates the title state
            />
          </div>
        )}

        {/* WRONG: Dropdown for time zones was missing controlled `value` binding. */}
        {/* <select name="TimeZone" id="timezone-select" onChange={handleTimeZoneChange}></select> */}
        {/* FIXED: Added controlled binding for value and onChange. */}
        <label htmlFor="timezone-select">Choose Timezone:</label>
        <select
          name="TimeZone"
          id="timezone-select"
          value={fullMeaning}
          onChange={handleTimeZoneChange}
        >
          {Object.keys(TIMEZONE_OFFSETS).map((key) => (
            <option key={key} value={key}>
              {TIMEZONE_OFFSETS[key].full_meaning}
            </option>
          ))}
        </select>
      </div>

      {/* WRONG: Offset dropdown was missing controlled binding. */}
      {/* <select id="offset-select" onChange={handleOffsetChange}></select> */}
      {/* FIXED: Added controlled binding for value and onChange. */}
      <label htmlFor="offset-select">Choose Offset:</label>
      <select
        id="offset-select"
        value={offsetValue / 60} // Convert to hours for display
        onChange={handleOffsetChange}
      >
        {Object.entries(TIMEZONE_OFFSETS).map(([key, value]) => (
          <option key={key} value={value.offset_value / 60}>
            {value.offset_value / 60} hours
          </option>
        ))}
      </select>

      <button type="submit">Confirm</button>

      {/* WRONG: No error handling for ClockList if clockList is undefined. */}
      {/* <ClockList /> */}
      {/* FIXED: Ensure clockList is passed correctly. */}
      <ClockList clockList={clockList}></ClockList>
    </form>
  );
};

export default Clock_form;
