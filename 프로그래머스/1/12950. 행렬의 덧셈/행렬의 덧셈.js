// function solution(arr1, arr2) {
//     // 결과를 저장할 빈 행렬 생성
//     let answer = [];
    
//     // 행렬의 행 수와 열 수 구하기
//     let rows = arr1.length;
//     let cols = arr1[0].length;
    
//     // 각 위치의 원소를 더해서 새로운 행렬에 추가
//     for (let i = 0; i < rows; i++) {
//         let row = [];
//         for (let j = 0; j < cols; j++) {
//             row.push(arr1[i][j] + arr2[i][j]);
//         }
//         answer.push(row);
//     }
    
//     return answer;
// }
function solution(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}
