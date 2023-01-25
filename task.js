// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const lettersPool = ["B", "N", "A"];
const txtFx = {
    green: "\x1b[32m",
    cyan: "\x1b[96m",
    yellow: "\x1b[33m",
    underline: "\x1b[4m",
    resetAll: "\x1B[0m"
}

let counter = 0;

function solution(S) {
    // Implement your solution here
    console.log(`${txtFx.underline}Iteration ${counter + 1}${txtFx.resetAll}\n - OLD string [${S}] length (${S.length})`);

    // Search pattern for 3xA, 2xN, 1xB
    const searchPattern = new RegExp('^(?=.*A.*A.*A)(?=.*N.*N)(?=.*B).*$', 'g');

    // End loop when not all letters are preent in the string
    if (!searchPattern.test(S)) {
        console.log(`\n${txtFx.yellow}(i)${txtFx.resetAll} No more matches found`);
        return
    }

    for (let letterIndex = 0; letterIndex < lettersPool.length; letterIndex++) {
        for (repeatCount = 0; repeatCount < letterIndex + 1; repeatCount++) {
            S = S.replace(lettersPool[letterIndex], "");
        }
    }

    counter++;

    console.log(` - NEW string [${S}] length (${S.length})\n\n`);

    solution(S); // repeat
}

// solution("AAKBOKAOKNVJNA9EYRUSI;VBNXBVA=SEUEIASTGBVHXJAHRFTONFLBALYRA[U");
// solution("AAANBN-AAANBN-AAANBN-AAANBN-AAANBN-AAANBN-AAANBN-AAAXBN");
// solution("ABC");
console.log(`\n\n\n${txtFx.cyan+txtFx.underline}FINAL ANSWER${txtFx.resetAll}\n${txtFx.green}\u2714${txtFx.resetAll} 3xA, 2xN, 1xB was found (${counter}) times in the pattern\n\n\n`);