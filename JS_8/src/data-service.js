class DataServise{ }

var urlд = 'https://api.themoviedb.org/3/discover/movie?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2'

DataServise.request = (url)=>{
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

DataServise.request(urlд).then(response =>{
    console.log(`Fulfilled: ${response} \n END \n`);
});














    this.data = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = ()=>{
        
            if(xhr.readyState==4){
                this.data = xhr.responseText;
                                             
            }
        
    }
    return this.data;
}

export default DataServise;