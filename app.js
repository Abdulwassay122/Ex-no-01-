// Date:2/17/2024
// Name:Abdul Wassay
//  01 Personal message
var person_name = "wassay";
console.log("Hellow " + person_name + " Did you want to learn Typesript today");
//above program makes a message to person 
// 3. Name Cases
var person_name2 = "Wassay";
console.log(person_name2.toUpperCase());
console.log(person_name2.toLowerCase());
console.log(person_name2);
//Above Program shows a variable in Uppercase, Lowercase and Titlecase 
// 4. Famous Quote
console.log("Allama Iqbal once said,\"Nations are born in the hearts of poets, they prosper and die in the hands of politicians.\"");
// 5. Famous Quote 2
var famous_person = "Allama Iqbal";
var message = "\"Nations are born in the hearts of poets, they prosper and die in the hands of politicians.\"";
console.log(famous_person + " once said," + message);
// 6. Stripping Names
var person_name3 = "    Ali   ";
console.log(person_name3);
console.log(person_name3.trim());
// 7. Number Eight
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(64 / 8);
// 9. Favorite Number
var fav_no = 9;
console.log("My favorate number is " + fav_no);
// 11. Names
var friends_names = ["Orhan", "Allauddin", "Salahuddin", "Boran"];
console.log(friends_names[0]);
console.log(friends_names[1]);
console.log(friends_names[2]);
console.log(friends_names[3]);
// 12. Greetings
var friends_names1 = ["Orhan", "Allauddin", "Salahuddin", "Boran"];
var message2 = "Hellow ";
console.log(message2 + friends_names1[0]);
console.log(message2 + friends_names1[1]);
console.log(message2 + friends_names1[2]);
console.log(message2 + friends_names1[3]);
// 13. Your Own Array
var transport = ["Car", "Bike", "Airplane",];
console.log("I like to Own new " + transport[0]);
console.log("I want to Own new super " + transport[1]);
console.log("I want to travel in Emarates " + transport[2]);
// 14. Guest List
var guests = ["Imran", "Irfan", "Ikram"];
var message3 = ",I would like to invite you to dinner tomorrow ";
console.log(guests[0] + message3);
console.log(guests[1] + message3);
console.log(guests[2] + message3);
// 15.Changing Guest List
var prints = ['Irfan'];
guests[1] = "Shani";
console.log(guests[0] + message3);
console.log(guests[1] + message3);
console.log(guests[2] + message3);
// 16. More Guests
guests.unshift("Imam");
guests.splice(2, 0, "Inzamam");
guests.push("Irdogan");
console.log(guests[0] + message3);
console.log(guests[1] + message3);
console.log(guests[2] + message3);
console.log(guests[3] + message3);
console.log(guests[4] + message3);
console.log(guests[5] + message3);
// 17. Shrinking Guest List
console.log("you can invite only two people for dinner.");
var message4 = ",I am sorry I can’t invite you to dinner.";
var message5 = ",You are still invited";
console.log(guests[5] + message4);
guests.pop();
console.log(guests[4] + message4);
guests.pop();
console.log(guests[3] + message4);
guests.pop();
console.log(guests[2] + message4);
guests.pop();
console.log(guests[0] + message5);
console.log(guests[1] + message5);
guests.pop();
guests.pop();
console.log(guests);
// 18. Seeing the World
var locations = ["Hunza", "Skardu", "Amazon", "Masaimara", "TajMahal"];
console.log(locations);
console.log(locations.sort());
console.log(locations);
console.log(locations.reverse());
console.log(locations.reverse());
console.log(locations.sort());
console.log(locations.reverse());
// 19. Dinner Guests
console.log("I am inviting two people to dinner");
// 20.
var pslteams = ["Karachi Kings", "Multan Sultan", "Peshawar Zalmi", "Queta Gladiators", "Lahore Qalanders", "Islamabad United"];
console.log("List of PSL teams:");
for (var i_1 = 0; i_1 < pslteams.length; i_1++) {
    console.log(pslteams[i_1]);
}
// 21.
var language = "Javascript";
Array.from(language);
console.log(typeof language);
console.log(language);
// 22. Intentional Error
// let locations1 = ["Hunza" "Skardu", "Amazon", "Masaimara", "TajMahal"]
// console.log(locations1)
// 23. Conditional Tests
var obj_1 = "Pencil";
console.log("Is obj_1 == 'Pencil'? I predict true");
console.log(obj_1 == "Pencil");
var obj_2 = "Pen";
console.log("Is obj_2 == 'Pen'? I predict true");
console.log(obj_2 == "Pen");
var obj_3 = "box";
console.log("Is obj_3 == 'boox'? I predict false");
console.log(obj_3 == "boox");
var obj_4 = "book";
console.log("Is obj_4 == 'book'? I predict true");
console.log(obj_4 == "book");
var obj_5 = "fox";
console.log("Is obj_5 == 'boox'? I predict false");
console.log(obj_5 == "boox");
var obj_6 = "wolf";
console.log("Is obj_6 == 'wolf'? I predict true");
console.log(obj_6 == "wolf");
var obj_7 = "table";
console.log("Is obj_7 == 'tabble'? I predict false");
console.log(obj_7 == "tabble");
var obj_8 = "chair";
console.log("Is obj_8 == 'chaiir'? I predict false");
console.log(obj_8 == "chaiir");
var obj_9 = "false";
console.log("Is obj_9 == 'false'? I predict true");
console.log(obj_9 == "false");
var obj_10 = "ball";
console.log("Is obj_10 == 'boll'? I predict false");
console.log(obj_10 == "boll");
//24. More Conditional Tests
// Tests for equality and inequality with strings
var str_1 = "wing";
var str_2 = "king";
console.log(str_1 === str_1); //true
console.log(str_1 === str_2); //false
console.log(str_1 !== str_2); //true
console.log(str_2 !== str_2); //false
// Tests using the lower case function
var str_3 = "HI";
var str_4 = "hi";
console.log(str_3.toLowerCase() === str_4); //true
console.log(str_3 === str_4); //false
console.log(str_3 === str_4.toUpperCase()); //true
console.log(str_3 === str_4); //false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var eq_1 = 5;
var eq_2 = 10;
console.log(eq_1 === eq_1); //true
console.log(eq_1 !== eq_1); //false
console.log(eq_1 < eq_2); //true
console.log(eq_1 > eq_2); //false
console.log(eq_1 <= eq_2); //true
console.log(eq_2 <= eq_1); //false
//  Tests using "and" and "or" operators
var eq_3 = 7;
var eq_4 = 14;
var eq_5 = 9;
var eq_6 = 11;
console.log((eq_3 < eq_4) && (eq_5 < eq_6)); //true
console.log((eq_3 < eq_4) && (eq_5 > eq_6)); //false
console.log((eq_3 < eq_4) || (eq_5 < eq_6)); //true
console.log((eq_3 > eq_4) || (eq_5 > eq_6)); //false
// Test whether an item is in a array
var car = ["Suzuki", "Mitsubishi", "Lexus"];
console.log(car.includes("Mitsubishi")); //true
console.log(car.includes("BMW")); //false
// Test whether an item is not in a array
var mobile = ["Samsung", "Apple", "Gpixel"];
console.log(!mobile.includes("Oppo")); //true
console.log(!mobile.includes("Apple")); //false
// 25. Alien Colors #1
var alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
// 26. Alien Colors #2
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else {
    console.log("You earned 10 points");
}
// 27. Alien Colors #3
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
// 28. Stages of Life
var age = 17;
if (age < 2) {
    console.log("You are Baby");
}
else if (age == 2 || age < 4) {
    console.log("You are a Toddler");
}
else if (age == 4 || age < 13) {
    console.log("You are a Kid");
}
else if (age == 13 || age < 20) {
    console.log("You are a Teenager");
}
else if (age == 20 || age < 65) {
    console.log("You are an adult");
}
else if (age >= 65) {
    console.log("You are an adult");
}
// 29. Favorite Fruit
var favorate_fruits = ["Banana", "Watermelon", "Dates"];
if (favorate_fruits.includes("Banana")) {
    console.log("You Really like Bananas!");
}
if (favorate_fruits.includes("Mango")) {
    console.log("You Really like Mangos!");
}
if (favorate_fruits.includes("Watermelon")) {
    console.log("You Really like Watermeelon!");
}
if (favorate_fruits.includes("Apple")) {
    console.log("You Really like Apple!");
}
if (favorate_fruits.includes("Dates")) {
    console.log("You Really like Dates!");
}
// 30. Hello Admin
var username = ["admin", "Ali", "Abdullah", "Umer", "Amir"];
username.forEach(function (username) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("".concat(username, " thank you for logging in again."));
    }
});
// 31. No Users
var username2 = [""];
username2.forEach(function (username2) {
    if (username2 == "") {
        console.log("We need to find some users!");
    }
});
// 32. Checking Usernames
var current_users = ["Akbar", "David", "Hashim", "Ali", "Asghar"];
var new_users = ["David", "Joseph", "Stokes", "Hashim", "Rizwan"];
var i;
var j;
for (i = 0; i < new_users.length; i++) {
    var new_username = new_users[i];
    var username_exist = false;
    for (j = 0; j < current_users.length; j++) {
        if (new_username.toLowerCase() === current_users[j].toLowerCase()) {
            username_exist = true;
            break;
        }
    }
    if (username_exist) {
        console.log("username ".concat(new_username, " is already in use"));
    }
    else {
        console.log("username ".concat(new_username, " is available"));
    }
}
// 33. Ordinal Numbers
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var k;
for (k = 0; k < num.length; k++) {
    var ordinal_num = num[k];
    if (ordinal_num == 1) {
        console.log(ordinal_num + "st");
    }
    if (ordinal_num == 2) {
        console.log(ordinal_num + "nd");
    }
    if (ordinal_num == 3) {
        console.log(ordinal_num + "rd");
    }
    if (ordinal_num > 3) {
        console.log(ordinal_num + "th");
    }
}
// 34. Pizzas
var pizzas = ["Fajita Pizza", "Afghani Pizza", "Peproni Pizza"];
var l;
for (l = 0; l < pizzas.length; l++) {
    console.log("I like " + pizzas[l]);
}
console.log("Pizza is a Delicious fast food ");
// 35. Animals
var animals = ["Elephants", "Cows", "Deers"];
var n;
for (n = 0; n < animals.length; n++) {
    console.log("All The " + animals[n] + " are Mamals");
}
console.log("These all Animals are Mamals");
// 36. T-Shirt
function make_shirt(size, message6) {
    if (size === void 0) { size = ""; }
    if (message6 === void 0) { message6 = ""; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message6));
}
make_shirt("Medium", "ERROR...");
// 37. Large Shirts
function make_shirt_2(size2, message7) {
    if (size2 === void 0) { size2 = "Large"; }
    if (message7 === void 0) { message7 = "I love Typescrpit"; }
    console.log("Shirt size: ".concat(size2, ", Message: ").concat(message7));
}
make_shirt_2();
make_shirt_2("medium");
make_shirt_2("small", "I love coding");
// 38. Cities
function describe_cities(city, country) {
    if (city === void 0) { city = ""; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is the city of ").concat(country));
}
describe_cities("Karachi");
describe_cities("Lahore");
describe_cities("Istambol", "Turkey");
// 39. City Names
function city_country(cit, count) {
    if (cit === void 0) { cit = ""; }
    if (count === void 0) { count = ""; }
    return ("\"".concat(cit, "\",\"").concat(count, "\""));
}
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Hyderabad", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
// 40. Album
function make_album(artist, albumtitle, numtrack) {
    if (artist === void 0) { artist = ""; }
    if (albumtitle === void 0) { albumtitle = ""; }
    if (numtrack === void 0) { numtrack = null; }
    var albuminfo = {
        artist: artist,
        albumtitle: albumtitle,
    };
    if (numtrack !== null) {
        albuminfo.numtrack = numtrack;
    }
    return albuminfo;
}
var album1 = make_album("Atif Aslam", "Meri Kahani");
var album2 = make_album("Ali Zafar", "Masty", 12);
var album3 = make_album("Atif Aslam", "Jal Pari", 32);
console.log(album1);
console.log(album2);
console.log(album3);
// 41. Magicians
var magicians = ["David Copperfield", "Ricky Jay", "David Blaine", "Doug Henning"];
function show_magician(magicianarray) {
    console.log("Magicians:");
    magicianarray.forEach(function (magician) {
        console.log(magician);
    });
}
show_magician(magicians);
// 42. Great Magicians
function make_great(magicianarray1) {
    console.log("List of magicians:");
    magicianarray1.forEach(function (magician1) {
        console.log("Great " + magician1);
    });
}
make_great(magicians);
// 43. Unchanged Magicians
make_great(magicians);
show_magician(magicians);
// 44. Sandwiches
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich items:");
    items.forEach(function (item) {
        console.log("".concat(item));
    });
}
sandwich("Chicken", "Cheese", "Tomato");
sandwich("Mayo", "Garlic");
sandwich("Chicken");
// 45. Cars
function cars_info(manifacturer, model) {
    if (manifacturer === void 0) { manifacturer = ""; }
    if (model === void 0) { model = ""; }
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manifacturer: manifacturer,
        model: model,
    };
    for (var u = 0; u < options.length; u = u + 2) {
        var key = options[u];
        var feature = options[u + 1];
        car[key] = feature;
    }
    console.log(car);
    return (car);
}
cars_info("BMW", "X7", "color", "pearl white", "year", 2021);
