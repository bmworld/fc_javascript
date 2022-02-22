

//////////////////////////////////////////
// 생성자함수 (prototype)

const bmworld = {
  firstname : 'bm',
  lastname: 'kim',
  getFullname: function(){
    return `${this.firstname} ${this.lastname}`;
    // return `${bmworld.firstname} ${bmworld.lastname}`; // this = 변수의 이름인거다.
  }
}
// console.log(bmworld.getFullname());

const sarah = {
  firstname : 'sarah',
  lastname: 'seo',
  getFullname: function(){
    return `${this.firstname} ${this.lastname}`;
    // return `${bmworld.firstname} ${bmworld.lastname}`; // this = 변수의 이름인거다.
  }
}

// console.log(sarah.getFullname());



const neo = {
  firstname : 'Neo',
  lastname: 'smith',
  getFullname: function(){
    return `${this.firstname} ${this.lastname}`;
    // return `${bmworld.firstname} ${bmworld.lastname}`; // this = 변수의 이름인거다.
  }
}

// console.log(neo.getFullname());





 

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 생성자 함수
function User (first, last ){ // 생성자 함수일경우 pascal Case로 사용해주는 것이 JS개발자들의 관행이다.
  this.firstname = first; 
  this.lastname = last;

}

User.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
}

User.prototype.hello = 'Hello~~~';

const instance_bmworld = new User('bm', 'kim'); // 생성자함수 new를 사영하여 인스턴스를 생성한다.
const instance_sarah = new User('sarah', 'seo'); // 생성자함수 new를 사영하여 인스턴스를 생성한다.
const instance_neo = new User('neo', 'smith'); // 생성자함수 new를 사영하여 인스턴스를 생성한다.

// console.log(instance_bmworld);
// console.log(instance_bmworld.getFullName());
// console.log(instance_sarah);
// console.log(instance_neo);
// console.log(instance_neo.hello);





////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////  this 활용  ////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////////// 일반함수와 화살표함수가 가리키는 THIS는 서로 다르기 때문에, 상황에 맞게 사용하는 방법을 익히시라.
// 일반(Normal)함수는 호출 위치에 따라 this정의!
// 화살표(Arrow)함수는 자신이 선언(만들어진) 된 함수 범위 내에서 this 정의!



window.name = 'window`s this';


function StudyThis (name) {
  this.name = name;
}
StudyThis.prototype.normal = function () {
  console.log(this.name);
}

StudyThis.prototype.arrow = () => {
  this.name = '이게 함수영역에서 선언한 this';
  console.log(this.name);
  console.log(this);
}


const study_this = new StudyThis('bmworld');

// study_this.normal();
// study_this.arrow();




const timer = {
  name: 'bmworld!',
  timeout: function () {
    setTimeout(function () {
      console.log(this.name); // 1. 일반함수의 this는 '호출위치'에서 정의된다!
    }, 1000);
  }
}

// timer.timeout(); // 2. 즉 일반함수는 seTimeout가 실행되는 로직 어딘가에서 실행된다. 즉, 전역에서 호출되었다. 그래서 this는 전역 window를 가르킨다.




const timer_arrow = {
  name: 'arrow함수의 this가 가르키는것은 timer_arrow인 객체{}다.!',
  timeout: function () {
    setTimeout(() => {
      // console.log(this.name); // 화살표함수를 감싸고 있는 함수범위는 timeout이라는 메서드를 정의할 때 사용한 무명 함수(function(){})이고,
      // 이 함수범위에서 this가 정의된 것다.
      // 함수범위의 this는 일반함수(function(){})가 정의된 timer_arrow라는 객체{}를 가리킨다.
    }, 1000);
  }
}

timer_arrow.timeout(); // 2. 즉 일반함수는 seTimeout가 실행되는 로직 어딘가에서 실행된다. 즉, 전역에서 호출되었다. 그래서 this는 전역 window를 가르킨다.