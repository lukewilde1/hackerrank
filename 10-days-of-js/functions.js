'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function factorial(n) {
    let fact = 1
    
    if (n === 0) {
        return 1
    } else {
        for (let i = 1; i <= n; i++) {
            fact = i * fact;
        }
    }
    
    return fact;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}