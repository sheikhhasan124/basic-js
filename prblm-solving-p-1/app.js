//ludu khelai amra kivabe 1-6 sonk print korte pare?
function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//   console.log(getRndNum(1, 6))
  
// amra amader class ar sokoler name alphabetically sajate pary?
const names = ["bablu","ablu","zablu","pablu"]
// remind : array.sort main array take change kore fele
console.log(names.sort())