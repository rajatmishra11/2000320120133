const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // const one=arr[0]
  // const two=arr[1]
  // const three=arr[2]

// const [one , two, three]=arr;
// console.log(one, two, three);

const [one, two, three, ...rest]=arr;
console.log(one, two, three, rest);