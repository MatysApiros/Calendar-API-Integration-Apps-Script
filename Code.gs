var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var cal = CalendarApp.getCalendarById("");
var event = cal.getEvents(new Date("2/6/2018 02:07 PM"), new Date("2/28/2018 11:59 PM"));

function getEvents() {  
  for(var i = 0; i < event.length; i++) {
    
    var title = event[i].getTitle();
    var starDate = event[i].getStartTime();
    var endDate = event[i].getEndTime();
    var description = event[i].getDescription();
    
    sheet.getRange(i+2,1).setValue(title);
    sheet.getRange(i+2,2).setValue(starDate);
    sheet.getRange(i+2,2).setNumberFormat("dd/mm/yy h:mm:ss AM/PM");
    sheet.getRange(i+2,3).setValue(endDate);
    sheet.getRange(i+2,3).setNumberFormat("dd/mm/yy h:mm:ss AM/PM");
    sheet.getRange(i+2,4).setValue(description);
  }
}
