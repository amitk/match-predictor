export function wordCode(word) {
  word = word.toLowerCase();
  let length = word.length;
  let eachCharCode = []
  for(let i = 0; i < length; i++) {
    eachCharCode.push(word.charCodeAt(i)%96)
  }
  return eachCharCode;
}

export function returnSumWithSingleDigit(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber
  let singularValue = 0
  if (sum === 10) {
    return 1;
  }
  while (sum > 9) {
    firstNumber = sum % 10;
    secondNumber = parseInt(sum/10, 10);
  }
  return firstNumber + secondNumber;
}

export function squeezArray(array) {
  let squeezArray = [];
  let formattedSqueezArray = [];
  let length = array.length;
  let i = 0;
  for(i = 0; i < parseInt(length/2) ; i ++) {
    squeezArray.push(array[i] + array[length - 1 - i])
  }
  if(length % 2 === 1) {
    squeezArray.push(array[parseInt(length/2)])
  }
  length = squeezArray.length
  for(i = 0; i < length; i++) {
    formattedSqueezArray.push(returnDigitSum(squeezArray[i]));
  }
  return formattedSqueezArray;
}

function returnDigitSum(digit) {
  let sum = 0;
  while(digit > 0) {
    sum += digit%10;
    digit = parseInt(digit/10);
  }
  return sum;
}
