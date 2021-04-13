var _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

console.log(_.reduce([1, 2], function (sum, n) {
    return sum + n;
}, 0));
// => 3

console.log(_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {}));
// { '1': [ 'a', 'c' ], '2': [ 'b' ] }

console.log(_.reduce(users, function (result, value) {
   if(value.age>36){
    (result[value] || (result[value] = [])).push(value);}
    return result;
}, {}));
//{ '[object Object]': [ { user: 'fred', age: 40, active: false } ] }