/* Utilize o reduce para transformar uma matriz em um array. */

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (arrays) => {
    return arrays.reduce( (acc, currValue) => {
        return acc.concat(currValue);
    }, [] )
  }
  console.log(flatten(arrays));