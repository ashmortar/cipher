var sentence = prompt("Please write a sentence:");

console.log(sentence);

// return fist and last letter capitalized/

//var newSentence = function() {
//  console.log(sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length -1).toUpperCase());

//};

//newSentence();

//last and first letter capitalized

//var newSentence2 = function() {
//  console.log(sentence.charAt(sentence.length -1).toUpperCase() + sentence.charAt(0).toUpperCase());

//};

//newSentence2();

//pass the same thing through both functions


var cipher = function() {
  var sentence2 = sentence.charAt(sentence.length -1).toUpperCase() + sentence.charAt(0).toUpperCase();
  var sentence3 = sentence.charAt(sentence.length / 2);
  var sentence4 = (sentence3 + sentence + sentence2).split("").reverse().join("");
  console.log(sentence4);
};

cipher();
