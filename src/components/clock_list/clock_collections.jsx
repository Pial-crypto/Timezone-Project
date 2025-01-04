import ClockDisplay from "../../shared/clock-display/clock_display"



const Clock_collection_item=({clock})=>{
    console.log("Inside clock collection item",clock)
    return(
        <ClockDisplay date={clock.date} title={clock.title} timezone={clock.timezone} offset={clock.offset}></ClockDisplay>
    )
}


export default Clock_collection_item