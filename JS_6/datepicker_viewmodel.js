var datepick = document.getElementsByClassName("datepicker");
var dateNow = new Date();
var monthNow = dateNow.getMonth()+1;
var yearNow = dateNow.getFullYear();
var currentMonth = [];
var btnBackMonth = document.getElementsByClassName("back")[0];
var btnNextMonth = document.getElementsByClassName("next")[0];
var monthName = document.getElementsByClassName("monthName")[0];
var yearNumber = document.getElementsByClassName("yearNumber")[0];


drawDatepicker(yearNow,monthNow);

//previous month
btnBackMonth.onclick = function(){
    monthNow-=1;
	if(monthNow==0){
        monthNow=12;
        yearNow-=1;
    }
    while(datepick[0].childNodes[0]){ 
        datepick[0].removeChild(datepick[0].childNodes[0]); 
    }
    drawDatepicker(yearNow,monthNow);
}

//next month
btnNextMonth.onclick = function(){
    monthNow+=1;
	if(monthNow==13){
        monthNow=1;
        yearNow+=1;
    }
    while(datepick[0].childNodes[0]){ 
        datepick[0].removeChild(datepick[0].childNodes[0]); 
    }
    drawDatepicker(yearNow,monthNow);
}

//drows calendar
function drawDatepicker(year,month) {
    showMonthName(month);
    showYearNumber(year);
    new Calendar(year,month);
    setEmptyCellsBefore(datepick);
    currentMonth = Calendar.getNextDays();
    setDayCells(datepick,month);    
    setEmptyCellsAfter(datepick);
}

//sets free space before the first day of month
function setEmptyCellsBefore(parent){
    for (var i = 0; i < Calendar.getDayNumber(); i++) {
        var div = document.createElement("div");
        div.classList.add("days");
        parent[0].appendChild(div);
    }
}

//sets days of the month
function setDayCells(parent,m){
    for(var i = 0;i<currentMonth.length;i++){
        var div = document.createElement("div");
        div.classList.add("days");
        div.innerHTML = currentMonth[i];
        if(currentMonth[i]==dateNow.getDate()&&m==dateNow.getMonth()+1){
            div.classList.add("today");
        }
        parent[0].appendChild(div);
    }
}

//sets free space after the first day of month
function setEmptyCellsAfter(parent){    
    if (Calendar.getDayNumber() != 0) {
        for (var i = Calendar.getDayNumber(); i < 7; i++) {
            var div = document.createElement("div");
            div.classList.add("days");
            parent[0].appendChild(div);
        }
    }
}

//shows current month's name according to the current month's number
function showMonthName(m){
    switch(m) {
        case 1:
        monthName.innerHTML = "Январь";
        break;
        case 2:
        monthName.innerHTML = "Февраль";
        break;
        case 3:
        monthName.innerHTML = "Март";
        break;
        case 4:
        monthName.innerHTML = "Апрель";
        break;
        case 5:
        monthName.innerHTML = "Май";
        break;
        case 6:
        monthName.innerHTML = "Июнь";
        break;
        case 7:
        monthName.innerHTML = "Июль";
        break;
        case 8:
        monthName.innerHTML = "Август";
        break;
        case 9:
        monthName.innerHTML = "Сентябрь";
        break;
        case 10:
        monthName.innerHTML = "Октябрь";
        break;
        case 11:
        monthName.innerHTML = "Ноябрь";
        break;
        case 12:
        monthName.innerHTML = "Декабрь";
        break;
    }
}

//shows current year
function showYearNumber(y) {
    yearNumber.innerHTML = y;
}

