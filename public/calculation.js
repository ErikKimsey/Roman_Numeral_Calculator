
function CalculationParams {

  var calcValues = {
    input1: '',
    input2: '',
    optype: ''
  };

  var isInput1=true;

  function applyValuesToInput(){
    if(isInput1 == true){
      calcValues.input1 += val;

    }
    if(isInput1 == false){
      calcValues.input2 += val;
    }
    applyValuesToHMTL();
  }

  function applyOptype(op){
    calcValues.optype = op;
    isInput1 = false;
  }

  function clearValues(){
    calcValues.input1 = '';
    calcValues.input2 = '';
    calcValues.optype = '';
  }
}

module.exports = CalculationParams;
