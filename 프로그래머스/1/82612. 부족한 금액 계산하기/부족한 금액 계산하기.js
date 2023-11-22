// function solution(price, money, count) {
//  let totalPrice = 0;
//     for(let i = 0; i<=count; i++){
//         totalPrice += price * i
//     }
//     return money - totalPrice > 0 ? 0: totalPrice - money
// }

// 가격 3 
// 돈 20 
// 탄 횟수 4
// 남은 결과값 10

function solution(price, money, count) {
    // 등차수열의 합 공식을 활용하여 필요한 총 이용 금액 계산
    const totalCost = (count * (count + 1) / 2) * price;

    // 부족한 금액 계산
    const requiredMoney = totalCost - money;

    // 필요한 금액 반환 (부족한 경우에는 음수가 아닌 부족한 금액 반환)
    return requiredMoney > 0 ? requiredMoney : 0;
}