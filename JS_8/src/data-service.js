function DataServise(){ }

DataServise.getData = function(url){
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

export default DataServise;











