function solution(n) {
    var answer = 0;    
  for(i=0; i<n; i += 1) {
      if(n % i === 1 ) {
          return i
      }
  }
}

// n을 x로 나눈 값이 아닌 나머지 남는 숫자가 1이 되도록 하는 가장 작은 자연수 x를 리턴 