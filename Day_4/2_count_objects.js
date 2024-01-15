/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
/* 
function getCount(objects) {
  let totalCountOfObjects = 0;
  
  for(const i in objects) {
      if(objects[i].x === objects[i].y) {
          totalCountOfObjects++;
      }
  }
  
  return totalCountOfObjects;
}; */


function getCount(objects) {

  let totalCountOfObjects = 0;

  objects.forEach( function(i) {
      if(i.x === i.y) {
        totalCountOfObjects ++;
      }
    }
  );
  
  return totalCountOfObjects;
};