let arrayNames = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arrayNames);
for (let i = 0; i < arrayNames.length; i++) {
    let hälsningsmeddelande = helloThere(arrayNames[i]);
    console.log(hälsningsmeddelande);
}
function helloThere(namn) {
    return "Hej " + namn;
}
let result = helloThere("martin");
console.log(result);
let myObject = {
    word: "Vitte",
    elite: 1337,
    booleans: true
};
console.log(myObject);
