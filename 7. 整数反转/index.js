/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = false;
    const max = Math.pow(2,31) -1;
    const min = -Math.pow(2,31);
    if (x < 0) {
        x = -x;
        flag = true;
    }
    let str = x + '';
    str = str.split('');
    str.reverse();
    str = str.join('');
    str = +str;
    if (flag) {
        str = -str;
        return str < min ? 0 : str
    } else {
        return str > max ? 0 : str
    };
};

let a = -123;
let result = reverse(a);
console.log(result);