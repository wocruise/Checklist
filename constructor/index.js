class person {
    constructor(name,bod){
        this.name = name;
        this.bod = new Date(bod);
    }
getName() {
    return this.name;
}
getAge() {
    var year = new Date()
    return year.getFullYear()-this.bod.getFullYear();
    }
}

var person1 = new person('Pham Quoc Cuong','01-02-1997');

console.log(person1.getAge());
console.log(person1.getName());
console.log(person1);