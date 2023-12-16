function solution(n, m) {
    // 최대공약수 계산
    function gcd(a, b) {
        for (let i = Math.min(a, b); i > 0; i--) {
            if (a % i === 0 && b % i === 0) {
                return i;
            }
        }
        return 1; // 1은 모든 수의 공약수이므로 최소값으로 설정
    }

    // 최소공배수 계산
    function lcm(a, b) {
        for (let i = Math.max(a, b); ; i += Math.max(a, b)) {
            if (i % a === 0 && i % b === 0) {
                return i;
            }
        }
    }

    // 결과 배열에 최대공약수와 최소공배수 추가
    const gcdResult = gcd(n, m);
    const lcmResult = lcm(n, m);

    return [gcdResult, lcmResult];
}