function solution(n) {
    var answer = 0;
    for(let i = 1; i*i<=n; i++) {
        answer = (i*i === n) ? (i+1)**2 : -1;
    }
    return answer;
}