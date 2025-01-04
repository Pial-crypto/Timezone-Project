
import LocalClock from './components/local_clock'
import clock_form from './shared/clock_form/clock_form';
import useClock from './hook/useClock';
import ClockList from './components/clock_list';
import { useState } from 'react';
import ClockActions from './shared/clock_actions/clock_actions';
import { tr } from 'date-fns/locale';

function App() {
  //const date=new Date()
  //const offsett=date.getTimezoneOffset()
  // console.log(date,"",offsett)
   //const { clock } = useClock("Local Time", "PST"); // Pass label and timezone
   //const { title, timezone, offset ,date} = clock; // Destructure clock
  


const localClock=useClock(null,null,null,true)

 // console.log(localDate,timezone,offset)
  return (
   
     
      
    <div>
      <LocalClock date={localClock.date} timezone={localClock.timezone} offset={localClock.offset} ></LocalClock>
      
      </div>

   

   

  );
}

export default App