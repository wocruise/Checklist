var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8,9,10];

console.log(array.filter(x=>x>3));
//[4,5,6,7,8, 9, 10]
_.filter(users, ['active', false]);
// => objects for ['fred']

console.log(array.map(x => x > 3));
//[false, false, false ,true, true, true,true, true, true,true]

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

console.log(_.filter(users, o=>o.age>36));
//{ user: 'fred', age: 40, active: false }
console.log(_.map(users, o => o.age > 37));
//[ false, true ]
console.log(_.map(users, 'user'));
//['barney','fred']