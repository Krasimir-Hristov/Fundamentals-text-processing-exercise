function solve(text){
let textArr = text.split(`\\`)
let arrOfLast = textArr.pop().split(`.`)
let fileExtention = arrOfLast.pop();
let fileName = arrOfLast.pop();
console.log(`File name: ${fileName}`);
console.log(`File extension: ${fileExtention}`)
}
solve('C:\\Internal\\training-internal\\Template.pptx')