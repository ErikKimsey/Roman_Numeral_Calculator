
  var calcValues = {
    input1: '',
    input2: '',
    optype: ''
  };

  var isInput1=true;

  function applyValuesToInput(val){
    //apply input values to in1 or in2
    if(isInput1 == true){
      calcValues.input1 += val;
    }
    if(isInput1 == false){
      calcValues.input2 += val;
    }
  }

  function applyOptype(op){
    calcValues.optype = op;
    isInput1 = false;
  }

  function calculate(){
    //send obj to server-side
  }

  function clearValues(){
    calcValues.input1 = '';
    calcValues.input2 = '';
    calcValues.optype = '';
  }
