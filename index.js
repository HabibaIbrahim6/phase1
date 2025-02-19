function boardgame(char, array) {
    console.log("Character chosen:", char);
    console.log("Game board:");
    console.table(array);
}

let userChar = prompt("Please choose x or o:");  
while (userChar !== "x" && userChar !== "o") {
    userChar = prompt("Invalid choice! Please choose x or o:");
}

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

boardgame(userChar, board);
