//

class Calculator {

  constructor(input1, input2, opType){
    this.input1 = input1;
    this.input2 = input2;
    this.opType = opType;
  }

  var result = null;

  add(n1, n2){
    result = n1 + n2;
  }

  subtract(n1, n2){
    result = Math.abs(n1 - n2);
  }

  multiply(n1, n2){
    result = n1 * n2;
  }

  divide(n1, n2){
    if(n1 < n2) result = 
    result = n1 / n2;
  }

  logSwitch(optype){
    console.log(optype);
  }

  calculate(optype){
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
