class billing {
  constructor() {
    this.electro = 3;
    this.thunder = 3.5;
    this.bolt = 4;
    this.lucabill = [1, 3, 4, 6, 7, 9, 10];
    this.lucusbill = [1, 2, 3, 6, 7, 10, 12];
    this.flag = 1;
    // console.log(this.lucabill);
  }
  totalreading() {
    const totallucareading = this.lucabill.reduce((first, next) => {
      return first + next;
    });
    const totallucusreading = this.lucusbill.reduce((first, next) => {
      return first + next;
    });
    // console.log("totoal lucareading", totallucareading);
    // console.log("totoal lucareading", totallucusreading);
  }

  modifiedlucabills() {
    // var modifiedlucabill = [];
    // var modifiedlucusbill = [];

    this.modifiedlucabill = this.lucabill.map((value) => {
      return value * 3;
    });
    this.modifiedlucusbill = this.lucusbill.map((value) => {
      return value * 3;
    });
    // console.log(modifiedlucabill);
    // console.log(modifiedlucusbill);
    return this.modifiedlucusbill, this.modifiedlucabill;
  }


  discount() {
    // var lucareading = [];
    // const lucusreading = [];
    console.log("modified lucabill", this.modifiedlucabill);
    if (this.flag == 1) {
      this.lucareading = this.modifiedlucabill.map(this.discountbill);
      this.lucusreading = this.modifiedlucusbill.map(this.discountbill);
      console.log("totoal billing after discount", this.lucareading);
      return this.lucareading, this.lucusreading;
    } else {
      this.lucareading = this.modifiedlucabill;
      this.lucusreading = this.modifiedlucusbill;
      console.log("totoal bill readings", this.lucusreading);
      return this.lucareading, this.lucusreading;
    }
  }
  discountbill(value) {
    if (value % 2 == 0) {
      return (value / 100) * 90;
    }
    return (value / 100) * 88;
  }
  // modified(num) {
  //   return num * this.electro;
  // }
  totalbill() {
    // const totallucabill = [];
    // const totallucusbill = [];
    // console.log("verify",this.mod)
    this.totallucabill = this.lucareading.reduce((first, next) => {
      return first + next;
    });
    this.totallucusbill = this.lucusreading.reduce((first, next) => {
      return first + next;
    });
    console.log("totallucabill when electrocharged", this.totallucabill);
    console.log("totallucusbill when electrocharged", this.totallucusbill);
  }
}
// module.exports =  {discountbill,modifiedlucabills} ;
const bill = new billing();
bill.totalreading();
bill.modifiedlucabills();
bill.discount();
bill.discountbill();
bill.totalbill();

// module.exports =  bill.modifiedlucabills ;

// module.exports =  bill.discountbill ;


