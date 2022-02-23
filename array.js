
const numbers = [1,2,3,4];
const fruits = ['apple', 'banana', 'cherry'];

// const a = fruits.forEach(function (fruit, index) {
//   console.log(`${fruit}-${index}`);
// });

const a = fruits.forEach((fruit, index) => {
  // console.log(`${fruit}-${index}`);
});


// foreach() 메서드는 배열반환 안 함
// console.log('forEach():' , a);






// const b = fruits.map(function (fruit, index) {
//   return `${fruit}-${index}`;
// }); 


const b = fruits.map((fruit, index) => ({
  id: index,
  name: index
})); 

// console.log('map(): ' , b); // map() 메서드는 기본적으로 "새로운 배열을 반환"함


