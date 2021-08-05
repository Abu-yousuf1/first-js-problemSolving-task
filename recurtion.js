
function recursion(number) {
    if (number == 0) {
        return;
    }
    console.log(number);
    debugger;
    recursion(number - 1)
}
const myRecur = recursion(5);


