var elForm = document.querySelector(".forms__form");
var elSelect = document.querySelector('.forms__select');
var elInput = document.querySelector(".forms__input")
var elSelectOrder = document.querySelector(".forms__select-ordered");

var elList = document.querySelector('.cards__list');

var pokemonchiki = [];



var pokemonTypes = ["Bug","Dragon","Electric","Grass","Ghost","Ground","Ice",
   "Fire","Fighting","Flying","Normal","Psychic","Rock","Water","Grass"]

for (var i = 0; i < pokemonTypes.length; i++) {
    var option = document.createElement('option');

    option.textContent = pokemonTypes[i];

    elSelect.appendChild(option);
}

// for (var i = 0; i < pokemons.length; i++) {
//     var option = document.createElement('option');

//     option.textContent = pokemons[i].type;

//     elSelect.appendChild(option);
// }


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    console.log(elSelect.value)
    console.log(elInput.value)
    console.log(elSelectOrder.value)
})

function elementCreator(tagName) {
    return document.createElement(tagName);
}
function pokemonCharacters() {

    var item = elementCreator("li");
    var img = document.createElement('img');
    var line = document.createElement('hr');
    var title = document.createElement('h3');
    var type = document.createElement('p');
    var weight = document.createElement('span');
    var height = document.createElement('span');

    img.src = pokemons[i].img;
    title.textContent = pokemons[i].name;
    type.textContent = pokemons[i].type;
    weight.textContent = pokemons[i].weight;
    height.textContent = pokemons[i].height;

    elList.appendChild(item);
    item.appendChild(img);
    item.appendChild(line);
    item.appendChild(title);
    item.appendChild(type);
    item.appendChild(weight);
    item.appendChild(height);
}
for (var i = 0; i < pokemons.length; i++) {
    pokemonCharacters(pokemons[i])
}

// 1 - MASALA

function sumSalaries(total) {

    for (var i = 0; i < salaries.length; i++) {
        for (var j = 0; j < salaries[i].length; j++) {
            sumSalaries(salaries[i].summ)
        }
        var objectSum = salaries[i].summ
        var objectsSum = salaries[j].summ
        var total = objectSum + objectsSum
    }
    return total
}

var salaries = [{ name: "Akmal", summ: 1200 },
{ name: "Karim", summ: 1800 }]

console.log(sumSalaries())


// 2 - MASALA

function highNumber() {
    var number = numberArray[0];

    for (var i = 1; i < numberArray.length; i++) {
        if (number < numberArray[i]) {
            number = numberArray[i]
        }
    }
    return number
}
var numberArray = [102, 24, 201, 333, 34]
var result = highNumber([102, 24, 201, 333, 34])
console.log(result)

var numberArray = [550, 22, 200, 100, 344,]
var result = highNumber([550, 22, 200, 100, 344,])
console.log(result)












































