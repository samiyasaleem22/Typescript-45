// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.guest_list = void 0;
// //Exercise 2
// let personName = "ERIC";
// console.log(`Hello ${personName}, would you like to learn some python today?`);
// //Exercise 3
// //lower case
// let personName = "Samiya";
// console.log("lower case:", personName.toLowerCase());
// //upper case
// console.log("upper case:", personName.toUpperCase());
// //title case
// console.log("upper case:", personName.replace(/\bw/g, c => c.toUpperCase()));
// //Exercise 4
// let qoute = "There are two powers in the world; one is the sword and the other is the pen.";
// let author = "Quaid-E-Azam Muhammad Ali Jinnah";
// console.log(`${author} once said, "${qoute}`);
// //Exercise 5
// let qoute = "There are two powers in the world; one is the sword and the other is the pen.";
// let famous_person = "Quaid-E-Azam Muhammad Ali Jinnah";
// let message = `${famous_person} once said, ${qoute}`;
// console.log(message);
// //Exercise 6
// let personName = `\n\t ALLAMA IQBAL\t\n`;
// console.log(personName);
// let stripped = personName.trim();
// console.log(stripped);
// //Exercise 7 and 8
// console.log(5 + 3);
// console.log(11 - 3);
// console.log(4 * 2);
// console.log(16 / 2);
// //Exercise 9
// let favoriteNumber = 5;
// console.log(`My favorite number is ${favoriteNumber}`);
// //Exercise 10
// //my name is SAMIYA SALEEM
// //date: 26/02/2024
// //this program will multiplication 
// console.log(5 * 2);
// //Exercise 11
// let members = ['rafia', 'hafsa', 'dua', 'wareesha', 'raad'];
// for (let i = 0; i < members.length; i++) {
//     console.log(members[i]);
// }
// //Exersice 12
// var members = ['rafia', 'hafsa', 'dua', 'wareesha', 'raad'];
// var message = 'i will arrange a BBQ party tommorrow:';
// for (var i = 0; i < members.length; i++) {
//     console.log(message + members[i]);
// }
// //Exercise 13
// let transportation = ['audi', 'sports bike', 'bmw', 'civic'];
// for (let i = 0; i < transportation.length; i++) {
//     console.log(`i would like to own a` + transportation[i]);
// }
// //Exersice 14
// let guest_list = ['rafia', 'hafsa', 'dua', 'basid', 'sidra', 'raad'];
// exports.guest_list = guest_list;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ${guest_list[i]} \n\n We invite you on dinner tommorrow
//     \nthankyou`);
// }
// //Exersice 15
// let guest_list = ['rafia', 'hafsa', 'dua', 'basid', 'sidra', 'raad'];
// exports.guest_list = guest_list;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ${guest_list[i]} \n\n We invite you on dinner tommorrow
//     \nthankyou\n`);
// }
// let not_present = 'basid';
// let new_guest = 'hania amir';
// guest_list[3] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ${guest_list[i]} \n\n We invite you on dinner tommorrow
//     \nthankyou\n`);
// }
// console.log(`Mr. ${not_present} will not coming tommoroww dinner.`);
// //Exersice 16
// let guest_list = ['rafia', 'hafsa', 'dua', 'basid', 'sidra', 'raad'];
// exports.guest_list = guest_list;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ${guest_list[i]} \n\n We invite you on dinner tommorrow
//     \nthankyou\n`);
// }
// let not_present = 'basid';
// let new_guest = 'hania amir';
// guest_list[3] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ${guest_list[i]} \n\n We invite you on dinner tommorrow
//     \nthankyou\n`);
// }
// console.log(`Mr. ${not_present} will not coming tommoroww dinner.`);
// guest_list.unshift('kinza hashmi', 'mahira khan', 'fawad khan');
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ${guest_list[i]} \n\n We invite you on dinner tommorrow. We found big table so we decided to invite three more guest.\nthankyou\n`);
// }
// //Exersice 17
// console.log(`unfortunately we can not arrange big table, only two people can allow for the dinner.`);
// while (guest_list.length > 2) {
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Sir/Madam. ${remove_guest}you are not invited for the dinner.`);
// }
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respected Sir/Madam: ${guest_list[i]} \n\nYes you are still invited for tommorrow dinner.\nthankyou\n`);
// }
// guest_list.splice(0, 2);
// console.log(guest_list);
// //Exersice 18
// //Seeing the world : think of the least five places in the world you'd like to visit.
// //Store the location in a array, make sure the array is not in alphabetical order.
// //Print you array in its original order.
// let places = [`maldives`, `greece`, `jaipur`, `turkey`, `suadia arabia`];
// console.log('original :' + places);
// //Print your array in alphabetical order without modifying the actual list.
// console.log('copy :' + [...places].sort());
// //Show that your array is still in its original order by printing it.
// console.log('original :' + places);
// //Print your array in reverse alphabetical order without changing the order of its original list. 
// console.log('copy :' + [...places].sort().reverse());
// //Show that your array is still in its original order by printing it again.
// console.log('copy :' + [...places].sort().reverse());
// //Revers the order of your list, print the array to show that its order has changed.
// console.log('copy :' + places.sort());
// //Reverse the order of your list, print the list to show that its back to its original order.
// console.log('copy :' + places.sort().reverse());
// //Sort your array so its stored in alphabetical order, print the array to show that its order has changed.
// console.log('copy :' + places.sort());
// console.log(`n\ PRINTING NUMBER OF GUEST INVITED`);
// console.log(`we had finally invited ${guest_list.length} from excersice 14`);
// //Exercise 20
// let food = [`biryani`, `chinese`, `cheese paratha`, `pulao`, `pizza`];
// console.log(`list of food:`);
// for (let top of food) {
//     console.log(top);
// }
// //object one:
// let book = {
//     name: 'Essential Typescript', price: 550
// };
// //object two:
// let apple = {
//     name: 'A for apple', price: 350
// };
// console.log(`book name: ${book.name}, price: ${book.price}`);
// console.log(`apple name: ${apple.name}, price: ${apple.price}`);
// //Exercise 22
// let array = ['basid', 'saim', 5, 7, 2, 'happie'];
// console.log(array[5]);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// //Exercise 23
// let car = `subaru`;
// //Test 1: Equality comparision (true)
// console.log("Is car == 'subaru' I predict True");
// console.log(car == 'subaru'); //True
// //Test 2: Strict equality comparision (true)
// console.log("Is car === 'subaru' I predict True");
// console.log(car === 'subaru'); //True
// //Test 3: Inequality comparision (false)
// console.log("Is car != 'subaru' I predict false");
// console.log(car != 'subaru'); //false
// //Test 4: Strict inequality comparision (false)
// console.log("Is car !== 'subaru' I predict false");
// console.log(car !== 'subaru'); //false
// //Test 5: Less that comparision (false)
// console.log("Is car < 'subaru' I predict false");
// console.log(car < 'subaru'); //false
// //Test 6: Greater than comparision (false)
// console.log("Is car > 'subaru' I predict false");
// console.log(car > 'subaru'); //false
// //Test 7: Less than or equal comparision (true)
// console.log("Is car <= 'subaru' I predict true");
// console.log(car <= 'subaru'); //true
// //Test 8: Greater than or equal comparision (true)
// console.log("Is car >= 'subaru' I predict true");
// console.log(car >= 'subaru'); //true
// //Test 9: Checking truthness (true)
// console.log("Is car ? I predict true");
// console.log(car); // true
// //Test 10: Checking falseness (false)
// console.log("Is !car? I predict false");
// console.log(!car); // false
// //Exercise 24
// let car = 'subaru';
// let age = 22;
// let number = [1, 2, 3, 4, 5];
// //Sring test
// //Test 1: Euqality (true)
// console.log("Is car == 'subaru'? I predict true");
// console.log(car == 'subaru'); //true
// //Test 2: Strict equality (false)
// console.log("Is car === 'subaru' I predict false");
// console.log(car === 'subaru'); //false
// //Test 3: Inequality (true)
// console.log("Is car != 'subaru'? I predict true");
// console.log(car != 'subaru'); //true
// //Test 4: Inequality (false)
// console.log("Is car !== 'audi' I predict false");
// console.log(car !== 'audi'); //false
// //Lowercase test
// //Test 5: lowercase (true)
// console.log("Is car.tolowercase () == 'subaru'? I predict true");
// console.log(car.toLocaleLowerCase() == 'subaru'); //true
// //Test 6: lowercase (false)
// console.log("Is car.tolowercase () === ? I predict false");
// console.log(car === car.toLocaleLowerCase()); //false
// //Numerical test
// //Test 7: Equality (true)
// console.log("Is age == 22? I predict true");
// console.log(age == 22); //true
// //Test 8: Inequality (false)
// console.log("Is age != 25? I predict false");
// console.log(age != 25); //true
// //Test 9: Less than equal (true)
// console.log("Is age <= 22? I predict true");
// console.log(age <= 22); //true
// //Test 10: Greater than inequal (false)
// console.log("Is age >= 25? I predict false");
// console.log(age >= 25); //false
// //Logical operators
// //Test 11: AND (true)
// console.log("Is age > 22 && age < 25? I predict true");
// console.log(age > 22 && age < 25);
// //Test 12: OR (false)
// console.log("Is age > 22 || age < 25? I predict false");
// console.log(age > 22 || age < 25);
// //Array test
// //Test 13: In array (true)
// console.log("Is 3 in number? I predict true");
// console.log(3 in number);
// //Test 14: n\Not in array (false)
// console.log("Is 5 in number? I predict false");
// console.log(5 in number);
// //Exercise 25
// //variable: alien color
// let alien_color = `green`;
// //Statement of earning points
// if (alien_color == "green") {
//     console.log("The player just earned 5 points.");
// }
// //version: who fails the test and have no output
// alien_color = "red";
// if (alien_color == "green") {
//     console.log("The player just earned 5 points.");
// }
// //Exercise 26
// //choose a color of an alien as you did in question 25.
// let alien_color = `green`;
// //if the alien color is green , write an statement that tha player earned 5 points.
// if (alien_color == "green") {
//     console.log("The player just earned 5 points for shoting the alien.");
// }
// else {
//     console.log("The player just earned 10 points");
// }
// alien_color = "red";
// if (alien_color == "green") {
//     console.log("The player just earned 5 points for shoting the alien.");
// }
// //Exercise 27
// let alien_color = `green`;
// if (alien_color == `green`) {
//     console.log(`The player just earned 5 points for shoting the alien.`);
// }
// //if the color is yellow player earned 10 point.
// else if (alien_color == `yellow`) {
//     console.log(`The player just earned 10 points for shoting the alien.`);
// }
// //if the color is red player earned 15 point.
// else if (alien_color == `red`) {
//     console.log(`The player just earned 15 points for shoting the alien.`);
// }
// else {
//     console.log(`Please select the right color`);
// }
// //write 3 versions of this program, make sure to print each message to their respective color.
// //version 2:
// alien_color = `red`;
// if (alien_color == `green`) {
//     console.log(`The player just earned 5 points for shoting the alien.`);
// }
// else if (alien_color == `yellow`) {
//     console.log(`The player just earned 10 points for shoting the alien.`);
// }
// else if (alien_color == `red`) {
//     console.log(`The player just earned 15 points for shoting the alien.`);
// }
// else {
//     console.log(`Please select the right color`);
// }
// //version 3:
// alien_color = `yellow`;
// if (alien_color == `green`) {
//     console.log(`The player just earned 5 points for shoting the alien.`);
// }
// else if (alien_color == `yellow`) {
//     console.log(`The player just earned 10 points for shoting the alien.`);
// }
// else if (alien_color == `red`) {
//     console.log(`The player just earned 15 points for shoting the alien.`);
// }
// else {
//     console.log(`Please select the right color`);
// }
// //Exercise 28
// //person is less than 2 years.
// let age = 11;
// if (age < 2) {
//     console.log("The person is a baby");
// }
// //person is 2 year old but less than 4.
// else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler");
// }
// //person is 4 year old but less than 13.
// else if (age >= 4 && age < 13) {
//     console.log("The person is a kid");
// }
// //person is 13 year old but less than 20.
// else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager");
// }
// //person is 20 year old but less than 65.
// else if (age >= 20 && age < 65) {
//     console.log("The person is a adult");
// }
// //person is 65 year or older than that.
// else {
//     console.log("Person is an elder");
// }
// //Exercise 29
// let favorite_fruits = ['mango', 'water melon', 'cherries', 'apple'];
// if (favorite_fruits.includes('apple')) {
//     console.log('');
// }
// //five "if" statements.
// if (favorite_fruits.includes('mango')) {
//     console.log('I really like mango!');
// }
// if (favorite_fruits.includes('water melon')) {
//     console.log('I really like water melon');
// }
// if (favorite_fruits.includes('cherries')) {
//     console.log('I really like cherries');
// }
// if (favorite_fruits.includes('banana')) {
//     console.log("I really like banana");
// }
// if (favorite_fruits.includes('orange')) {
//     console.log("I really like orange");
// }
// //Exercise 30
// let users = [`suman`, `basid`, `happie`, `admin`];
// for (let user of users) {
//     if (user === "admin")
//         console.log("Hello admin, would you like to see a status report?");
//     else {
//         console.log(`Hello ${user}, thankyou for logging in.`);
//     }
// }
// //Exercise 31
// let users = ['suman', 'basid', 'happie', 'admin'];
// if (users.length == 0) {
//     console.log("We need to find some users!");
// }
// //remove all the username from an array, and print a correct message.
// else {
//     users: [];
//     console.log("All user have been removed " + users.length);
// }
// //Exercise 32
// let current_user = [`admin`, `dua`, `rafia`, `hafsa`, `raad`];
// let new_user = [`maheen`, `sara`, `adil`, `anshara`, `admin`];
// new_user.forEach((newUser) => {
//     if (current_user.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser}will need to enter new username.`);
//     }
//     else {
//         console.log(`${newUser}is available.`);
//     }
// });
// //Exercise 33
// let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //for loop
// for (let i = 0; i < myNumber.length; i++) {
//     if (myNumber[i] == 1) {
//         console.log(`${myNumber[i]}st`);
//     }
//     else if (myNumber[i] == 2) {
//         console.log(`${myNumber[i]}nd`);
//     }
//     else if (myNumber[i] == 3) {
//         console.log(`${myNumber[i]}rd`);
//     }
//     else if (myNumber[i] >= 4 && myNumber[i] <= 9) {
//         console.log(`${myNumber[i]}th`);
//     }
// }
// //Exercise 34
// let favouritepizza = [`cheese pizza`, `fajita pizza`, `pepperoni pizza`, `veggies pizza`];
// for (let i = 0; i < favouritepizza.length; i++) {
//     console.log(favouritepizza[i]);
// }
// for (let i = 0; i < favouritepizza.length; i++) {
//     console.log(`I like to eat ${favouritepizza[i]}`);
// }
// console.log(`\nI like to eat pizza,it comes to the variety of flavours.`);
// //Exercise 35
// let animal = [`cat`, `turtle`, `dog`];
// animal.forEach(animal => {
//     console.log(`A ${animal}  would make a great pet.`);
// });
// console.log(`Any of these would make a great pet!`);
// //Exercise 36
// function make_shirt(size, message) {
//     console.log(`Making a ${size}t-shirt with the message "${message}"printed on it`);
// }
// make_shirt("medium", "save human lives");
// Exercise;
// 37;
// function make_shirt(size = "large", message = "I love Typescript") {
//     console.log(`Making a ${size}t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt();
// make_shirt("medium"); //default message
// make_shirt("small", "Dive into coding"); //custom message 
// //Exercise 38
// function describe_cities(nameofCity, country = "Pakistan") {
//     return `${nameofCity} is in ${country}`;
// }
// //3cities
// let city1 = describe_cities("Karachi", "Pakistan");
// let city2 = describe_cities("larkana");
// let city3 = describe_cities("lahore");
// let city4 = describe_cities("Dubai", "UAE");
// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);
// //Exercise 39
// function city_country(city, country = "Pakistan") {
//     return `"${city}, ${country}`;
//     console.log(`"${city}, ${country}`);
// }
// city_country("karachi", "Pakistan");
// let mycities = city_country("karachi", "Pakistan");
// console.log(mycities);
// console.log(city_country("Dubai", "UAE"));
// console.log(city_country("istanbul", "Turkey"));
// console.log(city_country("berlin", "Germany"));
// //Exercise 40
// function make_album(artistName, albumTitle) {
//     return { artistName, albumTitle };
// }
// let album1 = make_album("Atif", "Pheli dafa");
// let album2 = make_album("Asim", "Jo tu naah mila");
// let album3 = make_album("Ali", "Jhoom");
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Number;
// of;
// tracks;
// function make_album2(artistName, albumTitle, numberofTracks) {
//     return { artistName, albumTitle, numberofTracks };
// }
// let album4 = make_album2("Khudhgarz", "mashup", 30);
// let album5 = make_album2("Asim", "buleya", 35);
// let album6 = make_album2("Ali", "Jhoom", 25);
// console.log(album4);
// console.log(album5);
// console.log(album6);
// //Exercise 41
// let magicians = [`harris`, `neil patrick`, `finch`];
// function show_magicians(magicians) {
//     magicians.forEach((magician) => {
//         console.log(magician);
//     });
// }
// show_magicians(magicians);
// //Exercise 42
// let magicians = [`harris`, `neil patrick`, `finch`];
// function show_magicians(magician) {
//     magicians.forEach((magician) => {
//         console.log(magician);
//     });
// }
// function make_great(magician) {
//     for (let i = 0; i < magicians.length; i++) {
//         magician[i] = magician[i] + " the Great Magician ";
//     }
// }
// make_great(magicians);
// show_magicians(magicians);
// //Exercise 43
// let magicians = [`harris`, `neil patrick`, `finch`];
// function make_great(magicians) {
//     let greatMagicians = [];
//     magicians.forEach((magician) => {
//         greatMagicians.push(`${magician} the Great`);
//     });
//     return greatMagicians;
// }
// function show_magicians(magicians) {
//     magicians.forEach((magician) => {
//         console.log(magician);
//     });
// }
// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names
// //Exercise 44
// function make_sandwich(...items) {
//     console.log("Making a sandwich with", '${items.join}');
// }
// make_sandwich("ham", "cheese");
// make_sandwich("beef patty", "lettuce", "thousand island sauce");
// make_sandwich("avocado", "capssicum", "mayo");
// //Exercise 45
// function make_car(manufacturer, model, ...options) {
//     let car = { manufacturer: manufacturer,
//         model: model
//     };
//     options.forEach(option => {
//         let [key, value] = option;
//     });
//     return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "black"], ["year", 1999]));
// console.log(make_car("Ford", "Fiesta", ["color", "maroon"], ["sunroof", true]));
