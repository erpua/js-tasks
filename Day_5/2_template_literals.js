/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

// First way
/* function sides(literals, ...expressions) {

       
    // Useless - ? 
    // const firstLiteralsElement = literals[0];
    // const secondLiteralsElement = literals[1];
    // const thirdLiteralsElement = literals[2]; 

  const area = expressions[0];
  const perimeter = expressions[1];
  
  const d = Math.sqrt(perimeter*perimeter - 16 * area);
  
  const s1 = (perimeter + d) / 4;
  const s2 = (perimeter - d) / 4;
  
  const sortedS = [s1,s2].sort();
  
  return sortedS;
}; */

// Second way
function sides(literals, ...expressions) {
    
    const [A,P] = expressions;
    
    const s1 = ( P + Math.sqrt(Math.pow(P, 2) - 16 * A) ) / 4;
    const s2 = ( P - Math.sqrt(Math.pow(P, 2) - 16 * A) ) / 4;
    
    return [s1, s2].sort();
};