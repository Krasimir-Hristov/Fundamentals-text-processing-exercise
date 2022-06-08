function solve(input){
let result = [];
let inputL = input.length
for(let i = 0; i < inputL; i ++){
    let firstChar = input[i];
    let secondChar = input[i + 1]
    if(firstChar != secondChar){
        result.push(firstChar)
    }
}
console.log(result.join(``))

}
solve('aaaaabbbbbcdddeeeedssaa')