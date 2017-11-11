class DropService {}

DropService.ignorDrag = function(e){
    e.stopPropagation();
    e.preventDefault();
};

DropService.drop = function(e){
    e.stopPropagation();
    e.preventDefault();
    var data = e.dataTransfer;
    var files = data.files;
    DropService.processFiles(files);
}

DropService.processFiles = function(files){
    var files = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {    
	    dropBox.style.backgroundImage = "url('" + e.target.result + "')";
    };
    reader.readAsDataURL(file);
}