// 1/4 Question 1/4: clock angle
function getClockAngle (hh_mm:string):number {
    const splitedTime = hh_mm.split(':');
    const minute = parseInt(splitedTime[1]);
    const hour24 = parseInt(splitedTime[0]);
    const hour12 = hour24>=12? hour24-12 : hour24;
    const hourAngle = (hour12 / 12) * 360;
    const minuteAngle = (minute / 60) * 360;
    const clockAngle = Math.abs(hourAngle - minuteAngle);

    const smallerClockAngle = clockAngle>180 ? (
        clockAngle - 360
    ) : (
        clockAngle
    )

    return Math.round(Math.abs(smallerClockAngle))
}

// Question 2/4: Remote Associates Test
function getQuestionPart(phrases:string[]):string[] {
    let a:string = phrases[0];
    let b:string = phrases[1];

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
    const commonEl:string[] = Object.keys(common);
    
    const commonWord:string = (commonEl.sort((a, b) => b.length - a.length))[0]
    const questionPart:string[] = phrases.map((word) => {
        if (word.startsWith(commonWord)) {
            return word.slice(commonWord.length).trim()
        }
        return word.slice(0, -(commonWord.length)).trim()
    })
    
    return questionPart;
}

// Question 3/4: Snakes and Ladders
interface Board {
    ladders: [number, number][];
    snakes: [number, number][];
}
function quickestPath (board:Board):number[] {
    const maxMove:number = 6;
    const snakesPos:number[] = board.snakes.map(snake => {
        return snake[0];
    });
    let currentPos:number = 1;
    let diceNumber:number = 0;
    let results:number[] = [];
    
    for (let i = currentPos; currentPos <= 100; i++) {
        diceNumber += 1;
        currentPos += 1;
        for (const ladder of board.ladders) {
            const [start, end] = ladder;
            if (currentPos === start) {
                currentPos = end;
                results.push(diceNumber)
                diceNumber = 0
                break;
            }
        }
        
        if (diceNumber === maxMove || currentPos === 100) {
            if (snakesPos.includes(currentPos)) {
                currentPos -= 1;
                results.push(diceNumber -= 1);
                diceNumber = 0;
            } else {
                results.push(diceNumber);
                diceNumber = 0;
            } 
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }

    return results
}

// Question 4/4: one dimension trip
function minEnergy (start: number, shops: number[], stations: number[], target: number): number {
    let results:number = 0;

    return results
}