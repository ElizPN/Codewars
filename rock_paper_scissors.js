const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!"
    }
    let vinnerMessage;
    if (p1 === "scissors") {
        switch (p2) {
            case "paper":
                vinnerMessage = "Player 1 won!"
                break;
            case "rock":
                vinnerMessage = "Player 2 won!"
                break;
            default:
                vinnerMessage = "error"
                break;
        }
    }

    if (p1 === "paper") {
        switch (p2) {
            case "scissors":
                vinnerMessage = "Player 2 won!"
                break;
            case "rock":
                vinnerMessage = "Player 1 won!"
                break;
            default:
                vinnerMessage = "error"
                break;
        }
    }

    if (p1 === "rock") {
        switch (p2) {
            case "scissors":
                vinnerMessage = "Player 1 won!"
                break;
            case "paper":
                vinnerMessage = "Player 2 won!"
                break;
            default:
                vinnerMessage = "error"
                break;
        }
    }


    if (p2 === "scissors") {
        switch (p1) {
            case "paper":
                vinnerMessage = "Player 2 won!"
                break;
            case "rock":
                vinnerMessage = "Player 1 won!"
                break;
            default:
                vinnerMessage = "error"
                break;
        }
    }

    if (p2 === "paper") {
        switch (p1) {
            case "scissors":
                vinnerMessage = "Player 1 won!"
                break;
            case "rock":
                vinnerMessage = "Player 2 won!"
                break;
            default:
                vinnerMessage = "error"
                break;
        }
    }

    if (p2 === "rock") {
        switch (p1) {
            case "scissors":
                vinnerMessage = "Player 2 won!"
                break;
            case "paper":
                vinnerMessage = "Player 1 won!"
                break;
            default:
                vinnerMessage = "error"
                break;
        }
    }
    return vinnerMessage
};

console.log(rps("scissors", "rock"));

//more consice solution

const rps2 = (p1, p2) => {
    const winningMoves = {
        scissors: "rock",
        rock: "paper",
        paper: "scissors",
    };

    if (p1 === p2) {
        return "Draw!";
    }

    if (winningMoves[p1] === p2) {
        return "Player 2 won!";
    } else {
        return "Player 1 won!";
    }
};