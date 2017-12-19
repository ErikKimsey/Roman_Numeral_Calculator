//

function Calculator(input1, input2, opType) {


    console.log("input: ", input1);
    this.input1 = input1;
    this.input2 = input2;
    this.opType = opType;

  let result = null;

  function add(n1, n2){
    console.log("n1 ", n1);
    result = n1 + n2;
  }

  function subtract(n1, n2){
    result = Math.abs(n1 - n2);
  }

  function multiply(n1, n2){
    result = n1 * n2;
  }

  function divide(n1, n2){
    if(n1 < n2) result =
    result = n1 / n2;
  }

  function logSwitch(optype){
    console.log(optype);
  }

  function calculate(optype){
    console.log("swtich");
    switch (this.opType) {
      case "add":
        logSwitch(this.opType);
        break;
      case "subtract":
        logSwitch(this.opType);
        break;
      case "multiply":
        logSwitch(this.opType);
        break;
      case "divide":
        logSwitch(this.opType);
        break;
      default:
        logSwitch("End of the road");

    }
  }
}

module.exports = Calculator;
