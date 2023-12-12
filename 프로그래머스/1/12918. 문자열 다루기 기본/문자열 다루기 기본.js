 // function solution(s) {
 //     if (s.length === 4 || s.length === 6) {
 //         for (let i = 0; i < s.length; i++) {
 //             if (isNaN(s[i])) {
 //                return false;
 //             }
 //         }
 //         return true;
 //     } else {
 //         return false;
 //     }
 // }

function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s)
}