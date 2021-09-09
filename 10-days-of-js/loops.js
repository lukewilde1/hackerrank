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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const v = ['a', 'e', 'i', 'o', 'u'];
    const arr = s.split("");
    for (let l in arr) {
        if (v.includes(arr[l])) {
            console.log(arr[l]);
        }
    }
    for (let l in arr) {
        if (!v.includes(arr[l])) {
            console.log(arr[l]);
        }
    }
}

