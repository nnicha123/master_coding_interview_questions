// call stack
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);

// CALL Stack

// WEB API -> Where the settimeout gets sent

// Call back queue -> Queue here after 2 seconds

// Event loop -> Checks call back queue when stack is empty and places callback
// in call stack when it is empty
