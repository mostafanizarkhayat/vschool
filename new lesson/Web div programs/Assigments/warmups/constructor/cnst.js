function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.getFirstName = function () {
        return this.firstName;
    };
    this.getlastName = function () {
        return this.lastName;
    };
    this.getfullName = function () {
        return this.firstName + " " + this.lastName;
    };
    this.setFirstName = function (newfirst) {
        this.firstName = newfirst;
    };
    this.setLastName = function (newlast) {
        this.lastName = newlast;
    };
    this.setFullName = function (newfirst, newlast) {
        this.firstName = newfirst;
        this.lastName = newlast;
    }

}

var Amira = new Person("Amira", "Moussa");
console.log(Amira);
console.log(Amira.getFirstName());
console.log(Amira.getlastName());
console.log(Amira.getfullName());
Amira.setFirstName("Nawal");
Amira.setLastName("AlEdelbi");
console.log(Amira);