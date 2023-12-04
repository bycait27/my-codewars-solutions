// create a function that takes an integer as an argument and returns 'Even' for even numbers or 'Odd' for odd numbers.
function evenOrOdd(number) {
    // if statement checking if the numbers are evenly divisible by 2
    if (number % 2 == 0) {
      return 'Even';
    } else 
      return 'Odd';
  }

  // write a function that takes a String and returns an Array with the length of each word added to each element.
  function addLength(str) {
    // split the str into an array of words
    const words = str.split(' ');
    
    // map over the array and create a new array with the desired format
    const result = words.map(word => `${word} ${word.length}`);
    
    return result;
  }