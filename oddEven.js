// function odd(number) {
//     if (number % 2 != 0) {
//         return true
//     }
//     return false;
// }
// const myOddNumber = odd(9);
// console.log('is it odd number:', myOddNumber);

// // even number

// function even(number) {
//     if (number % 2 == 0) {
//         return true
//     }
//     return false;
// }
// const myEvenNumber = even(10);
// console.log('is it even number:', myEvenNumber);

function evenList(number) {
    let even = 0;
    while (even < number) {
        even = even + 2;

        console.log(even)
    }
}
const myEven = evenList(100);
