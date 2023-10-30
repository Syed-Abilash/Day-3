//Question 1

let obj1 = {
    name:"person 1",
    age:5
} 
let obj2 = {
    age:5,
    name:"person 1"
}
var result1 = JSON.stringify(obj1);
var result2 = JSON.stringify(obj2);
var C = result1===result2;
console.log(C)

//Question 2
//Display Country flag in console

var request0 = new XMLHttpRequest();

request0.open("GET","https://restcountries.com/v3.1/all",true)

request0.send();

request0.onload = function () {
    var data = request0.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].name.common);
    }
} 

//Question 3
//Print All Countries Names

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true)

request.send();

request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].name.common);
    }
}

//Print All Region

var request1 = new XMLHttpRequest();

request1.open("GET","https://restcountries.com/v3.1/all",true)

request1.send();

request1.onload = function () {
    var data = request1.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].region);
    }
}

//Print All Subregion

var request2 = new XMLHttpRequest();

request2.open("GET","https://restcountries.com/v3.1/all",true)

request2.send();

request2.onload = function () {
    var data = request2.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].flags.png);
    }
}

//Print All populations

var request3 = new XMLHttpRequest();

request3.open("GET","https://restcountries.com/v3.1/all",true)

request3.send();

request3.onload = function () {
    var data = request3.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].region);
    }
}