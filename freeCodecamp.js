function randomFraction() {
   
    let result = 0;
    
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  }var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

  function randomWholeNum() {
  
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
function randomFraction() {
   
    let result = 0;
    
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  }var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

  function randomWholeNum() {
  
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
function randomFraction() {
   
    let result = 0;
    
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  }var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

  function randomWholeNum() {
  
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
function randomFraction() {
   
    let result = 0;
    
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  }var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

  function randomWholeNum() {
  
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
function randomFraction() {
   
    let result = 0;
    
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  }var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

  function randomWholeNum() {
  
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }

  const cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let len = cars.length;
let text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}

let sayi = prompt("Lütfen bir sayı giriniz.");
    
let faktoriyel = 1;

if(sayi < 0) {
    console.log("Lütfen pozitif bir tamsayı giriniz!")
} else{

    for(let i = 1; i <= sayi; i++){
        faktoriyel = faktoriyel * i;
    }
    console.log("Faktöriyel : " + faktoriyel);
}