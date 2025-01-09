import { addMinutes, differenceInSeconds } from "date-fns";

const useClock = (label, timezone, offset, isLocal = false) => {
  let utc = new Date(); // Current local time
  const localUtc = new Date(utc); // Copy for local time reference

  // Get local timezone offset in minutes
  const localOffset = utc.getTimezoneOffset(); // Local timezone offset (minutes)

  console.log("Local Timezone:", getLocalTimeZone());
  console.log("Local Time Offset (minutes):", localOffset);

  // Convert to UTC
  if (!isLocal) {
    utc = addMinutes(utc, -localOffset); // Adjust local time to UTC
  }

  // Adjust to the target timezone offset
  if (offset) {
    utc = addMinutes(utc, offset); // Adjust UTC to the target timezone
  }

  console.log("Local UTC:", localUtc.toLocaleString());
  console.log("Adjusted UTC:", utc.toLocaleString());

  // Get the time difference between local and target times
  const timeDifference = getTimeDifference(localUtc, utc);
 

  return {
    difference: timeDifference,
    title: isLocal ? "Local Clock" : label || "Default Clock",
    timezone: timezone || getLocalTimeZone(),
    offset: isLocal ? localOffset : offset,
    date: utc.toLocaleString(), // Adjusted time in the target timezone
  };
};

const getTimeDifference = (date1, date2) => {


  // Total difference in seconds
  const totalSeconds = differenceInSeconds(date1, date2);
console.log("Total Seconds",totalSeconds)
  // Convert seconds into hours, minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.abs(totalSeconds % 60);
 // const difference = {hours} + "h" + minutes + "m" + seconds + "s"; // কঠিন পড়তে

  const difference = `${hours}h ${minutes}m ${seconds}s`;
  console.log(difference)
  return difference
  ;
};

const getLocalTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export default useClock;
