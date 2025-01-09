import React, { useState } from "react";
import ClockForm from "../clock_form/clock_form";
import ClockDisplay from "../clock-display/clock_display";
import ClockList from "../../components/clock_list";
import Test from "../../Test";
const ClockActions = ({isLocal,updateClock,handleDeleteButton}) => {
  const [actionMode, setActionMode] = useState(""); // Tracks whether it's create or edit
  const [clockList, setClockList] = useState([]); // Stores the list of clocks
console.log("I am the clock actions")
console.log(actionMode,"  action mode")
  const handleCreateButton = () => {
    setActionMode("create");
  };

  const handleEditButton = () => {
    setActionMode("edit");
    
  };
  console.log("I am the clock actions")



  const handleCloseForm = () => {
    setActionMode(""); // Close the form
  };

  const handleSaveClock = (newClock) => {
    if (actionMode === "create") {
      setClockList([...clockList, newClock]); // Add new clock
    } else if (actionMode === "edit") {
      updateClock(newClock)
      //console.log("Edit functionality not implemented yet");
    }
   // handleCloseForm(); // Close the form
  };

  return (

    <div>
      

     { isLocal && (<button onClick={handleCreateButton}>Create Clock</button>)
}
      {!isLocal && (<button onClick={handleEditButton}>Edit Clock</button>)
}

{!isLocal && (<button onClick={handleDeleteButton}>Delete Clock</button>)
}
      {/* Show ClockForm only when actionMode is set */}
      {actionMode && (
        <ClockForm
          isCreate={actionMode === "create"} // Pass true if it's create mode
          handleCloseForm={handleCloseForm} // Pass close handler
          handleSaveClock={handleSaveClock} // Save clock handler
        />
      )}

      {/* Display the list of clocks */}
    


      <ClockList clockList={clockList}></ClockList>
 
        
    
    </div>
  );
};

export default ClockActions;
