

// console.log('destructuring');

// const person = {
//     name: 'Konstantin',
//     age: 33,
//     location:{
//         city: 'Erkrath',
//         temp: -1
//     }
// };

// const {name, age} = person;
// const {temp: temperature, city} = person.location;
// console.log(`${name} is ${age}`);

// console.log(`It's ${temperature} in ${city}`);


// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //

const address = ['1299 S Uniper Street', 'Erkrath', 'NRW', '40699'];

const [, city, state] = address;

console.log(`You are int ${city} ${state}`);