function solution(num) {
    var answer = '';
    if(num % 2 === 0) {
        answer = "Even";
    } else {
        answer = "Odd";
    }
    return answer;
}

// if(num%2 ==1){
//   홀수
// }

// // 삼항연산자를 이용한 풀이
// function solution(num) {
//     return (num % 2 === 0? "Even":"Odd")
// }