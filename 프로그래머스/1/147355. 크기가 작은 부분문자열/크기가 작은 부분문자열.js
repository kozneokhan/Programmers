function solution(t, p) {
    var answer = 0;

    // t의 길이와 p의 길이 계산
    var tLen = t.length;
    var pLen = p.length;

    // t에서 p와 같은 길이의 부분 문자열을 추출하여 비교
    for (var i = 0; i <= tLen - pLen; i++) {
        var substring = t.substr(i, pLen);
        var substringNum = parseInt(substring);
        var pNum = parseInt(p);

        // 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 경우 카운트 증가
        if (substringNum <= pNum) {
            answer++;
        }
    }

    return answer;
}