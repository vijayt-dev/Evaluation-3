/*
2. How would you create all permutations of a string?
*/

const string = "ABC".split("");
const permutation = [];
const finalPermutation = [];
for(let i in string){
    const copyString =  Array.of(...string);
    const swapCharacter = string[0];
    const swapCharacterIndex = 0;
    const popChar = copyString.splice(i,1,swapCharacter);
    copyString.splice(swapCharacterIndex,1,...popChar);
    permutation.push(copyString);
}
for(let i = 0; i < permutation.length; i++){
  swap(permutation[i]);
}

function swap(arr){
  for(let getFirstIndex = 1; getFirstIndex < arr.length - 1; getFirstIndex++){
    const count = getFirstIndex;
    for (let index = 1; index < arr.length ; index++){
      const copyString = Array.of(...arr);
      const swapCharacter = copyString[count];
      const swapCharacterIndex = count;
      const popChar = copyString.splice(index,1,swapCharacter);
      copyString.splice(swapCharacterIndex,1,...popChar);
      finalPermutation.push(copyString.join(""));
    }
  }
}
console.log(finalPermutation);

