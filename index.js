// Helper function to calculate the area of a rectangle
function calculateArea(width, height) {
    return width * height;
  }
  
  // Helper function to determine if a number is prime
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    const rectangleWidth = 5;
    const rectangleHeight = 10;
  
    // Calculate and display the area of the rectangle
    const area = calculateArea(rectangleWidth, rectangleHeight);
    console.log("Area of the rectangle:", area);
  
    const numberToCheck = 17;
  
    // Check if the number is prime and display the result
    const isNumberPrime = isPrime(numberToCheck);
    if (isNumberPrime) {
      console.log(numberToCheck + " is a prime number.");
    } else {
      console.log(numberToCheck + " is not a prime number.");
    }
  }
  
  // Call the main function to execute the code
  main();
  