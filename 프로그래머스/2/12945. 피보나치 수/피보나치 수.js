function solution(n) {
    const answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        const fibo = answer[i-1]+answer[i-2] 
        answer.push(fibo % 1234567) 
    }
    return answer[n] % 1234567
}

function solution(n) {
    let [a, b] = [0, 1]; // 초기값 설정: a = 0, b = 1
    while (--n) {        // n이 0이 될 때까지 반복
        [a, b] = [b, (a + b) % 1234567]; // 배열 비구조화 할당을 사용하여 a와 b를 갱신
    }
    return b;            // 최종적으로 n번째 피보나치 수를 1234567로 나눈 나머지 반환
}