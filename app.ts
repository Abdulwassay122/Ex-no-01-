
// Date:2/17/2024
// Name:Abdul Wassay

//  01 Personal message
let person_name = "wassay"
console.log("Hellow " + person_name + " Did you want to learn Typesript today")
//above program makes a message to person 

// 3. Name Cases
let person_name2 = "Wassay"
console.log(person_name2.toUpperCase())
console.log(person_name2.toLowerCase())
console.log(person_name2)
//Above Program shows a variable in Uppercase, Lowercase and Titlecase 

// 4. Famous Quote
console.log(`Allama Iqbal once said,"Nations are born in the hearts of poets, they prosper and die in the hands of politicians."`)

// 5. Famous Quote 2
let famous_person = "Allama Iqbal"
let message = `"Nations are born in the hearts of poets, they prosper and die in the hands of politicians."`
console.log(famous_person + " once said," + message)

// 6. Stripping Names
let person_name3 = "    Ali   "
console.log(person_name3)
console.log(person_name3.trim())

// 7. Number Eight
console.log(4 + 4)
console.log(12 - 4)
console.log(4 * 2)
console.log(64 / 8)

// 9. Favorite Number
let fav_no = 9
console.log("My favorate number is " + fav_no)

// 11. Names
let friends_names = ["Orhan", "Allauddin", "Salahuddin", "Boran"]
console.log(friends_names[0])
console.log(friends_names[1])
console.log(friends_names[2])
console.log(friends_names[3])

// 12. Greetings
let friends_names1 = ["Orhan", "Allauddin", "Salahuddin", "Boran"]
let message2 = "Hellow "
console.log(message2 + friends_names1[0])
console.log(message2 + friends_names1[1])
console.log(message2 + friends_names1[2])
console.log(message2 + friends_names1[3])

// 13. Your Own Array
let transport = ["Car", "Bike", "Airplane",]
console.log("I like to Own new " + transport[0])
console.log("I want to Own new super " + transport[1])
console.log("I want to travel in Emarates " + transport[2])

// 14. Guest List
let guests = ["Imran", "Irfan", "Ikram"]
let message3 = ",I would like to invite you to dinner tomorrow "
console.log(guests[0] + message3)
console.log(guests[1] + message3)
console.log(guests[2] + message3)

// 15.Changing Guest List
let prints = ['Irfan']
guests[1] = "Shani"
console.log(guests[0] + message3)
console.log(guests[1] + message3)
console.log(guests[2] + message3)

// 16. More Guests
guests.unshift("Imam")
guests.splice(2, 0, "Inzamam")
guests.push("Irdogan")
console.log(guests[0] + message3)
console.log(guests[1] + message3)
console.log(guests[2] + message3)
console.log(guests[3] + message3)
console.log(guests[4] + message3)
console.log(guests[5] + message3)

// 17. Shrinking Guest List
console.log("you can invite only two people for dinner.")
let message4 = ",I am sorry I can’t invite you to dinner."
let message5 = ",You are still invited"
console.log(guests[5] + message4)
guests.pop()
console.log(guests[4] + message4)
guests.pop()
console.log(guests[3] + message4)
guests.pop()
console.log(guests[2] + message4)
guests.pop()
console.log(guests[0] + message5)
console.log(guests[1] + message5)
guests.pop()
guests.pop()
console.log(guests)

// 18. Seeing the World
let locations = ["Hunza", "Skardu", "Amazon", "Masaimara", "TajMahal"]
console.log(locations)
console.log(locations.sort())
console.log(locations)
console.log(locations.reverse())
console.log(locations.reverse())
console.log(locations.sort())
console.log(locations.reverse())

// 19. Dinner Guests
console.log("I am inviting two people to dinner")

// 20.
let pslteams = ["Karachi Kings", "Multan Sultan", "Peshawar Zalmi", "Queta Gladiators", "Lahore Qalanders", "Islamabad United"]
console.log("List of PSL teams:")
for (let i = 0; i < pslteams.length; i++) {
    console.log(pslteams[i])
}

// 21.
let language = "Javascript"
Array.from(language)
console.log(typeof language)
console.log( language)

// 22. Intentional Error
// let locations1 = ["Hunza" "Skardu", "Amazon", "Masaimara", "TajMahal"]
// console.log(locations1)

// 23. Conditional Tests

