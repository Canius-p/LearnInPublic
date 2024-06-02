"use strict";
// let a:one = 12
let d = 'nabin';
let e = 'nabin';
let k = 'nabin';
const addorConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return `${a}${b}`;
};
//telling typescript that  we know it will return a string
let myVal = addorConcat(2, 2, 'concat');
// 10 as string;
10;
//not recommended
