function vowelsAndConsonants(s) {
  
  const vowels = 'aeiou';
  let consonants = '';
      
  for(let i = 0; i < s.length; i++) {
    console.log('s[i] ===>', s[i]);
    if (vowels.includes(s[i])) {
        console.log(s[i]);
      } else {
        consonants += s[i] + '\n';
      }
    }
      
    console.log(consonants);
};


//new commit for day 2
vowelsAndConsonants('javascriptloops');
// vowelsAndConsonants('javascript');
