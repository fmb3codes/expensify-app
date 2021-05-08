// /////// Object destructuring



// const person = {
//     name: "Frankie",
//     age: 26,
//     location: {
//         city: "Phoenix",
//         temp: 100
//     }
// };

// const { name: firstName = "Anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);


/////// Array destructuring

const address = ["1299 S Juniper Street", "Phoenix", "Arizona", "85032"];

const [street, city, state="California"] = address;

console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (iced)", "$3.00", "3.50", "3.75"];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`);