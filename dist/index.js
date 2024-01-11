"use strict";
function getClockAngle(hh_mm) {
    const splitedTime = hh_mm.split(':');
    const minute = parseInt(splitedTime[1]);
    const hour24 = parseInt(splitedTime[0]);
    const hour12 = hour24 >= 12 ? hour24 - 12 : hour24;
    const hourAngle = (hour12 / 12) * 360;
    const minuteAngle = (minute / 60) * 360;
    const clockAngle = Math.abs(hourAngle - minuteAngle);
    const smallerClockAngle = clockAngle > 180 ? (clockAngle - 360) : (clockAngle);
    return Math.round(Math.abs(smallerClockAngle));
}
function getQuestionPart(phrases) {
    let a = phrases[0];
    let b = phrases[1];
    const common = Object.create(null);
    let i, j, part;
    for (i = 0; i < a.length - 1; i++) {
        for (j = i + 1; j <= a.length; j++) {
            part = a.slice(i, j);
            if (b.indexOf(part) !== -1) {
                common[part] = true;
            }
        }
    }
    const commonEl = Object.keys(common);
    const commonWord = (commonEl.sort((a, b) => b.length - a.length))[0];
    const questionPart = phrases.map((word) => {
        if (word.startsWith(commonWord)) {
            return word.slice(commonWord.length).trim();
        }
        return word.slice(0, -(commonWord.length)).trim();
    });
    return questionPart;
}
function quickestPath(board) {
    const maxMove = 6;
    const snakesPos = board.snakes.map(snake => {
        return snake[0];
    });
    let currentPos = 1;
    let diceNumber = 0;
    let results = [];
    for (let i = currentPos; currentPos <= 100; i++) {
        diceNumber += 1;
        currentPos += 1;
        for (const ladder of board.ladders) {
            const [start, end] = ladder;
            if (currentPos === start) {
                currentPos = end;
                results.push(diceNumber);
                diceNumber = 0;
                break;
            }
        }
        if (diceNumber === maxMove || currentPos === 100) {
            if (snakesPos.includes(currentPos)) {
                currentPos -= 1;
                results.push(diceNumber -= 1);
                diceNumber = 0;
            }
            else {
                results.push(diceNumber);
                diceNumber = 0;
            }
        }
    }
    return results;
}
