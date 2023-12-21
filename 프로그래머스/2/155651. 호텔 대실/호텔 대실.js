function solution(book_time) {

    // 객실 예약을 저장할 배열
    const room = [];

    // 최소 객실 수
    let Rooms = 0;

    // 현재 예약 시간과 겹치는 객실을 찾음
        const overRoom = room.find;

        if (overRoom !== undefined) {
            // 겹치는 객실이 있으면 해당 객실을 사용하고 업데이트 
           room[room.indexOf(overRoom)] = end + 10;
        } else {
            // 겹치는 객실이 없으면 새로운 객실을 예약하고 최소 객실 수 증가
            Rooms++;
        }
    }

    return Rooms;
}