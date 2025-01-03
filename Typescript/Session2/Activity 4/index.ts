/*
JS Function to reverse an array:

function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
*/

//Write a typescript program to reverse an array of numbers

// function reverseArray(array: number[]): number[] {
//     const reversedArray: number[] = [];
//     for (let i: number = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
//     return reversedArray;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArray<T>(array: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i: number = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d", "e"];
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(["One", "Two", "Three", "Four", "Five"]));

console.log(reverseArray<number>(numbers));

console.log(reverseArray<string>(strings));