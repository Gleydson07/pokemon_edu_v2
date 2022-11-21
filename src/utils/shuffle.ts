
export const shuffle = (array: Array<any>) => {
  let copy = [];
  let n = array.length; 
  let i = 0;

  while (n) {  
    i = Math.floor(Math.random() * array.length);  
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }  
  return copy;
}