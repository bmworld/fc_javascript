// import getType from './getType';
// import random from './getRandom';

// console.log(random());
// console.log(getType(1));

import _ from 'lodash';




const usersA = [
  { userID : '1', name: 'BMWORLD'},
  { userID : '2', name: 'Neo'},
]



const usersB = [
  { userID : '1', name: 'BMWORLD'},
  { userID : '3', name: 'Amy'},
]



const usersC = usersA.concat(usersB);
// console.log('concat', usersC);
// console.log('uniqBy,', _.uniqBy(usersC, 'userID'));

const usersD = _.unionBy (usersA, usersB, 'usersID');
// console.log('unionnBy', usersD);






const users = [
  { userId: 1, name: 'bmworld'},
  { userId: 2, name: 'Neo'},
  { userId: 3, name: 'Amy'},
  { userId: 4, name: 'Evan'},
  { userId: 5, name: 'Lewis'}
]

const foundUser = _.find(users, {name :'Amy'})
const foundUserIndex = _.findIndex(users, {name :'Amy'})

// console.log(foundUser);
// console.log(foundUserIndex);


_.remove(users, {name: 'bmworld'})
// console.log(users);