export function opponentPick(someNumber) {
    if (someNumber === 3) {
        return 'Boulder';
    }
    if (someNumber === 2) {
        return 'Parchment';
    }
    if (someNumber === 1) {
        return 'Shears';
    }
}


export function rockPaperScissors(userChoice, opponentChoice){
    if (
        (userChoice === 'Boulder' && opponentChoice === 'Shears') || (userChoice === 'Shears' && opponentChoice === 'Parchment') || (userChoice === 'Parchment' && opponentChoice === 'Boulder')
    ) {
        return 'won';
    } else if (userChoice === opponentChoice) {
        return 'tie';
    } else {
        return 'lost';
    }
}