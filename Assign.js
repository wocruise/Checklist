// constructor: _.assign(object, [sources])
var _ = require('lodash');
function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;



console.log(_.assign({ 'b': 2 }, new Foo, new Bar));// ASSIGN
// => { 'b': 2,'a' : 1, 'c': 3 }
console.log(_.assignIn({ 'a': 0 }, new Foo, new Bar));// ASSIGNIN
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 })