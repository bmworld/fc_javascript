



//ES6 Classes

// const study_class = {
//   name: 'bmworld',
//   normal() {
//     console.log(this.name);
//   },
//   arrow: () =>{
//     console.log(this.name)
//   }
// }

// study_class.normal();
// study_class.arrow(); // 


///// --- PROTOTYPE ---



function User_prototypeVersion (first, last) {
  this.firstName = first;
  this.lastName  = last;

}

User_prototypeVersion.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

const user1 = new User_prototypeVersion('bm_prototypeVersion','kim_prototypeVersion');

// console.log(user1.getFullName());




class User {
  constructor ( first, last ) { // constructor: 내부 함수function임
    this.firstName = first;
    this.lastName = last;
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}



const study_class = new User ('bm', 'kim');

// console.log(study_class);
// console.log(study_class.getFullName());




///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////// Class 상속 ////////////////////

class Vehicle {
  constructor (name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle ('운송수단', '2');
// console.log(myVehicle);


class Bicycle extends Vehicle {
  constructor (name, wheel) {
    super (name, wheel); // super --> extends 키워드 뒤의 Vehicle 클래스를 의미한다.
    // super 자리에서 Vehicle 클래스가 실행된다.
  }
}
const myBicycle = new Bicycle('삼천리',2);
const daughterBicicle = new Bicycle('세발',3);

// console.log(myBicycle);
// console.log(daughterBicicle);


class Car extends Vehicle {
  constructor (name, wheel, license) {
    super (name, wheel);
    this.license = license
  }
}

const myCar = new Car('Jeep','4',true)
// console.log(myCar);