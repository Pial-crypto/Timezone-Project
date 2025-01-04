const TIMEZONE_OFFSETS = {
  UTC: { full_meaning: "Coordinated Universal Time (UTC)", offset_value: 0 },
  GMT: { full_meaning: "Greenwich Mean Time (GMT)", offset_value: 0 },
  PST: { full_meaning: "Pacific Standard Time (PST)", offset_value: -480 },
  PDT: { full_meaning: "Pacific Daylight Time (PDT)", offset_value: -420 },
  EST: { full_meaning: "Eastern Standard Time (EST)", offset_value: -300 },
  EDT: { full_meaning: "Eastern Daylight Time (EDT)", offset_value: -240 },
  CST: { full_meaning: "Central Standard Time (CST)", offset_value: -360 },
  CDT: { full_meaning: "Central Daylight Time (CDT)", offset_value: -300 },
  MST: { full_meaning: "Mountain Standard Time (MST)", offset_value: -420 },
  MDT: { full_meaning: "Mountain Daylight Time (MDT)", offset_value: -360 },
  IST: { full_meaning: "Indian Standard Time (IST)", offset_value: 330 },
  CET: { full_meaning: "Central European Time (CET)", offset_value: 60 },
  CEST: { full_meaning: "Central European Summer Time (CEST)", offset_value: 120 },
  EET: { full_meaning: "Eastern European Time (EET)", offset_value: 120 },
  EAT: { full_meaning: "East Africa Time (EAT)", offset_value: 180 },
  WAT: { full_meaning: "West Africa Time (WAT)", offset_value: 60 },
  HST: { full_meaning: "Hawaii Standard Time (HST)", offset_value: -600 },
  AKST: { full_meaning: "Alaska Standard Time (AKST)", offset_value: -540 },
  AKDT: { full_meaning: "Alaska Daylight Time (AKDT)", offset_value: -480 },
  AEST: { full_meaning: "Australian Eastern Standard Time (AEST)", offset_value: 600 },
  AEDT: { full_meaning: "Australian Eastern Daylight Time (AEDT)", offset_value: 660 },
  ACST: { full_meaning: "Australian Central Standard Time (ACST)", offset_value: 570 },
  AWST: { full_meaning: "Australian Western Standard Time (AWST)", offset_value: 480 },
  NZST: { full_meaning: "New Zealand Standard Time (NZST)", offset_value: 720 },
};

// Default export
export default TIMEZONE_OFFSETS;