let obj_1 = "Pencil"
console.log("Is obj_1 == 'Pencil'? I predict true")
console.log(obj_1 == "Pencil")
let obj_2 = "Pen"
console.log("Is obj_2 == 'Pen'? I predict true")
console.log(obj_2 == "Pen")
let obj_3 = "box"
console.log("Is obj_3 == 'boox'? I predict false")
console.log(obj_3 == "boox")
let obj_4 = "book"
console.log("Is obj_4 == 'book'? I predict true")
console.log(obj_4 == "book")
let obj_5 = "fox"
console.log("Is obj_5 == 'boox'? I predict false")
console.log(obj_5 == "boox")
let obj_6 = "wolf"
console.log("Is obj_6 == 'wolf'? I predict true")
console.log(obj_6 == "wolf")
let obj_7 = "table"
console.log("Is obj_7 == 'tabble'? I predict false")
console.log(obj_7 == "tabble")
let obj_8 = "chair"
console.log("Is obj_8 == 'chaiir'? I predict false")
console.log(obj_8 == "chaiir")
let obj_9 = "false"
console.log("Is obj_9 == 'false'? I predict true")
console.log(obj_9 == "false")
let obj_10 = "ball"
console.log("Is obj_10 == 'boll'? I predict false")
console.log(obj_10 == "boll")

//24. More Conditional Tests

// Tests for equality and inequality with strings
let str_1 = "wing"
let str_2 = "king"
console.log(str_1===str_1)//true
console.log(str_1===str_2)//false
console.log(str_1!==str_2)//true
console.log(str_2!==str_2)//false

// Tests using the lower case function
let str_3 = "HI"
let str_4 = "hi"
console.log(str_3.toLowerCase() === str_4)//true
console.log(str_3 === str_4)//false
console.log(str_3 === str_4.toUpperCase())//true
console.log(str_3 === str_4)//false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let eq_1 = 5
let eq_2 = 10 
console.log(eq_1===eq_1)//true
console.log(eq_1!==eq_1)//false
console.log(eq_1 < eq_2)//true
console.log(eq_1 > eq_2)//false
console.log(eq_1 <= eq_2)//true
console.log(eq_2 <= eq_1)//false

//  Tests using "and" and "or" operators
let eq_3 = 7
let eq_4 = 14
let eq_5 = 9
let eq_6 = 11
console.log((eq_3 < eq_4)&&(eq_5 < eq_6))//true
console.log((eq_3 < eq_4)&&(eq_5 > eq_6))//false
console.log((eq_3 < eq_4)||(eq_5 < eq_6))//true
console.log((eq_3 > eq_4)||(eq_5 > eq_6))//false

// Test whether an item is in a array
let car = ["Suzuki","Mitsubishi","Lexus"]
console.log(car.includes("Mitsubishi"))//true
console.log(car.includes("BMW"))//false

// Test whether an item is not in a array
let mobile = ["Samsung","Apple","Gpixel"]
console.log(!mobile.includes("Oppo"))//true
console.log(!mobile.includes("Apple"))//false


// 25. Alien Colors #1
let alien_color = "green"
if(alien_color == "green"){
    console.log("You earned 5 points")
}

// 26. Alien Colors #2

if(alien_color == "green"){
    console.log("You earned 5 points")
}
else {
    console.log("You earned 10 points")
}

// 27. Alien Colors #3
if(alien_color == "green"){
    console.log("You earned 5 points")
}
else if(alien_color == "yellow"){
    console.log("You earned 10 points")
}
else if(alien_color == "red"){
    console.log("You earned 15 points")
}

// 28. Stages of Life
let age = 17
if(age < 2){
    console.log("You are Baby")
}
else if(age == 2 || age < 4){
    console.log("You are a Toddler")
}
else if(age == 4 || age < 13){
    console.log("You are a Kid")
}
else if(age == 13 || age < 20){
    console.log("You are a Teenager")
}
else if(age == 20 || age < 65){
    console.log("You are an adult")
}
else if(age >= 65){
    console.log("You are an adult")
}

// 29. Favorite Fruit
let favorate_fruits = ["Banana","Watermelon","Dates"]
if(favorate_fruits.includes("Banana")){
    console.log("You Really like Bananas!")
}
if(favorate_fruits.includes("Mango")){
    console.log("You Really like Mangos!")
}
if(favorate_fruits.includes("Watermelon")){
    console.log("You Really like Watermeelon!")
}
if(favorate_fruits.includes("Apple")){
    console.log("You Really like Apple!")
}
if(favorate_fruits.includes("Dates")){
    console.log("You Really like Dates!")
}

// 30. Hello Admin
let username = ["admin","Ali","Abdullah","Umer","Amir"]
username.forEach(username=>{
    if(username=="admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`${username} thank you for logging in again.`)
    }
})

