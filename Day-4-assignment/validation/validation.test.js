const { stringvalidator, validation } = require("./validation");

describe("test for the validation of url ", () => {
  test("this is for the url validation code ", () => {
    // Arrange
    // Act
    const speed = stringvalidator();

    expect(speed).toBe(10);
  });

  test("this is for the key and ratelimit validation ", () => {
    // Arrange
    // Act
    const speed = validation();

    expect(speed).toBe();
  });
});
