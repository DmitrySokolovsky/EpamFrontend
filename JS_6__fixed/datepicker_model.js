//calendar constructor
function Calendar(year,month){
    this.date = new Date(year,month-1);
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.content = this.getContent(this.year,this.month);     
    this.monthString = this.date.toLocaleString('en-US',{month: 'long'});  
}

//returns the array of current month's days
Calendar.prototype.getContent = function(year,month){ 
    var date = new Date(year,month,1);
    var lastDay; 
    var result = [];    
    var monthDays = [];
    var weekDays = ["MO","TU","WE","TH","FR","SU","SN"];  
    var emptyBefore = [];
    var emptyAfter = [];

    for (var i = 0; i < this.getDayNumber(year,month,1); i++) {
        emptyBefore.push("");
    } 

    while (date.getMonth() === month) { 
        lastDay=date.getDate(); 
        monthDays.push(date.getDate());
        date.setDate(date.getDate() + 1);        
    } 

    if (this.getDayNumber(year,month,date.getDate()) != 7) {
        for (var i = this.getDayNumber(year,month,lastDay); i < 6; i++) {
           emptyAfter.push("");
        }
    }
    
    return result.concat(weekDays,emptyBefore,monthDays,emptyAfter);   
}

Calendar.prototype.getDayNumber = function (year,month,day) { 
    var date = new Date(year,month,day);
    var day = date.getDay();
    if (day == 0) day = 7;
    return day-1;
}

Calendar.prototype.selected = function(){
    var date = new Date();
    if(this.date.getMonth() == date.getMonth()) return date.getDate();
}



var d = new Calendar(2017,10);
console.log(d.selected());