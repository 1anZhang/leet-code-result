/**
 * @param {string} digits
 * @return {string[]}
 */
Array.prototype.flatMap = function(func) {
    return this.reduce((acc, x) => acc.concat(func(x)), []);
};
const letterCombinations = function(digits) {
    if (!digits) return [];
    const letters = [
        [],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ];
    // JS 的 flatMap 还是个实验特性，迷……
    // return digits.split('').reduce((acc, digit) => letters[digit].flatMap(letter => acc.map(prefix => prefix + letter)), ['']);
    return digits
        .split("")
        .reduce((acc, digit) => {
            console.log('reduce', JSON.stringify(acc), JSON.stringify(digit));
            return letters[digit].map((letter) => acc.map((prefix) => prefix + letter))
        }, [""]);
};

let aaaa = letterCombinations("29");
// console.log(JSON.stringify(aaaa));
