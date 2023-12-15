process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.trim().split(" ").map(Number);

    for (let i = 0; i < m; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '*';
        }
        console.log(row);
    }
});
