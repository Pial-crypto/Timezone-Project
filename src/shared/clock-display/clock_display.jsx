const ClockDisplay = ({ date, title, timezone, offset }) => {
    if (!date) {
      return <p>Loading...</p>; // যদি date না থাকে, লোডিং দেখান
    }
  
    return (
      <div>
        <h1>Title: {title || "No Title"}</h1> {/* যদি title না থাকে */}
        <h3>{date.toString()}</h3>
        <p>
          {timezone || "Unknown Timezone"} | {offset ? offset / 60 : "No Offset"} {/* টাইমজোন ও অফসেট */}
        </p>
      </div>
    );
  };
  
  export default ClockDisplay;
  