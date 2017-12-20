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
    console.log("inside calculate, input1", this.input1);
    console.log("inside calculate, input2", this.input2);
      if(this.opType == " multiply ") {
        this.result = this.input1 * this.input2;
      }
      if(this.opType == " divide ") {
        this.result = this.input1 / this.input2;
      }
      if(this.opType == " add ") {
        this.result = this.input1 + this.input2;
      }
      if(this.opType == " subtract ") {
        this.result = this.input1 - this.input2;
      }
      console.log("this result is: ",this.result);
    return this.result;
    // if(this.result < 3999 || this.result <= 0){
    //   return this.result;
    // } else {
    //   return "Cant do it!";
    // }
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
