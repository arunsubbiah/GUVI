/*function getRandom() {
    let a = Math.floor(Math.random() * 10000);
    if (a>1000){
        let b = a.split('');
    for(let i = 0; i < a.length; i++) {
        arun=arun.push(a[i]);
    }
        console.log(arun);
        //console.log(arun);
    }
}

getRandom();*/

//let number = 2789;
//let arun = number.toString();

//var fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);

//console.log(fourdigitsrandom);

//let arun = "How are you doing today?";
//console.log(arun.split(" "));


 /*generateCode = function(){
      var fullNumber = [];
      var digit1 = Math.floor(Math.random() * 9) + 1;
      var digit2 = Math.floor(Math.random() * 9) + 1;
      var digit3 = Math.floor(Math.random() * 9) + 1;
      var digit4 = Math.floor(Math.random() * 9) + 1;
      fullNumber.push(digit1, digit2, digit3, digit4);
      this.theCode(fullNumber.join("")) ;
    }*/

/*let a  = '123456';
let num =[];

a = a.split('');
//console.log(a[2]);

if(+a[2] === 3){
    console.log("this is legit shit");
};*/

/*dig1  = Math.floor(Math.random()*9);
dig2  = Math.floor(Math.random()*9);
dig3  = Math.floor(Math.random()*9);
dig4  = Math.floor(Math.random()*9);

console.log(dig1);
console.log(dig2);
console.log(dig3);
console.log(dig4);

let number = [];
number = number.push

console.log(number);*/

let dig1 = Math.floor(Math.random()*9);
let dig2 = Math.floor(Math.random()*9);
let dig3 = Math.floor(Math.random()*9);
let dig4 = Math.floor(Math.random()*9);
if (dig1 !== dig2 && dig1 !== dig3 && dig1 !== dig4 && dig2 !== dig3 && dig2 !== dig4 && dig3 !== dig4 ){
    console.log(dig1.toString() + dig2.toString() + + dig3.toString() + + dig4.toString());
}

