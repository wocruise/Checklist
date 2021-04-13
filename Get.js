var _ = require('lodash');
var object = { 'a': [{ 'b': { 'c': 3 } }], 'person': [{ 'country': { 'city': 'DaNang' } }] };

console.log(_.get(object, 'a[0].b.c'));
// => 3

console.log(_.get(object, ['person', '0', 'country', 'city']));
// => 3
