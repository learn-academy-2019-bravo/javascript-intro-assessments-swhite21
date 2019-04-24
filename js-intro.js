// // Intro to Javascript Assessments
// // var a = 5;
// // var b = 10;
// // console.log(`Fifteen is ${a + b} and
// // not ${2 * a + b}.`);
// // Consider this variable:
//
// var mantra = "Be the dev";
//
// // 1. Write the code that returns 'B' from mantra.
// console.log(mantra.charAt(0));
// // 2. Write the code that determines if there is a 'x' in mantra.
// function txtSrchX(word){
//   if(word.includes("x")){
//     return `${word} includes x`
//   }else{
//     return `${word} does not include x`
//   }
// }
// console.log(txtSrchX(mantra));
// // 3. Write the code that determines if there is a 'v' in mantra.
// function txtSrchV(word){
//   if(word.includes("v")){
//     return `${word} includes v`
//   }else{
//     return `${word} does not include v`
//   }
// }
// console.log(txtSrchV(mantra));
// // Stretch: Write the code that returns the position of 'v' in mantra.
// function vSearch(word){
//   let indexOfV = word.indexOf("v")
//   return `letter v located at index ${indexOfV} of ${word}`
// }
// console.log(vSearch(mantra));
// // Consider the following statement:
//
// var codingIsEasy = 5
// var imBored = 5
//
// if (codingIsEasy && imBored) {
//     console.log("I need more!")
// } else {
//     console.log("Steady as she goes")
// }
//
// // 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
//
// // Consider the following statement:
//
// var imLost = false
// var imFrustrated = false
//
// if (imLost || imFrustrated) {
//     console.log('Break time!')
// } else {
//     console.log('Keep coding!')
// }
//
// // 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
//
// // 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
// function strIterate(word){
//   for(let i = 0; i < word.length; i++){
//     console.log((word.charAt(i)))
//   }return "";
// }
// console.log(strIterate(mantra));
// // Stretch: Using a while loop.
// function strIterateWhile(word){
//   let i = 0
//   while(i <= word.length){
//     console.log((word.charAt(i)));
//     i++
//   }return "";
// }
// console.log(strIterateWhile(mantra));
//
// // Super Stretch: Using forEach().
// var wordArr = mantra.split("")
//
//
//
// function printToConsole(item){
//   console.log(item)
// }
// (wordArr.forEach(printToConsole))
// // Consider the following variable:
//
// var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
var dirtyWord = "this string has vowels"

function vowelRemoval(string){
  if( typeof string != "string"){
    return "ERROR  a input is not string"
  }

  let stringArr = string.split("");
  stringArr.forEach(vowelCheck)

  function vowelCheck(item){
    let vowels = ["a","e","i","o","u"]

    if(vowels.includes(item)== false){
    console.log(item)}
  }
  return "function returned"
}
console.log(vowelRemoval(dirtyWord));

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
function catFilter(animalArr){
  let kittyCatArr = []
  for(let i = 0; i< animalArr.length; i++){
    if (animalArr[i].animal == "cat"){
      kittyCatArr.push(animalArr[i].name)
    }else{
    }
  }return kittyCatArr
}console.log(catFilter(toonimals));
