// const { modifiedlucabills, discountbill } = require("./lucabill");
const discountbill = require("./lucabill");
// const modifiedlucabills = require("./lucabill");

describe("Bill", () => {
  // test("test for modified bill", () => {
  //   // Act
  //   const result = modifiedlucabills(4);
  //   // Assert
  //   expect(result).toEqual(12);
  // });

  test("Discont Bill generated test", () => {
    // Arrange
    // Act
    const bill = discountbill(25);

    expect(bill).toBe(22);
  });
});
