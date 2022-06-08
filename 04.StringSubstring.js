function solve(word, str){
 str =   str.toLowerCase().split(` `)
    if(str.includes(word)){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
 }
}
solve('javascript',
'javascript is The best programming language')