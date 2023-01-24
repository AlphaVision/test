// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//TASK: Count how many times the word BANANA can be written within a string S

let stillSatisfyCondition = false;

function solution(S) {
    // Implement your solution here
    console.log(`string ${S} length ${S.length}`);
    // hello
    let searchFor = ["B", "N", "A"];

    for (let i = 1; i < 4; i++) {
        for (j = 0; j < i; j++) {
            S = S.replace(searchFor[i - 1], "");
        }
    }



    console.log(`string ${S} length ${S.length}`);

    for (let letter of searchFor) {
        stillSatisfyCondition = stillSatisfyConditionS.test();
    }

    if (stillSatisfyCondition === true) {
        solution(S);
    }
}