function calculate(a, b, callback) {
    console.log("Performing operation...");
    const result = callback(a, b); // <-- Use the callback function here
    console.log("Result is:", result);
  }
  
  // Define callbacks
  function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  // Call with different callbacks
  calculate(5, 10, add);
  calculate(5, 10, sub);
  calculate(5, 10, mul);
  