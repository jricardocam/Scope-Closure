// variables 
var a; //Declaracion
var b = 'b'; //Declaracion e inicializacion
b = 'bb' //Reasignacion
var a = 'aa'; //redeclaracion

//Global Scope
var fruit = 'apple';//global 
console.log(fruit); 
function bestFruit(){
    console.log(fruit);
}

bestFruit(); 

function countries(){
    country = 'Mexico'; //global
    console.log(country);
}

countries();
console.log(country);


