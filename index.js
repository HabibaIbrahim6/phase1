let box = new Array(10).fill(''); // تخزين حالة اللعبة
let turn = 'X'; // اللاعب الأول

function game(id) {
    let cell = document.getElementById(id);

    if (cell.innerHTML === '') {  // تأكد أن المربع فارغ
        cell.innerHTML = turn;  // ضع "X" أو "O"
        console.log(تم الضغط على ${id} ووضع ${turn}); // طباعة الحركة في الـ Console
        
        turn = (turn === 'X') ? 'O' : 'X';  // تبديل الدور
        winner(); // التحقق من الفائز بعد كل حركة
    }
}

function winner() {
    // تحديث القيم في المصفوفة box[]
    for (let i = 1; i <= 9; i++) {
        box[i] = document.getElementById('index' + i).innerHTML;
    }

    // جميع حالات الفوز الممكنة
    let winPatterns = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],  // صفوف
        [1, 4, 7], [2, 5, 8], [3, 6, 9],  // أعمدة
        [1, 5, 9], [3, 5, 7]              // أقطار
    ];

    // التحقق من الفوز
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (box[a] && box[a] === box[b] && box[a] === box[c]) {
            console.log(${box[a]} هو الفائز!);
            alert(${box[a]} Wins! 🎉);
            resetGame();
            return;
        }
    }
}

// إعادة تعيين اللوحة
function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById('index' + i).innerHTML = '';
    }
    turn = 'X';
    console.clear(); // مسح الكونسول عند إعادة التشغيل
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