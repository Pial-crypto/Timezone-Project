import React, { useState } from "react";
import TIMEZONE_OFFSETS from "../../constants/constants";
import useClock from "../../hook/useClock";
import classes from "./index.module.css"

const ClockForm = ({ isCreate, handleCloseForm, handleSaveClock }) => {
  const [title, setTitle] = useState("");
  const [timezone, setTimezone] = useState("UTC"); // Default timezone key
  const [offsetValue, setOffsetValue] = useState(TIMEZONE_OFFSETS["UTC"].offset_value); // Default offset (UTC)

  // Handle title input change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Handle timezone dropdown change
  const handleTimeZoneChange = (event) => {
    const value = event.target.value;
    setTimezone(value);
    setOffsetValue(TIMEZONE_OFFSETS[value].offset_value);
  };

  // Handle offset dropdown change
  const handleOffsetChange = (event) => {
    const newOffset = parseInt(event.target.value, 10) * 60; // Convert hours to minutes
    setOffsetValue(newOffset);

    // Allow free offset change for UTC or GMT
    if (timezone === "UTC" || timezone === "GMT") {
      return;
    }

    // Find the matching timezone for the new offset
    const matchingTimezone = Object.keys(TIMEZONE_OFFSETS).find(
      (key) => TIMEZONE_OFFSETS[key].offset_value === newOffset
    );

    if (matchingTimezone) {
      setTimezone(matchingTimezone);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newClock = useClock(title, timezone, offsetValue);
    console.log("I am the new clock",newClock)
handleSaveClock(newClock)

 
  };

  return (
    <div className={classes.card}>
      <h3>{isCreate ? "Create New Clock" : "Edit Clock"}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter clock title"
            required
          />
        </label>
        <br />
        <label>
          Timezone:
          <select value={timezone} onChange={handleTimeZoneChange}>
            {Object.keys(TIMEZONE_OFFSETS).map((key) => (
              <option key={key} value={key}>
                {TIMEZONE_OFFSETS[key].full_meaning}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="offset-select">Offset (Hours):</label>
        <select
          id="offset-select"
          value={offsetValue / 60} // Convert minutes to hours for display
          onChange={handleOffsetChange}
        >
          {Object.entries(TIMEZONE_OFFSETS).map(([key, value]) => (
            <option key={key} value={value.offset_value / 60}>
              {value.offset_value / 60} hours
            </option>
          ))}
        </select>
        <br />
        <button type="submit">{isCreate ? "Create" : "Save"}</button>
        <button type="button" onClick={handleCloseForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ClockForm;
