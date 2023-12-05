function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }

    // 배열에서 최솟값 찾기
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // 최솟값을 제외한 새로운 배열 생성
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            result.push(arr[i]);
        }
    }

    return result.length > 0 ? result : [-1];
}

// function solution(arr) {
//     if (arr.length <= 1) {
//         return [-1];
//     }

//     // 배열에서 최솟값 찾기
//     const min = Math.min(...arr);

//     // 최솟값을 제외한 새로운 배열 생성
//     const result = arr.filter(num => num !== min);

//     return result.length > 0 ? result : [-1];
// }
