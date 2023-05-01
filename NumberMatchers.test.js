test("numeric operators", () => {
 
    var num1 = 100;
    var num2 = -20;
    var num3 = 0;
  
    // greater than
    expect(num1).toBeGreaterThan(10)
  
    // less than or equal
    expect(num2).toBeLessThanOrEqual(0)
  
    // greater than or equal
    expect(num3).toBeGreaterThanOrEqual(0)
  })