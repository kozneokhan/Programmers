function solution(n) {
    var answer = 0;
    return Number(String(n).split("").sort((a,b) => b - a).join(""))
    return answer;
}

// function solution(n) {
//   const newN = n + "";
//   const newArr = newN
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//   return +newArr;
// }