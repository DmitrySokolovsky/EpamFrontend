
var url_1 = "http://www.nbrb.by/API/ExRates/Currencies";
var url_2 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&Periodicity=1";
var url_3 = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
var url_4 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&Periodicity=0";
var url_5 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Thu%2C+28+Sep+2017+21%3A00%3A00+GMT&Periodicity=1";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
    
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(xhr.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
    
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
    
      xhr.send();
    });
    }
    
    httpGet(url_1).then(response => {
      console.log(`Fulfilled: ${response} \n END \n`);
      return httpGet(url_2);
    },
    error => console.log("Rejected: " + error)
    ).then( response => {
      console.log(`Fulfilled: ${response} \n END \n`);
      return httpGet(url_3);
    },
    error => console.log("Rejected: " + error)
    ).then( response => {
      console.log(`Fulfilled: ${response} \n END \n`);
      return httpGet(url_4);
    },
    error => console.log("Rejected: " + error)
    ).then( response => {
      console.log(`Fulfilled: ${response} \n END \n`);
      return httpGet(url_5);
    },
    error => console.log("Rejected: " + error)
);
