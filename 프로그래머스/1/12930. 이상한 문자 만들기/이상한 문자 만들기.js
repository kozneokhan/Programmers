function solution(s) {
    var answer = '';

    // 주어진 문자열을 공백을 기준으로 나누기
    var words = s.split(' ');

    // 각 단어에 대해 처리
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            // 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 변환
            if (j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }

        // 단어 사이에 공백 추가
        if (i < words.length - 1) {
            answer += ' ';
        }
    }

    return answer;
}
