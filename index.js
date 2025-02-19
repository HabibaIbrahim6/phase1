let box = [];

let turn = 'X'; 

function game(id) {
    let cell = document.getElementById(id);

    if (cell.innerHTML === '') {
        cell.innerHTML = turn; 
        turn = (turn === 'X') ? 'O' : 'X';
    }
}
function winner(){
    for(let i= 1 ;i<=9;i++){
        box[i] = document.getElementById('index'+i).innerHTML;
    }
    if(box[1] == box[2] && box[2]==box[3] && box[1]!=''){

        
    }
    else if(box[4] == box[5] && box[5]==box[6] && box[4]!=''){

    }
    else if(box[7] == box[8] && box[8]==box[9] && box[7]!=''){

    }
    else if(box[1] == box[4] && box[4]==box[7] && box[7]!=''){

    }
    else if(box[2] == box[5] && box[5]==box[8] && box[8]!=''){

    }
    else if(box[3] == box[6] && box[6]==box[9] && box[3]!=''){

    }
    else if(box[1] == box[5] && box[5]==box[9] && box[1]!=''){

    }
    else if(box[3] == box[5] && box[5]==box[7] && box[3]!=''){

    }

}
// let role = 'X';
// ===function BoardGame(){
//     for(let  i= 1; i<10;i++){
//         box[i] = document.getElementById('index'+i);
//         console.log(box[i]);
//     }
// }
    


// document.getElementsByClassName("index").addEventListener("click" , function(){
//     let str= document.getElementById();
//     if(role==='X'){
//         str.innerHTML = 'X';
//         str = 'O'
//     }

// });

// BoardGame();
// function boardgame(char, array) {
//     console.log("Character chosen:", char);
//     console.log("Game board:");
//     console.table(array);
// }

// let userChar = prompt("Please choose x or o:");  
// while (userChar !== "x" && userChar !== "o") {
//     userChar = prompt("Invalid choice! Please choose x or o:");
// }

// let board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ];

// boardgame(userChar, board);