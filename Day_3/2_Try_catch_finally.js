function reverseString(s) {
  try {
      s = s.split('').reverse().join('');
      console.log('reversed string');
  } catch (e){
      console.log('ERROR message:', e.message);
  } finally {
      console.log(s);
  }
};

reverseString(1234);