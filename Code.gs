var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var email = Session.getActiveUser().getEmail();
var calendar = CalendarApp.getCalendarById(email);
var event = calendar.getEvents(new Date("2/6/2018 02:07 PM"), new Date("2/28/2018 11:59 PM"));
var lastRow = sheet.getLastRow();

function clearSheet(){
  sheet.getRange(2,1,lastRow-1,4).clearContent();
}

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

function addEvent(){
  var data = sheet.getRange("A2:D"+lastRow).getValues();
  for(var i = 0; i < data.length; i++){
    calendar.createEvent(data[i][0], data[i][1], data[i][2], {location: "", description: data[i][3]});
  }
}