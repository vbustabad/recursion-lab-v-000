function printString(str) {
  console.log(str[0]);

  if (str.length > 1) {
    let mySubString = str.substring(1, str.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str === "") {
    return str;
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
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
