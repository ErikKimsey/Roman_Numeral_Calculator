
class Calculator {
  constructor(input1, input2, opType){
    this.input1 = input1;
    this.input2 = input2;
    this.opType = opType;
    this.result = "";
  }

  calculate(){
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
  }
}

module.exports = Calculator;
