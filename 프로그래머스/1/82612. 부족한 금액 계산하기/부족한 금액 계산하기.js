function solution(price, money, count) {
 let totalPrice = 0;
    for(let i = 0; i<=count; i++){
        totalPrice += price * i
    }
    return money - totalPrice > 0 ? 0: totalPrice - money
}

// 가격 3 
// 돈 20 
// 탄 횟수 4
// 남은 결과값 10