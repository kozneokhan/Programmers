function solution(arr) {
    var answer = 0;
    for(let i = 0; i<=arr.length-1; i++) {
        answer += arr[i]
    }
    answer = answer/arr.length;
    return answer;
}