var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
       console.log("Today is : " + daylist[day] + ".");
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = (hour >= 12)? " PM ":" AM ";
        hour = (hour >= 12)? hour - 12: hour;

if (hour===0 && prepand===' PM ') 
{    
if (minute===0 && second===0)
{  
hour=12;
prepand=' Noon';
}  
else
{  
hour=12;
prepand=' PM';
}  
}  

if (hour===0 && prepand===' AM ') 
{    
if (minute===0 && second===0)
{  
hour=12;
prepand=' Midnight';
}  
else
{  
hour=12;
prepand=' AM';
}  
}  
  
  
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

/// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

///function printDate() {
///    var today = new Date();
///    var weekDay = today.getDay();
///    console.log("Today is: " + daysOfWeek[weekDay]);
    
//////    var hours = today.getHours();
///    var minutes = today.getMinutes();
 ///   var seconds = today.getSeconds();
///    var amPm = "AM";
 ///   if (hours > 11) {
 ///       amPm = "PM";
    }
 ///   if (hours > 12) {
///        hours %= 12;
///    }
 ///   if (minutes < 10) {
///        minutes = "0" + minutes;
//////    }
 ///   if (seconds < 10) {
 ///       seconds = "0" + seconds;
    }
 ///   console.log("Current Time is: " + hours + ":" + minutes + ":" + seconds + " " + amPm);
}

///setInterval(printDate, 1000);////