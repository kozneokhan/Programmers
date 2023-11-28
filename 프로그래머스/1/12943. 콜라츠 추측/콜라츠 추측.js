// function solution(num) {
//     let answer = 0;  // 작업 횟수를 기록할 변수

//     while (num !== 1) {
//         if (answer >= 500) {  // 500번 이상 반복하여도 1이 되지 않는 경우
//             return -1;
//         }

//         if (num % 2 === 0) {  // 주어진 수가 짝수인 경우
//             num /= 2;
//         } else {  // 주어진 수가 홀수인 경우
//             num = num * 3 + 1;
//         }

//         answer++;  // 작업 횟수 증가
//     }

//     return answer;  // 작업을 반복한 횟수 반환
// }


function solution(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}