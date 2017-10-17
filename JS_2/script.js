//Фибоначчи
var a = 0;
var b = 1;
var fibNumbers = [];
for (var i = 0; i < 10; i++) {
    var c = a + b;
    fibNumbers.push(c);
    a = b;
    b = c;        
}
console.log(fibNumbers);

//Факториал
var res = 1;
var n = 5; //факториал этого числа мы будем вычислять
while(n>0){
    res = res*n;
    n--;
}
console.log(res);

// Простые числа
var simpNum = [];

for(var i = 2; i < 20; i++){
    for(var j=2; j < i ;j++){
        if(i % j==0) break;
    }
    if(i === j)simpNum.push(i);
}
console.log(simpNum);