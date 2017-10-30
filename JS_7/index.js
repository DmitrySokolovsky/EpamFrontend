
var url_1 = "http://www.nbrb.by/API/ExRates/Currencies";
var url_2 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&Periodicity=1";
var url_3 = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
var url_4 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&Periodicity=0";
var url_5 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Thu%2C+28+Sep+2017+21%3A00%3A00+GMT&Periodicity=1";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Start(url) {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", url, false);

  xhr.send();
  if (xhr.status != 200) {
    console.log(xhr.status + " " + xhr.statusText);
  } else {
    console.log(xhr.responseText + "\n end");
  }  
}
/*
Start(url_1);
Start(url_2);
Start(url_3);
Start(url_4);
Start(url_5);
*/
