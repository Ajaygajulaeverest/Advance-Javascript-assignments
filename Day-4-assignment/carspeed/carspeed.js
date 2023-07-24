
function regulator(){
  const adjustedspeed = this.recordedSpeed.map((speed) => {
    return (speed / 100) * 90;
  });
  return adjustedspeed;
}
class Car {
  constructor(speed, recordedSpeed) {
    this.speed = speed;
    this.recordedSpeed = recordedSpeed;
  }
  increaseSpeed() {
    this.speed++;
    this.recordedSpeed.push(this.speed);
    return this.recordedSpeed
    // console.log("recordedspeed increaesd", this.recordedSpeed);
    // speed up by 1 after 1 second. hint: use setTimeout to execute after 1 second.
  }

  decreaseSpeed() {
    this.speed--;
    this.recordedSpeed.push(this.speed);
    return this.recordedSpeed
    // console.log("recordedspeed decreased", this.recordedSpeed);
  }
  averageSpeed() {
    const speedSum = this.recordedSpeed.reduce((first, next) => {
      return first + next;
    });
    const avgspeed = speedSum / this.recordedSpeed.length;
    return avgspeed;
  }
  maxSpeedRecoded() {
    const maxspeed = Math.max.apply(null,this.recordedSpeed);
    return maxspeed;
  }

  minSpeedRecoded() {
    const minspeed = Math.min.apply(null,this.recordedSpeed);
    return minspeed;
    //hint: Use Math.min
  }

  adjustRecordings() {
    return regulator.call(this);
  }

  // getRecordings() {
  //   // return all recordings
  // }
}

const car = new Car(45, [1,2,3]);
car.increaseSpeed();
car.decreaseSpeed();
console.log(car.minSpeedRecoded());
console.log(car.maxSpeedRecoded());
console.log(car.decreaseSpeed());
console.log(car.increaseSpeed());

car.minSpeedRecoded();
car.adjustRecordings();
module.exports = {Car};
// console.log(car.recordedSpeed);
setTimeout(() => car.increaseSpeed(), 1000);
setTimeout(() => car.decreaseSpeed(), 1000);



