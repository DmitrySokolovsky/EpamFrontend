var dateTo = document.getElementById('dateTo');
var timeTo = document.getElementById('timeTo');
var dateFrom = document.getElementById('dateFrom');
var timeFrom = document.getElementById('timeFrom');

var radio_1 = document.getElementById('radioBtn_1');
var radio_2 = document.getElementById('radioBtn_2');

var select_1 = document.getElementById('select_1');
var select_2 = document.getElementById('select_2');



window.onload = function(){ 
    if(sessionStorage.length == 0){
        localStorageValidation();
        sessionStorage.setItem('refresh','check');
    }       
    else{
        localStorage.clear();
    }   
}

select_1.onchange = function(){
    var sIndex = this.selectedIndex; 
    localStorage.setItem("selectedOption_1",sIndex);
}

select_2.onchange = function(){
    var sIndex = this.selectedIndex; 
    localStorage.setItem("selectedOption_2",sIndex);
}

radio_1.onchange = function(){
    if(this.checked){
        localStorage.setItem("radio_1", 1);
    }
    else{
        localStorage.setItem("radio_1", 1);
    }
}

radio_2.onchange = function(){
    if(this.checked){
        localStorage.setItem("radio_2", 1);
    }
    else{
        localStorage.setItem("radio_2", 1);
    }
}

dateFrom.onchange = function(){
    localStorage.setItem('dateFrom',this.value);
}

timeFrom.onchange = function(){
    localStorage.setItem('timeFrom',this.value);
}

dateTo.onchange = function(){
    localStorage.setItem('dateTo',this.value);
}

timeTo.onchange = function(){
    localStorage.setItem('timeTo',this.value);
}

function localStorageValidation (){
    if(localStorage.getItem('selectedOption_1')){
        select_1.selectedIndex = localStorage.getItem('selectedOption_1');
    }
    if(localStorage.getItem('selectedOption_2')){
        select_2.selectedIndex = localStorage.getItem('selectedOption_2');
    }
    if(localStorage.getItem('radio_1')){
        radio_1.checked = localStorage.getItem('radio_1');
    }
    if(localStorage.getItem('radio_2')){
        radio_2.checked = localStorage.getItem('radio_2');
    }
    if(localStorage.getItem('dateFrom')){
        dateFrom.value = localStorage.getItem('dateFrom');
    }
    if(localStorage.getItem('dateTo')){
        dateTo.value = localStorage.getItem('dateTo');
    }
    if(localStorage.getItem('timeFrom')){
        timeFrom.value = localStorage.getItem('timeFrom');
    }
    if(localStorage.getItem('timeTo')){
        timeTo.value = localStorage.getItem('timeTo');
    }

}