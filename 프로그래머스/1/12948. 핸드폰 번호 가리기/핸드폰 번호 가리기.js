function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.length-4; i++) {
         answer += "*";
    }
      answer += phone_number.slice(-4);
    return answer;
}



// const solution = n => [...n].fill("*",0,n.length-4).join("")