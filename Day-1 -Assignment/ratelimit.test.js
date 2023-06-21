const {ratelimits} = require("./ratelimiting");
// const discountbill = require("./lucabill");

describe("Ratelimit", () => {

  test("test for the ratelimiting of the requests", () => {
    // Act
    const result =  ratelimits();
    // Assert
    expect(result).toEqual("fileds are missing");
  });
}
  
  
  )