function solution(n) {
  const answer = [];

  function hanoi(n, a, b, c) {
    // 원반이 1개일 경우 목적지로 이동
    if (n === 1) {
      answer.push([a, c]);
      return;
    }

    // n-1개의 원반을 경유지로 이동
    hanoi(n - 1, a, c, b);

    // 가장 큰 원반을 목적지로 이동
    answer.push([a, c]);

    // n-1개의 원반을 경유지에서 목적지로 이동
    hanoi(n - 1, b, a, c);
  }

  hanoi(n, 1, 2, 3);
  return answer;
}