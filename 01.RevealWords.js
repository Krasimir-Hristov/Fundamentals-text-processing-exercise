function solve(words, text){
let wordsArr = words.split(`, `);


for(let word of wordsArr){
   
    text = text.replace(`*`.repeat(word.length), word);
}


console.log(text);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages')