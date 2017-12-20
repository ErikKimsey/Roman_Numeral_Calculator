
function CalculationParams {

  var calcValues = {
    input1: '',
    input2: '',
    optype: ''
  };

  var isInput1=true;

  function applyValuesToInput(){
    console.log("applyvaluesto input");
    //apply input values to in1 or in2
    if(isInput1 == true){
      calcValues.input1 += val;

    }
    if(isInput1 == false){
      calcValues.input2 += val;
    }
    applyValuesToHMTL();
  }

  function applyOptype(op){
    console.log("applyoptype");
    calcValues.optype = op;
    isInput1 = false;
  }

  function applyValuesToHMTL(){
    $('.input-screen').append("Yoyoyo");
  }

  function calculate(){
    console.log("calculate");
    //send obj to server-side
  }

  function clearValues(){
    calcValues.input1 = '';
    calcValues.input2 = '';
    calcValues.optype = '';
  }
}

module.exports = CalculationParams;
