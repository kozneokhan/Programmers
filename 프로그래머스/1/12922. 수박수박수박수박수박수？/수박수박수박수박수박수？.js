function solution(n) {
    var answer = '';
    for(let i = 1; i <= n; i++) {
        i % 2 === 1 ? answer += "수" : answer += "박"
    }
    return answer;
}

//const  solution = n => "수박".repeat(n).slice(0,n);