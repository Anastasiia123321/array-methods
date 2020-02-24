// Task #1

const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (i = 0; i < length; i++) {
      const randomResult = Math.floor(Math.random() * (max + 1 - min) + min);
      randomArray.push(randomResult);
    }
    return randomArray;
  };
  
  console.log(getRandomArray(15, 1, 100));
  


  // Task #2

const getModa = (...numbers) => {
    let numerator = 0;
    let max = 0;
    let result;
    const sortNumbers = numbers.sort();
    for (i = 0; i < sortNumbers.length; i++) {
      if (sortNumbers[i] === sortNumbers[i + 1]) {
        numerator++;
      } else {
        numerator = 0;
      }
      if (numerator > max) {
        result = sortNumbers[i];
        max = numerator;
      }
    }
    return result;
  };
  
  console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



  // Task #3

function getAverage(...numbers) {
    const getEntireNumbers = (numbers) => {
return numbers.filter(el => el === Math.trunc(el));
    }
    const data = getEntireNumbers(numbers);
    const result = data.reduce((accumulator, element) => {
        let sum = 0;
      if (Number.isInteger(element)) {
          sum +=element;
      }
        return sum + accumulator;
      },0);
    return result / numbers.length;
  }
  console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
  

// Task #5

const filterEvenNumbers = (...numbers) => {
  const oddNumbers = numbers.filter(number => {
    return number % 2 !== 0;
  });
  return oddNumbers;
};

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));


// Task #6

const countPositiveNumbers = (...numbers) => {
    const positiveNumbers = numbers.filter(number => {
         return number > 0;
  })
    return positiveNumbers.length;
  }
  
  console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));


  // Task #7

  const getDividedByFive = (...numbers) => {
    const dividedByFive = numbers.filter(number => {
       return number % 5 === 0;
  })
   return dividedByFive;
  }
  
  console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



document.writeln(`<p> Task #1 - повертає масив випадкових цілих чисел : <br>
(15, 1, 100)<br>
 Answer:${getRandomArray(15,1,100)}</p>`);
 document.writeln(`<p> Task #2 - обчислює моду всіх переданих в неї аргументів:<br>
(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)<br> 
 Answer:${getModa(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</p>`);
document.writeln(`<p> Task #3 - рахує середнє арифметичне всіх переданих в неї аргументів:<br>
 (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)<br> 
 Answer:${getAverage(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</p>`);
document.writeln(`<p> Task #5 - фільтрує парні числа:<br>
(1, 2, 3, 4, 5, 6) <br>
Answer: ${filterEvenNumbers(1,2,3,4,5,6)}</p>`);
document.writeln(`<p> Task #6 - рахує кількість чисел більше нуля:<br>
 (1, -2, 3, -4, -5, 6) <br> 
 Answer: ${countPositiveNumbers(1,-2,3,-4,-5,6)}</p>`);
document.writeln(`<p> Task #7 - фільтрує усі елементи окрім цілих чисел, які діляться на 5:<br>
 (6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)<br> 
 Answer: ${getDividedByFive(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</p>`); 
