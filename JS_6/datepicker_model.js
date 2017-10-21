//static calendar constructor
function Calendar(year,month){
    Calendar.m = month - 1;
    Calendar.date = new Date(year,Calendar.m);    
}

//returns the array of current month's days
Calendar.getNextDays = function(){ 
    var monthDays = [];   
    while (this.date.getMonth() == this.m) {  
        monthDays.push(this.date.getDate());
        this.date.setDate(this.date.getDate() + 1);
    } 
    return monthDays;   
}

//returns day's number
Calendar.getDayNumber = function () { 
    var day = this.date.getDay();
    if (day == 0) day = 7;
    return day-1;
  }







