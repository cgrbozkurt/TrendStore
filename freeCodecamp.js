function randomFraction() {
    // Only change code below this line.
    let result = 0;
    // Math.random() can generate 0. We don't want to     return a 0,
    // so keep generating random numbers until we get one     that isn't 0
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
    // Only change code above this line.
  }var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

  function randomWholeNum() {
    // Only change code below this line.
    return Math.floor(Math.random() * 10);
  }

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }