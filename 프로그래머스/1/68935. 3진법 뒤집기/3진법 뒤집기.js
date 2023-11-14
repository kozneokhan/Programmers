function solution(n) {
    var answer = 0;
    let i = n
    // 1. 주어진 자연수 n을 3진법으로 변환
    const a = n.toString(3);
    // 2. 3진법으로 변환된 숫자를 앞뒤로 뒤집기
    const b = a.split("").reverse().join('');
    // 3. 뒤집힌 3진법 숫자를 다시 10진법으로 변환 
    const c = parseInt(b, 3);
    // 4. 변환된 10진법 숫자를 반환
    return c;
}

// 순서 
// 1. 주어진 자연수 n을 3진법으로 변환
// 2. 3진법으로 변환된 숫자를 앞뒤로 뒤집기
// 3. 뒤집힌 3진법 숫자를 다시 10진법으로 변환 
// 4. 변환된 10진법 숫자를 반환