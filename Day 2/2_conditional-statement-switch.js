function getLetter(s) {
  let letter;
  // Write your code here

  console.log('s.charAt(0) => ', s.charAt(0));

  switch(s.charAt(0)) {
    case ( 'a' || 'e' || 'o' || 'i' || 'u'):
      letter = 'A';
      break;
    case ('b' || 'c' || 'd' || 'f' || 'g'):
      letter = 'B';
      break;
    case ('h' || 'j' || 'k' || 'l' || 'm'):
      letter = 'C';
      break;
    case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' ):
      letter = 'D';
      break;
    default:
      console.log('ERROR: Wrong input');
  }

  console.log('letter =>', letter);
  return letter;
};

getLetter('z');

// String.prototype.charAt()
// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt