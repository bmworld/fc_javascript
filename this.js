/// this
// 일반(Normal)함수는 호출 위치에 따라 this정의!
// 화살표(Arrow)함수는 자신이 선언(만들어진) 된 함수 범위 내에서 this 정의!


const bmworld = {
  name: 'bm',
  normal: function () {
    console.log(this.name); // 이 위치에서는, 호출위치가 어딘지 모르기 때문에, this를 특정할 수 없다.

  },
  arrow: () => {
    console.log(this.name); // 화살표함수는, 호출위치랑 전혀 상관없다 // 따라서 , 선언되는 위치에서 this가 무엇인지 바로 알 수 있다.

  }
}

// bmworld.normal(); //
// 메소드인 normal은 기본적으로 점표기법에 의해서 객체인 bmworld 내부에서 실행된다.
// 메소드 normal에 딸려있고 거기에 의해서 실해오디기 때문에, bmworld가 곧 this이다. 그래서 console에서 this가 bmworld로 설정되어서 값을 할당할 수 있는 것이다.

// bmworld.arrow(); // undefined



const amy = {
  name: 'Amy',
  normal: bmworld.normal,
  arrow: bmworld.arrow,
}

// amy.normal();
// amy.arrow();