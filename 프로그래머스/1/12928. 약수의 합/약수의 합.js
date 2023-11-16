function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n; i++) {
        if(n % i == 0) {
            answer += i
        }
    }
    return answer;
}


// function solution(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) sum += i
//     }
//     return sum
// }

// 약수 구하면 바로 더하는 로직
// function solution(n) {
//     var answer = 0;
//     let i;
//     for (i = 1; i <= Math.sqrt(n); i++){
//         if (!(n%i)) {
//             answer += (i+n/i);
//         }
//     }
//     i--;
//     return (i === n/i) ? answer-i : answer;
// }