// 31. No Users
let username2 = [""]
username2.forEach(username2=>{
    
    if(username2==""){
        console.log("We need to find some users!")
    }
})

// 32. Checking Usernames
let current_users = ["Akbar","David","Hashim","Ali","Asghar"]
let new_users = ["David","Joseph","Stokes","Hashim","Rizwan"]
let i
let j
for(i=0; i<new_users.length; i++ ){
    let new_username = new_users[i]
    let username_exist = false
    for(j = 0;j<current_users.length; j++){
     if(new_username.toLowerCase()===current_users[j].toLowerCase()){
        username_exist = true
        break; 
     }
    }
    if(username_exist){
        console.log(`username ${new_username} is already in use`)
    }
    else{
        console.log(`username ${new_username} is available`)
    }
}

// 33. Ordinal Numbers
let num = [1,2,3,4,5,6,7,8,9]
let k
for(k=0; k < num.length; k++){
    let ordinal_num = num[k]
    if(ordinal_num == 1){
        console.log(ordinal_num+"st")
    }
    if(ordinal_num == 2){
        console.log(ordinal_num+"nd")
    }
    if(ordinal_num == 3){
        console.log(ordinal_num+"rd")
    }
    if(ordinal_num>3){
        console.log(ordinal_num+"th")
    }
}

// 34. Pizzas

let pizzas = ["Fajita Pizza","Afghani Pizza","Peproni Pizza"]
let l
for(l=0;l < pizzas.length; l++){
    console.log("I like "+pizzas[l])
    
} 
console.log("Pizza is a Delicious fast food ")


// 35. Animals
let animals = ["Elephants","Cows","Deers"]
let n
for(n=0; n < animals.length ; n++){
    console.log("All The "+ animals[n] +" are Mamals")
}
console.log("These all Animals are Mamals")


// 36. T-Shirt
function make_shirt(size="",message6=""){
    console.log(`Shirt size: ${size}, Message: ${message6}`)
}
make_shirt("Medium","ERROR...")

// 37. Large Shirts
function make_shirt_2(size2 = "Large", message7 = "I love Typescrpit"){
    console.log(`Shirt size: ${size2}, Message: ${message7}`)
}
make_shirt_2()
make_shirt_2("medium")
make_shirt_2("small","I love coding")

// 38. Cities
function describe_cities(city="", country="Pakistan"){
    console.log(`${city} is the city of ${country}`)
}
describe_cities("Karachi")
describe_cities("Lahore")
describe_cities("Istambol","Turkey")


// 39. City Names
function city_country(cit="",count=""){
    return(`"${cit}","${count}"`)
} 
console.log(city_country("Multan","Pakistan"))
console.log(city_country("Hyderabad","Pakistan"))
console.log(city_country("Tokyo","Japan"))


// 40. Album
function make_album(artist="" , albumtitle=""  , numtrack= null){
    const albuminfo = {
        artist: artist,
        albumtitle: albumtitle,
        
    }  

    if(numtrack !== null){
        albuminfo.numtrack = numtrack
    }
    
    return albuminfo

}

let album1 = make_album("Atif Aslam","Meri Kahani")
let album2 = make_album("Ali Zafar","Masty", 12)
let album3 = make_album("Atif Aslam","Jal Pari", 32)

console.log(album1)
console.log(album2)
console.log(album3)

// 41. Magicians
let magicians = ["David Copperfield","Ricky Jay","David Blaine","Doug Henning"]
function show_magician(magicianarray){
    console.log("Magicians:")

    magicianarray.forEach(function (magician){
        console.log(magician)
    })
}
show_magician(magicians)

// 42. Great Magicians

function make_great(magicianarray1){
    console.log("List of magicians:")

    magicianarray1.forEach(function(magician1){
        console.log("Great " + magician1)
    })
}
make_great(magicians)

// 43. Unchanged Magicians

make_great(magicians)

show_magician(magicians)

// 44. Sandwiches
function sandwich(...items){
    console.log("Sandwich items:")

    items.forEach(function(item){
        console.log(`${item}`)
    })

}
sandwich("Chicken", "Cheese","Tomato" )
sandwich("Mayo","Garlic")
sandwich("Chicken")


// 45. Cars

function cars_info(manifacturer="",model="",...options){

    let car = {
        manifacturer: manifacturer,
        model: model,
    }

    for(let u = 0;u < options.length; u=u+2 ){

        let key = options[u]
        let feature = options[u+1]
        car[key] = feature
    }

    console.log(car)

    return(car)

}
cars_info("BMW","X7","color","pearl white","year",2021)