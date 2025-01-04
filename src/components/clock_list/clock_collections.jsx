import ClockDisplay from "../../shared/clock-display/clock_display"
import ClockActions from "../../shared/clock_actions/clock_actions"



const Clock_collection_item=({clock})=>{
    console.log("Inside clock collection item",clock)
    return(
        <>
        <ClockDisplay date={clock.date} title={clock.title} timezone={clock.timezone} offset={clock.offset}></ClockDisplay>
        <ClockActions isLocal={false}></ClockActions>
        </>
    )
}


export default Clock_collection_item