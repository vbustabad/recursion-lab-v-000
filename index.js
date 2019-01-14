function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return string;
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  const stringLength = string.length;
  if (stringLength === 0 || stringLength === 1) {
    return true;
  }

  if (string[0] === string[stringLength - 1]) {
    return isPalindrome(string.slice(1, stringLength - 1));
  }

  return false;
}

function addUpTo(array, index) {ç
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + addUpTo(array.slice(1));
  }  
}
