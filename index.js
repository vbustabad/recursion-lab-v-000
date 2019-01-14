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

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, --index);
  } else {
    return array[0];
  }
}

function maxOf(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return Math.max(array);
    //maxOf(array.length - 1)
  }
}
