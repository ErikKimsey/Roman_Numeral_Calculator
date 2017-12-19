//

class Calculator {
  constructor(input1, input2, opType){
    console.log("opType: ", opType);
    this.input1 = input1;
    this.input2 = input2;
    this.opType = opType;
    this.result = "";
  }

  add(n1, n2){
    console.log("n1 ", n1);
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

  calculate(){
    console.log("inside calculate");
    if(this.opType == "multiply") console.log(this.input1 * this.input2);
    return this.input1 * this.input2;
  }
}

module.exports = Calculator;


// switch (this.opType) {
//   case "add":
//     this.logSwitch(this.opType);
//     break;
//   case "subtract":
//     this.logSwitch(this.opType);
//     break;
//   case "multiply":
//     this.logSwitch(this.opType);
//     break;
//   case "divide":
//     this.logSwitch(this.opType);
//     break;
//   default:
//     this.logSwitch("End of the road");
