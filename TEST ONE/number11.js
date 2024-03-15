function splitStringIntoWords(str) {
    // splitting the string into an array of words
    return str.split(/\s+/);
}

let sentence = "Hello people, this is my first  string test!";
let wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray);
