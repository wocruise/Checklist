var fs = require('fs');


var a =[2,4,6,8,10,12];
for(i = 0 ; i<a.length;i++){
    console.log(a[i]); // i = 2,4,6,8,10,12
}

for (i in a){
    console.log(i);// i = 0,1,2,3,4,5
}

for (i of a){
    console.log(i); // i =2,4,6,8,10,12
}

function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (array) {
    array.forEach(function (entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
// 3
console.log(obj.sum);
// 16