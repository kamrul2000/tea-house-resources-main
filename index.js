/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    if(s.toLowerCase() === 'iiii'){
        return "Invalid input"
    }
   const romanToIntMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);

// console.log(romanToIntMap.get("I"));


    let ans = 0;
    let v1, v2;
    for (let i = 0; i < s.length; i++) {
            v1 = romanToIntMap.get(s[i]);
            v2 = romanToIntMap.get(s[i + 1]);
            if (v1 < v2) {
                ans = ans - v1;
            }
            else {
                ans = ans + v1
            }
        }
        return ans;
};
console.log(romanToInt("IIII"))
console.log(romanToInt("IV"))