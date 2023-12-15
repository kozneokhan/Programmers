// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const [n, m] = data.trim().split(" ").map(Number);

//     for (let i = 0; i < m; i++) {
//         let row = '';
//         for (let j = 0; j < n; j++) {
//             row += '*';
//         }
//         console.log(row);
//     }
// });

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((('*').repeat(a)+`\n`).repeat(b))
});