var date = new Date();
console.log(date); // current date and time // output: Sat Aug 30 2025 16:04:08 GMT+0500 (Pakistan Standard Time)

var year = date.getFullYear();
console.log(year); // current year // output: 2025

var month = date.getMonth() + 1; // Months are zero-based, so we add 1
console.log(month); // current month // output: 8

var day = date.getDate();
console.log(day); // current day of the month // output: 30

var hours = date.getHours();
console.log(hours); // current hours // output: 16

var minutes = date.getMinutes();
console.log(minutes); // current minutes // output: 4

var seconds = date.getSeconds();
console.log(seconds); // current seconds // output: 8

var milliseconds = date.getMilliseconds();
console.log(milliseconds); // current milliseconds // output: 123 (example output)

var time = date.getTime();
console.log(time); // milliseconds since January 1, 1970 // output: 1735377848123 (example output)

var dayOfWeek = date.getDay();
console.log(dayOfWeek); // current day of the week (0-6, where 0 is Sunday) // output: 6 (Saturday)

var isoString = date.toISOString();
console.log(isoString); // ISO 8601 format // output: 2025-08-30T11:04:08.123Z (example output)

var localeString = date.toLocaleString();
console.log(localeString); // locale-specific format // output: 8/30/2025, 4:04:08 PM (example output)