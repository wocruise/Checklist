var _ = require('lodash');

var obj = {'a':[1,2,3,4],'b':['a','b','c'],'person':{name:'Duc',Age:25}};
console.log(_.pick(obj,['person','b']));
// { person: { name: 'Duc', Age: 25 }, b: [ 'a', 'b', 'c' ] }