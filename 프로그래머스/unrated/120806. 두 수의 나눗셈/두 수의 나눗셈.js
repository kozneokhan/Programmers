function solution(num1, num2) {
    var answer = 0;
    //answer = parseInt(num1/num2*1000)
    //answer = Math.floor(num1/num2*1000)
    answer = ~~(num1/num2*1000)
    return answer;
}