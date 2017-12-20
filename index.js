var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var toArabic = require('roman-numerals').toArabic;
var toRoman = require('roman-numerals').toRoman;
var Calculator = require('./calculator.js');
var calc;


app.use(express.static(path.join(__dirname, 'public')));



// var calc = new Calculator(2, 2, "add");
// console.log(calc);
// calc.calculate("add");


io.on('connection', function(client){
  console.log("Client connected");

  client.on('join', function(data){
  })

  client.on('message', function(data){
    console.log("incoming data: ", data);
    translateToArabic(data);
    // console.log("answer is: ", answer);
    // client.emit('broad', answer);
  });
})

function translateToArabic(roman){
  input1 = toArabic(roman.input1);
  input2 = toArabic(roman.input2);
  console.log("input1 in transtoarab",input1);
  console.log("input2 in transtoarab",input2);
  roman.input1 = input1;
  roman.input2 = input2;
  createCalc(roman);
}

function translateToRoman(arabicAnswer){
  console.log("to trans to roman: ",arabicAnswer);
  if(arabicAnswer < 3999){
    console.log(arabicAnswer);
    let romanAnswer = toRoman(arabicAnswer);
    console.log("roman answer: ", romanAnswer);
    // returnAnswerToClient(romanAnswer);
  } else {
   "Number too big";
  }
}

// function returnAnswerToClient(rmnAnsw){
//   rmnAnsw;
// }

function createCalc(rmnobj){
  calc = new Calculator(rmnobj.input1, rmnobj.input2, rmnobj.optype);
  console.log("line62 createCalc ",calc);
  calculateArab(calc);
}

function calculateArab(c){
  answerInArabic = calc.calculate();
  return translateToRoman(answerInArabic);
}


server.listen(4200, function(){
  console.log("listening");
});
