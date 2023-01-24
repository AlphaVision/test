// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let counter = 0;

function solution(S) {
    // Implement your solution here

    console.log(`Iteration ${counter + 1}\n - OLD string [${S}] length (${S.length})`);

    // Search for 3xA, 2xN, 1xB in the remaining string
    const searchPattern = new RegExp('^(?=.*A.*A.*A)(?=.*N.*N)(?=.*B).*$', 'g');
    const isAllLettersPresent = searchPattern.test(S);

    // End loop when not all letters are preent in the string
    if (isAllLettersPresent === false) {
        console.log(`\n(i) No more matches found`);
        return
    }

    let lettersPool = ["B", "N", "A"];

    for (let letterIndex = 0; letterIndex < lettersPool.length; letterIndex++) {
        for (repeatCount = 0; repeatCount < letterIndex + 1; repeatCount++) {
            S = S.replace(lettersPool[letterIndex], "");
        }
    }

    counter++;
    console.log(` - NEW string [${S}] length (${S.length})\n\n`);

    solution(S);
}

// solution("AAKBOKAOKNVJNA9EYRUSI;VBNXBVA=SEUEIASTGBVHXJAHRFTONFLBALYRA[U");
// solution("AAANBN-AAANBN-AAANBN-AAANBN-AAANBN-AAANBN-AAANBN-AAAXBN");
// solution("ABC");
console.log(`\n\n\nFINAL ANSWER\n - 3xA, 2xN, 1xB was found (${counter}) times in the pattern\n\n\n`);