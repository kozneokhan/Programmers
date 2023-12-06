// n => 이동할 원반의 갯수 
// a => 원반이 위치한 기둥 번호 
// b => 목적지 기둥 번호
// c => 경유할 기둥

 function solution(n) {
   const answer = [];

   function hanoi(n, a, b, c) {
     // 원반이 1개일 경우 목적지로 이동
     if (n === 1) {
       answer.push([a, c]);
       return;
     }

     // n-1개의 원반을 경유지로 이동
     hanoi(n - 1, a, c, b);

     // 가장 큰 원반을 목적지로 이동
     answer.push([a, c]);

     // n-1개의 원반을 경유지에서 목적지로 이동
     hanoi(n - 1, b, a, c);
   }

   hanoi(n, 1, 2, 3);
   return answer;
 }

// function solution(n, from = 1, by = 2, to = 3) {
//     return (n===1) ? [[from, to]] : [...solution(n-1, from, to, by), ...solution(1, from, by, to), ...solution(n-1, by, from, to)]
// }
