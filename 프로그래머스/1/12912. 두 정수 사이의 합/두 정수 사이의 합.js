 function solution(a, b) {
     var answer = 0;
    
     if (a > b) {
         let temp =a;
         a = b;
         b = temp;
     }
     for (let i = a; i <= b; i++) {
         answer += i;
     }
     return answer;
 }

// function solution(a, b){
//     var result = 0
//     return (a+b) * (Math.abs(a-b)+1) / 2;
// }

// function  solution(a, b, s = 0){
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }