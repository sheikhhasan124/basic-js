// remove from an arry
let names = [{name:'hasan'},{name:'alva'},{roll:12}]
let name = names.filter(n=>n.roll !==12)
console.log(name)


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
