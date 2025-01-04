import { addMinutes } from "date-fns";

const useClock = (label, timezone, offset, isLocal = false) => {
  let utc = new Date();
  const localOffset = utc.getTimezoneOffset(); // Local timezone offset in minutes


  // Convert to UTC
  utc = addMinutes(utc, -localOffset); // Adjust local time to UTC
  // Adjust to the target timezone
  offset && (utc = addMinutes(utc, offset)) // Add target timezone offset

  return {
    title: isLocal ? "Local Clock" : label || "Default Clock",
    timezone: timezone,
    offset: isLocal?localOffset:offset,
    date: utc.toLocaleString(), // Adjusted time in the target timezone
  };
};

export default useClock;
