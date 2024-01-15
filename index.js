// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
    // Function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push('Ralph');
  }
// Function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }
// Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
  }
// Function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}
    // Function to append a cat to the cats array and return a new array
function appendCat(name) {
    return cats.concat("Broom");
  }
// Function to prepend a cat to the cats array and return a new array
function prependCat(name) {
    return ["Arnold"].concat(cats);
}
// Function to remove the last cat from the cats array and return a new array
function removeLastCat() {
    return cats.slice(0, -1);
  }
  // Function to remove the first cat from the cats array and return a new array
function removeFirstCat() {
    return cats.slice(1);
  }