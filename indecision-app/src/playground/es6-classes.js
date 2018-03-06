class Person {
    constructor(name= 'Anonymous', age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello, I'm ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!`
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        return `${description} My major is ${this.major}`
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += ` My home is ${this.homeLocation}`;
        }
        return greeting;
    }
}
const me = new Student('Konstantin', 33, 'Math');
console.log(me.getDescription());

const notMe = new Student('KOnst', 35);
console.log(notMe.getDescription());

const trav = new Traveller('Konst', 35, 'Erkrath');
console.log(trav.getGreeting());


