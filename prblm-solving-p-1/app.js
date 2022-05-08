//ludu khelai amra kivabe 1-6 sonk print korte pare?
function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//   console.log(getRndNum(1, 6))
// ---------------
// amra amader class ar sokoler name alphabetically sajate pary?
const names = ["bablu","ablu","zablu","pablu"]
// remind : array.sort main array take change kore fele
// console.log(names.sort())
//----------------
// amra amder class ar sokoler name roll krome sajate pari?
const rolls = [2,9,1,3,6,4,8,5]
// console.log(rolls.sort((a,b)=>{return a-b}))
//---------------
// kono sal leap year ki na count kora jabe?
const isLeapYear=(year)=>{
    if(year % 400 ===0 || ((year%4===0)&&(year%100!==0))){
        console.log(year, 'is leap year')
    }else{
        console.log(year,'is not leap year')
    }
}
// isLeapYear(2028)
//--------------
// kono sentence a kotogula vowel ase taha nirnoy kora jabe?
const vowels = ['a','e','i','o','u']
const countVowel=(sentence)=>{
    let count=0;
    const letters = Array.from(sentence)
       letters.forEach((value)=>{
           if(vowels.includes(value)){
               count++;
           }
       })
       return count
}
// console.log(countVowel('i love bangladesh'))
//--------------
// kono array theke duplicate num gula kivabe ber kore ante pari
// const numbers=[1,2,4,4,2,6,7,6]
// const duplicate = numbers.filter((value,index,array)=>{
//     return array.indexOf(value) !== index
// })
// console.log(duplicate)
//------------------
// kono array theke unique num gula kivabe ber kore ante pari
// const number=[1,2,4,4,2,6,7,6]
// const unique = number.filter((value,index,array)=>{
//     return array.indexOf(value) === index
// })
// console.log(unique)
//------------------
const number=[1,2,4,4,2,6,7,6]
const unique = number.filter((value,index,array)=>{
    return value
})
console.log(unique)