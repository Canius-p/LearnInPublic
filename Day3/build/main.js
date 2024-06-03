"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('hello'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'ecoh' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        };
        if (isObj(arg) && !Object.keys(arg).length) {
            return {
                arg,
                is: false
            };
        }
    }
};
