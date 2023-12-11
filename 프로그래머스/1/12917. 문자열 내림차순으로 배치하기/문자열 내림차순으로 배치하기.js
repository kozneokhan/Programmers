function solution(s) {
   return String(s).split("").sort().reverse().join("");
}

// function solution(s) {
//     let answer = [[],[]];
//     for (let i=0; i<s.length; i++) {
//         if(s[i] === s[i].toUpperCase()) {
//             answer[1].push(s[i])
//         } else {
//             answer[0].push(s[i])
//         }
//     }
//     let ans1 = answer[0].sort().reverse().join('');
//     let ans2 = answer[1].sort().reverse().join('');
//     answer = [ans1, ans2].join('')
//     return answer
// }