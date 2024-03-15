var brand = "mala-practica";
let counter = 100;
const token = "abc123";


console.log(token)
counter = 200;
console.log(counter);

//comentario de una linea 

/* comentario de varias lineas
asafafafaf
afafa */

//interpolación

let interpolación = `el valor de counter es ${counter}`;
console.log(interpolación);
console.log("el valor de counter es: ", counter);
console.log("el valor de counter es: " + counter);

const persons = [
    [{
        "first_name": "Lila",
        "last_name": "Bonds",
        "age": 26
      }, {
        "first_name": "Janifer",
        "last_name": "Mesant",
        "age": 28
      }, {
        "first_name": "Agnes",
        "last_name": "Lorenz",
        "age": 43
      }, {
        "first_name": "Selestina",
        "last_name": "Bartoszewski",
        "age": 18
      }, {
        "first_name": "Debbi",
        "last_name": "Barnsdale",
        "age": 43
      }, {
        "first_name": "Cosetta",
        "last_name": "Sibbering",
        "age": 58
      }, {
        "first_name": "Allyn",
        "last_name": "Sodory",
        "age": 33
      }, {
        "first_name": "Andee",
        "last_name": "Dowsing",
        "age": 44
      }, {
        "first_name": "Virginie",
        "last_name": "MacKomb",
        "age": 47
      }, {
        "first_name": "Rianon",
        "last_name": "Baggot",
        "age": 37
      }, {
        "first_name": "Juan",
        "last_name": "Menier",
        "age": 69
      }, {
        "first_name": "Tiffie",
        "last_name": "Hurry",
        "age": 32
      }, {
        "first_name": "Darryl",
        "last_name": "Bonnet",
        "age": 55
      }, {
        "first_name": "Margarita",
        "last_name": "Werny",
        "age": 64
      }, {
        "first_name": "Marylin",
        "last_name": "Monnoyer",
        "age": 38
      }, {
        "first_name": "Ellen",
        "last_name": "Kobu",
        "age": 62
      }, {
        "first_name": "Constance",
        "last_name": "Sodeau",
        "age": 19
      }, {
        "first_name": "Clarence",
        "last_name": "Kerr",
        "age": 36
      }, {
        "first_name": "Davy",
        "last_name": "Totterdell",
        "age": 80
      }, {
        "first_name": "Marijn",
        "last_name": "Bohin",
        "age": 64
      }]

];

console.table(persons);
