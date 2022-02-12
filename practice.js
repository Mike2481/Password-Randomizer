var selected = [];

if (selectUpperCase){
    selected = selected.concat(upperCase);
}

if (selectedLowerCase){
    selected = selected.concat(lowerCase);
}

if (selectedSpecialCharacters){
    selected = selected.concat(specialCharacters);
}

if (selectedNumbers){
    selected = selected.concat(numbers);
}





var animal = "dog"
var animals = ["dog", "cat", "elephant", "tiger"]

for (var i = 0; i< animals.length; i++){
    console.log(animals[i])
}


var pet = [
    {
    name: "Charlie",
    weight: "40 pounds"
}, {
    name: "Bob",
    weight: "20 pounds"
}
]


//DOM MANIPULATION

//1. Create the Element

var h1El = document.createElement("h1");
//2. Give element text SVGTextContentElement
h1El.textContent = "HEllo"

//3. Assign attributes, classes, styling etc

h1El.setAttribute("class", "h1Class");
imgElement.setAttribute("src", "./assets/images/image.jpg")
aElement.setAttribute("href", "google.com")
h1El.style.color = "blue";

//Append to the page
var parent = document.querySelector(".parent");
parent.append(h1El)

//LocalStorage

localStorage.setItem("key", "value");
localStorage.getItem("key")

//you can only use string in local storage

var storeMe = [8, 6, 4, 9]
localStorage.setItem("key", JSON.stringify(storeMe));
JSON.parse(localStorage.getItem("key"));