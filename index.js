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

io.on('connection', function(client){
  console.log("Client connected");

  client.on('join', function(data){
  })

  client.on('message', function(data){
    client.emit('broad', translateToArabic(data));
  });
})

function translateToArabic(roman){
  console.log("toArabic input1: ",roman.input1);
  console.log("toArabic input2: ",roman.input2);
  try {
    input1 = toArabic(roman.input1);
    input2 = toArabic(roman.input2);
    roman.input1 = input1;
    roman.input2 = input2;
    return createCalc(roman);
  }
  catch(e) {
    return "INVALID";
  }
}

function translateToRoman(arabicAnswer){
  if(arabicAnswer < 3999 && arabicAnswer > -1){
    let romanAnswer = toRoman(arabicAnswer);
    return romanAnswer;
  }
  if(arabicAnswer > 3999){
    let answerTooBig = "AEQUO!";
    return answerTooBig;
  }
  if(arabicAnswer < 1){
    let answerTooBig = "AEQUO!";
    return answerTooBig;
  }
}

function createCalc(rmnobj){
  calc = new Calculator(rmnobj.input1, rmnobj.input2, rmnobj.optype);
  console.log(calc);
  return calculateArab(calc);
}

function calculateArab(c){
  answerInArabic = calc.calculate();
  return translateToRoman(answerInArabic);
}

server.listen(process.env.PORT || 4200, function(){
  console.log("listening");
});
