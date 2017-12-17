//

class Calculator {

  constructor(input1, input2, opType){
    this.input1 = input1;
    this.input2 = input2;
    this.opType = opType;
  }

  var result = null;

  function add(n1, n2){
    result = n1 + n2;
  }

  function subtract(n1, n2){
    result = Math.abs(n1 - n2);
  }

  function multiply(n1, n2){
    result = n1 * n2;
  }

  function divide(n1, n2){
    result = n1 / n2;
  }

  function logSwitch(optype){
    console.log(optype);
  }

  function calculate(optype){
    switch (_opType) {
      case "add":
        logSwitch(_opType);
        break;
      case "subtract":
        logSwitch(_opType);
        break;
      case "multiply":
        logSwitch(_opType);
        break;
      case "divide":
        logSwitch(_opType);
        break;
      default:
        logSwitch("End of the road");

    }
  }

}
