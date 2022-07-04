function deleteRepeatedItems(array) {
  const newArray = [];
  array.map(element => {
    if ( !newArray.includes(element) ) {
      newArray.push(element)
    }
  })
  return newArray
}

const array = [1,1,'1',4,4,'f','f',1,'d','e','d','1'];

const result = deleteRepeatedItems(array);
console.log(result);