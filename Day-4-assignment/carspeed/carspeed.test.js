const car = require("./carspeed");
const carObje = new car.Car(45, [1, 2, 3]);
describe("test the carspeed code", () => {
  test("increment of the speed of the car", () => {
    // Arrange
    // Act
    const speed = carObje.increaseSpeed();

    expect(speed).toStrictEqual([1, 2, 3, 46,]);
  });

  test("decrement of the speed of the car", () => {
    // Arrange
    // Act
    const speed = carObje.decreaseSpeed();

    expect(speed).toStrictEqual([1, 2, 3, 46, 45]);
  });

  test("maxSpeedRecoded of the speed of the car", () => {
    // Arrange
    // Act
    const speed = carObje.maxSpeedRecoded();

    expect(speed).toStrictEqual(46);
  });
  test("minSpeedRecoded of the speed of the car", () => {
    // Arrange
    // Act
    const speed = carObje.minSpeedRecoded();

    expect(speed).toStrictEqual(1);
  });
});
