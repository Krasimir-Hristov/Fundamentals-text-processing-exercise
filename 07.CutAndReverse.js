function solve(str){
let arrOfStr = str.split(``);
let secondStr = arrOfStr.splice(arrOfStr.length / 2).reverse();
let firstStr = arrOfStr.reverse();
console.log(firstStr.join(``));
console.log(secondStr.join(``));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')