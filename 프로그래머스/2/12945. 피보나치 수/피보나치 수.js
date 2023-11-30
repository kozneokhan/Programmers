function solution(n) {
    const answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        const fibo = answer[i-1]+answer[i-2] 
        answer.push(fibo % 1234567) 
    }
    return answer[n] % 1234567
}