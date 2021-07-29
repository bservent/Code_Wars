//write a function name sortBackwards that takes in an array of numbers and return the same array with the numbers sorted highest to smallest.

function sortBackwards(arr){
  function compare(a, b){
    if(a < b){
      return 1;
    }else if(a > b){
      return -1;
    }else{
      return 0;
    }
  };
  return arr.sort(compare)
};

console.log(sortBackwards([89, 93, 64]))