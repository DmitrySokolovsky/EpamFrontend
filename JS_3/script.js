function wrapArg() {
    var argArray = [];

    return function(arg) {
        if (arg) {
            for (var i = 0; i < arguments.length; i++) {
                argArray.push(arguments[i]);
            }
            return null;
        }
        if (!arg) {
            console.log(argArray);
        }
    }
}

var argFunc = wrapArg();

argFunc("String", 1, 2, 3, 3);
argFunc("Epam", "Front", "end", "training", "2017", "rulls", ":-)");
argFunc();