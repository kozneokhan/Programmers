// function solution(n) {
//     let nStr = n.toString().split("").map(Number)
//     let sum = 0;

//     for (let i = 0; i < nStr.length; i++) {
//         sum += nStr[i]
//     }

//     return sum
// }

// reduce 사용방법
function solution(n) {
    return String(n) // 주어진 숫자를 문자열로 변환
        .split("") // 각 자릿수를 배열로 분리
        .reduce((acc, curr) => acc + Number(curr), 0); // 각 자릿수를 순회하며 총합 계산
}

