import study_prototype from './prototype';
import study_this from './this';
import study_class from './class';
import lodash from './lodash';
import study_Type_number from './dataType_number';
import study_array from './array';
// import getType from './getType';

// console.log(getType(1234));
// console.log(getType(false));
// console.log(getType(null));
// console.log(getType({}));
// console.log(getType([]));





// // 산술 연산자 (arithmetic operator)

// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 3)
// console.log(10 / 2 )
// console.log(7 % 2 )


// // 할당 연산자 (assignment operator)
// let a = 2
// a -= 1; // a = a - 1
// console.log(a);
// a += 1; // a = a + 1
// console.log(a);



// // 비교 연산자 (comparison operator)

// const c = 1;
// const d = 3;
// console.log(c === d);
// console.log(c !== d);
// console.log(c < d);



// // 논리 연산자 (logical operator)

// const e = 1 === 1;
// const f = 'AB' === 'AB';
// const g = true;

// console.log(e);
// console.log(f);
// console.log(g);



// console.log('&&: ', e && f && g);
// console.log('||: ', e || f);





// import random from './getRandom';

// // 조건문 (if Statement)

// const a = random();


// switch(a){
//   case 0:
//     console.log('a is 0');
//     break; // break를 안 걸었을 경우, 아래의 명령문이 실행됨.
//   case 2:
//     console.log('a is 2');
//     break;
//   case 4:
//     console.log('a is 4');
//     break;

//   default:
//     console.log('rest...') // else의 나머지 조건에 해당하는 거다. break문 필요없음.
// }


// if( a === 0 ){
//   console.log('a is 0');
// } else if ( a === 2) {
//   console.log('a is 2');
// } else if ( a === 4) {
//   console.log('a is 4');
// } else {
//   console.log('rest..')
// }



// const ulElem = document.querySelector('ul');

// for( let i =0; i < 3; i += 1){
//   const li = document.createElement('li');
//   li.textContent = `list-${i + 10}`;
//   ulElem.appendChild(li);

// }


// 변수 유효범위 (Variable Scrope)
// 함수레벨: var
// 블록레벨: let, const

// function scope(){
  
//   if (true){
//     var a = 123;
//     console.log(a);
//   }
 
// }


// scope();




// 화살표함수

// const doubleArrow = x => {x * 2}; // 중괄호를 사용할 경우에, return 키워드를 사용해야 반환된다.
// const doubleArrow = x => x * 2; //  화살표함수는, 중괄호가 없을 경우, 값반환을 기본적으로 한다.
// console.log('doubleArrow: ', doubleArrow(7));
// const doubleArrow2 = x => ({
//   name: 'bmworld',
//   age: '33',
//   value: x*7
// }); //  화살표함수는, 중괄호가 없을 경우, 값반환을 기본적으로 한다.
// console.log('doubleArrow: 화살표함수는 객체를 반환할 때는 소괄호기호를 사용하면 된다. ', doubleArrow2(7));









/// 기본함수

// const k = 7;
// function double(){
//   console.log( k * 2);

// }

// double();





// 즉시 실행함수


// (function(){
//   console.log(k * 3);
// })();




// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상



// 콜백 (Callback)
// 함수의 '인수'로 사용되는 함수

// function timeout(callback) {
//   setTimeout(()=>{
//     console.log('bmworld!');
//     callback();
//   },1000);
// }

// timeout(()=>{
//   console.log('callback done!')
  
// });



////--------------------------------------------
////-------------------- JSON
////--------------------------------------------

import myData from './myData.json'; // js만 확장자를 새얅할 수 있다.
// console.log(myData);


const user = {
  name: "bmworld",
  age: 90,
  likes: [
    'Jesus Christ',
    'IU',
    'talk about Faith'
  ]

}

// console.log('user', user);

const str = JSON.stringify(user); // json파일의 모든 data를 전부 String으로 변환함 / 따라서 객체에서 스트링으로 변함
// console.log(str); 
// console.log(typeof str);

const obj = JSON.parse(str); // String Data를 다시 json 파일로 사용할수있게 object로 변환시킴
obj.age = 20;
// console.log('obj', obj);
// console.log(typeof obj);





////--------------------------------------------
////-------------------- LocalStorage
////--------------------------------------------

const str_localStorage = localStorage.getItem('user');
// console.log(str_localStorage);


// localStorage.setItem('user', JSON.stringify(user));// LocalStorage에 저장할때는 객체가 아닌, 문자데이터로 조정해야함
localStorage.setItem('user', JSON.stringify(obj));// LocalStorage에 저장할때는 객체가 아닌, 문자데이터로 조정해야함

// console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('user');