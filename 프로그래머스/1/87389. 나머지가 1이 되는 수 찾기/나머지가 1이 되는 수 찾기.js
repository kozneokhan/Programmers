// function solution(n) {
//     for (let i = 1; i < n; i++) {
//         if (n % i === 1) {
//             return i;
//         }
//     }
// }

// 코드 수정 
function solution(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
    return n - 1; // 조건을 만족하는 수가 없을 때, n-1을 반환
}



// n을 x로 나눈 값이 아닌 나머지 남는 숫자가 1이 되도록 하는 가장 작은 자연수 x를 리턴 

// 천재분의 while 풀이법 
// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }

// 천재분의 3항연산자 풀이법
// function solution(n, x = 0) {
//     return n % x === 1 ? x : solution(n, x + 1);
// }