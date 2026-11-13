//Skapa en variabel med ditt förnamn och skriv ut den//
let myName: string = "Harri";
console.log(myName);

//Skapa två variabler med varsitt tal och skriv ut summan//
let number1: number = 5;
let number2: number = 10;
console.log(number1 + number2);

//Skriv en if-sats som skriver ut "Stort" om ett tal är större än 10, annars "Litet"//
if (number1 > 10) {
  console.log("Stort");
} else {
  console.log("Litet");
}

//Skriv en loop som skriver ut talen 1 till 5//
for (let index = 1; index <= 5; index++) {
    console.log(index);
}

//Skriv en funktion som tar emot ett tal och returnerar talet gånger två//
function multiplyByTwo(x: number) {
    return (x * 2);
}
console.log(multiplyByTwo(7));


