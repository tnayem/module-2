// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
function reverseArray<T>(arr:T[]):T[]{
   return arr.reverse()
}
const result = reverseArray([10,20,30,40,50,60])
console.log(result)