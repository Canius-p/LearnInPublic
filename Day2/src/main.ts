type one = string;
type two = number | string;
// let a:one = 12

let d = <one>'nabin';
let e = <string>'nabin';

let k = <string | number>'nabin';
const addorConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') {
    return a + b;
  }
  return `${a}${b}`;
};
//telling typescript that  we know it will return a string
let myVal: string = addorConcat(2, 2, 'concat') as string;

// 10 as string;
10 as unknown as string;
//not recommended
