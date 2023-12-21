function solution(book_time) {
  // 시작 시간 순으로 정렬
  book_time.sort();

  // 종료 시간을 저장할 배열
  const room = [];

  // 예약 시간을 하나씩 확인
  for (const time of book_time) {
    // 시작 시간 분리
    const [startHour, startMinute] = time[0].split(":").map(Number);
    const startTime = startHour * 60 + startMinute;

    // 종료 시간 찾기
    let foundRoom = false;
    for (let i = 0; i < room.length; i++) {
      if (room[i] <= startTime) {
        room[i] = getNextTime(time[1]);
        foundRoom = true;
        break;
      }
    }

    // 새로운 방 필요한 경우 추가
    if (!foundRoom) {
      room.push(getNextTime(time[1]));
    }
  }

  // 필요한 최소 객실 수 반환
  return room.length;
}

// 다음 이용 가능 시간 계산 함수
function getNextTime(endTime) {
  const [endHour, endMinute] = endTime.split(":").map(Number);
  return endHour * 60 + endMinute + 10;
}

