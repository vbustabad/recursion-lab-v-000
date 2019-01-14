function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(myString.length, 0);
    reverseString(mySubString);
  } else {
    return true;
  }
}

function isPalindrome() {
  console.log(myString[myString.length - 1]);

  if (myString.length > 1) {
    let mySubString = myString.substring(myString.length - 2, 0);
    printString(mySubString);
  } else {
    return true;
  }
}
