class Car {
  constructor(speed, recordedSpeed) {
    this.speed = speed;
    this.recordedSpeed = recordedSpeed;
   
  }
  increaseSpeed() {
    this.speed++;
    this.recordedSpeed.push(this.speed);
    return recordedspeed
    // speed up by 1 after 1 second. hint: use setTimeout to execute after 1 second.
  }
   
  decreaseSpeed() {
    this.speed--;
    this.recordedSpeed.push(this.speed);
    return recordedspeed
    
  }
  averageSpeed() {
    const speedSum = this.recordedSpeed.reduce((first, next) => {
      return first + next;
    });
    const avgspeed = speedSum / this.recordedSpeed.length;
    return avgspeed;
  }
  maxSpeedRecoded() {
    const maxspeed = Math.max(...this.recordedSpeed);
    return maxspeed
  }

  minSpeedRecoded() {
    const minspeed = Math.min(...this.recordedSpeed);
    return minspeed
    //hint: Use Math.min
  }

  adjustRecordings() {
    const adjustedspeed = this.recordedSpeed.map((speed) => {
      return (speed / 100) * 90;
    });
    console.log(adjustedspeed);
    // return regulator();
  }

  // getRecordings() {
  //   // return all recordings
  // }
}
const car = new Car(45, []);
car.increaseSpeed();
car.decreaseSpeed();
car.maxSpeedRecoded();
car.minSpeedRecoded();
car.adjustRecordings();
setTimeout(()=>car.increaseSpeed(), 1000);
setTimeout(()=>car.decreaseSpeed(), 1000);
module.exports = car;