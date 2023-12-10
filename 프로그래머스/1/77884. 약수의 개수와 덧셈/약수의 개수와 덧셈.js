function solution(left, right) {
    var answer = 0;

    for (let num = left; num <= right; num++) {
        let divisorCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisorCount++;
            }
        }

        answer += (divisorCount % 2 === 0) ? +num : -num;
    }

    return answer;
}


// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }