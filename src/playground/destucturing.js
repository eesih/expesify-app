// const person = {
//     name: 'Eero',
//     age: 38,
//     location: {
//         city: 'Espoo',
//         temp: 17
//     } 
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`); 

// const { temp: temperature , city } = person.location;

// console.log(`It's ${temperature} degrees in ${city}.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city = 'Espoo', state ] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, , price ] = item;

console.log(`A medium ${coffee} costs ${price}`);