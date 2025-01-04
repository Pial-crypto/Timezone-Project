import React from "react"; import { useState } from "react"; //
import constants from "../../constants/constants";
import Clock_form from "../clock_form/clock_form";
import TIMEZONE_OFFSETS from "../../constants/constants";
// const TIMEZONE_OFFSETS = { "UTC": { full_meaning: "Coordinated Universal Time (UTC)", offset_value: 0, }, GMT: { full_meaning: "Greenwich Mean Time (GMT)", offset_value: 0, }, PST: { full_meaning: "Pacific Standard Time (PST)", offset_value: -480, }, PDT: { full_meaning: "Pacific Daylight Time (PDT)", offset_value: -420, }, EST: { full_meaning: "Eastern Standard Time (EST)", offset_value: -300, }, EDT: { full_meaning: "Eastern Daylight Time (EDT)", offset_value: -240, }, CST: { full_meaning: "Central Standard Time (CST)", offset_value: -360, }, CDT: { full_meaning: "Central Daylight Time (CDT)", offset_value: -300, }, MST: { full_meaning: "Mountain Standard Time (MST)", offset_value: -420, }, MDT: { full_meaning: "Mountain Daylight Time (MDT)", offset_value: -360, }, IST: { full_meaning: "Indian Standard Time (IST)", offset_value: 330, }, CET: { full_meaning: "Central European Time (CET)", offset_value: 60, }, CEST: { full_meaning: "Central European Summer Time (CEST)", offset_value: 120, }, EET: { full_meaning: "Eastern European Time (EET)", offset_value: 120, }, EAT: { full_meaning: "East Africa Time (EAT)", offset_value: 180, }, WAT: { full_meaning: "West Africa Time (WAT)", offset_value: 60, }, HST: { full_meaning: "Hawaii Standard Time (HST)", offset_value: -600, }, AKST: { full_meaning: "Alaska Standard Time (AKST)", offset_value: -540, }, AKDT: { full_meaning: "Alaska Daylight Time (AKDT)", offset_value: -480, }, AEST: { full_meaning: "Australian Eastern Standard Time (AEST)", offset_value: 600, }, AEDT: { full_meaning: "Australian Eastern Daylight Time (AEDT)", offset_value: 660, }, ACST: { full_meaning: "Australian Central Standard Time (ACST)", offset_value: 570, }, AWST: { full_meaning: "Australian Western Standard Time (AWST)", offset_value: 480, }, NZST: { full_meaning: "New Zealand Standard Time (NZST)", offset_value: 720, }, NZDT: { full_meaning: "New Zealand Daylight Time (NZDT)", offset_value: 780, }, HKT: { full_meaning: "Hong Kong Time (HKT)", offset_value: 480, }, SGT: { full_meaning: "Singapore Time (SGT)", offset_value: 480, }, KST: { full_meaning: "Korea Standard Time (KST)", offset_value: 540, }, JST: { full_meaning: "Japan Standard Time (JST)", offset_value: 540, }, BST: { full_meaning: "British Summer Time (BST)", offset_value: 60, }, MSK: { full_meaning: "Moscow Standard Time (MSK)", offset_value: 180, }, AST: { full_meaning: "Atlantic Standard Time (AST)", offset_value: -240, }, NST: { full_meaning: "Newfoundland Standard Time (NST)", offset_value: -210, }, CHST: { full_meaning: "Chamorro Standard Time (CHST)", offset_value: 600, }, };
const ClockActions = ({isLocal=false}) => {

const [editOrCreate,editOrCreateState]=useState("none")

const  handleEditButton=()=>{
  editOrCreateState("edit")
  console.log(editOrCreate)
}

const  handleCreateButton=()=>{
  editOrCreateState("create")
}







return(
  <div>
    (!isLocal) && (<button onClick={handleEditButton}>Edit</button>)
    (isLocal) && (<button onClick={handleCreateButton}>Create</button>)

{editOrCreate=='edit' && (
<Clock_form  isLocal={false} isCreate={!editOrCreate=="edit"}></Clock_form>
)}

{editOrCreate=='create' && (
<Clock_form  isLocal={false} isCreate={editOrCreate=="create"}></Clock_form>
)}
  </div>
)
};

export default ClockActions;
