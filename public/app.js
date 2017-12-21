var socket = io();
var inputCalcVals={
  input1: '',
  input2: '',
  optype: ''
};
var isInput1 = true;

socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
});
socket.on('broad', function(data) {
  applyAnswer(data);
});

var numbBtn = document.getElementsByClassName('numb-btn');
var opBtn = document.getElementsByClassName('op-btn');
console.log(numbBtn);

for(var i=0; i<numbBtn.length;i++){
  numbBtn[i].addEventListener("click", function(e){
    var val = e.target.getAttribute("id");
    applyValuesToInput(val);
    console.log("id value is ",val);
  });
}

for(var i=0; i<opBtn.length;i++){
  opBtn[i].addEventListener("click", function(e){
    var val = e.target.getAttribute("id");
    var elemText = e.target.innerHTML;
    console.log("op text", elemText);
    applyOptype(val, elemText);
    console.log(val);
  });
}

function applyValuesToInput(val){
  console.log("applied ", val);
  document.getElementById("input-screen").append(val);
  if(isInput1 == true) inputCalcVals.input1 += val;
  if(isInput1 == false ) inputCalcVals.input2 += val;
}

function applyOptype(op, elemtext){
  if(inputCalcVals.optype != "") return; 
  if(op == "equals") {
    console.log("calling equals");
    let objVals = getInputVals();
    // applyAnswer(objVals)
    callServer(objVals);
    return;
  }
  if(op == "clear") {
    clearScreen();
    return;
  }
  console.log("applied ", op);
  op = " " + op + " ";
  document.getElementById("input-screen").append(elemtext);
  if(isInput1 == true) isInput1 = false;
  // if(isInput1 == false)
  inputCalcVals.optype = op;
}

function applyAnswer(obj){
  let answer = obj;
  console.log("answer in applyAnswer is:", obj);
  let outputscreen = document.getElementById("output-screen");
  outputscreen.innerHTML = answer;
  isInput1 = true;
}

function getInputVals(){
  console.log(inputCalcVals);
  return inputCalcVals;
}

function clearScreen(){
  let screens = document.getElementsByClassName("screen");
  console.log(screens);
  inputCalcVals.input1 = "";
  inputCalcVals.input2 = "";
  inputCalcVals.optype = "";
  console.log(inputCalcVals)
  for(var i=0; i<screens.length; i++) screens[i].innerHTML = "";
}

function callServer(objv){
  var message = objv;
  console.log("calling sever with ", objv);
  socket.emit('message', objv);
}
