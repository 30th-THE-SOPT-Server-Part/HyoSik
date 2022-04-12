// var : Function Scope
if (true) {
    var x = 'var';
}
console.log(`var : ${x}`);

// let, const : Block Scope
if (true) {
    let y = 'let';
}
// console.log(`let : ${y}`); // ReferenceError 발생


function foo() {
    if (true) {
        var functionScope = 'function Scope';
        console.log('if block - ', functionScope);
        let blockScope = 'block Scope';
        console.log('if block - ', blockScope);
    }
    console.log('function block - ', functionScope);
    // console.log('function block - ', blockScope); // block 밖에서는 에러 발생
}
// console.log('global - ', functionScope); // function 외부에서는 에러 발생
// console.log('global - ', blockScope); // block 밖에서는 에러 발생

foo();