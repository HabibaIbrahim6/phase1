let box = [];
let turn = 'X';
let heade = document.querySelector("h1"); 
let button = document.querySelector(".button1");

function game(id) {
    let cell = document.getElementById(id);

    if (cell.innerHTML === '') {
        cell.innerHTML = turn;
        turn = (turn === 'X') ? 'O' : 'X';
        winner(); 
    }
}

function winner() {
    for (let i = 1; i <= 9; i++) {
        box[i] = document.getElementById('index' + i).innerHTML;
    }
    if (box[1] == box[2] && box[2] == box[3] && box[1] != '') {
        heade.innerHTML = `${box[1]} wins!`;  
        document.getElementById('index1').classList.add('win-animation');
        document.getElementById('index2').classList.add('win-animation');
        document.getElementById('index3').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[4] == box[5] && box[5] == box[6] && box[5] != '') {
        heade.innerHTML = `${box[4]} wins!`;
        document.getElementById('index4').classList.add('win-animation');
        document.getElementById('index5').classList.add('win-animation');
          document.getElementById('index6').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[7] == box[8] && box[8] == box[9] && box[7] != '') {
        heade.innerHTML = `${box[7]} wins!`;
        document.getElementById('index7').classList.add('win-animation');
        document.getElementById('index8').classList.add('win-animation');
          document.getElementById('index9').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[1] == box[4] && box[4] == box[7] && box[7] != '') {
        heade.innerHTML = `${box[1]} wins!`;
        document.getElementById('index1').classList.add('win-animation');
        document.getElementById('index4').classList.add('win-animation');
          document.getElementById('index7').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[2] == box[5] && box[5] == box[8] && box[2] != '') {
        heade.innerHTML = `${box[2]} wins!`;
        document.getElementById('index2').classList.add('win-animation');
        document.getElementById('index5').classList.add('win-animation');
          document.getElementById('index8').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[3] == box[6] && box[6] == box[9] && box[3] != '') {
        heade.innerHTML = `${box[3]} wins!`;
        document.getElementById('index3').classList.add('win-animation');
        document.getElementById('index6').classList.add('win-animation');
          document.getElementById('index9').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[1] == box[5] && box[5] == box[9] && box[9] != '') {
        heade.innerHTML = `${box[1]} wins!`;
        document.getElementById('index1').classList.add('win-animation');
        document.getElementById('index5').classList.add('win-animation');
          document.getElementById('index9').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else if (box[3] == box[5] && box[5] == box[7] && box[5] != '') {
        heade.innerHTML = `${box[3]} wins!`;
        document.getElementById('index3').classList.add('win-animation');
        document.getElementById('index5').classList.add('win-animation');
          document.getElementById('index7').classList.add('win-animation');
        setTimeout(function(){location.reload()},3000);
    }
    else {
        count = 0;
        for (let i = 1; i <= 9; i++) {
            if (box[i] !== '') {
                count++;
            }
        }

        if (count === 9) {
            heade.innerHTML = `It's a draw!`;
            setTimeout(function(){location.reload()},3000);
        }
    }


}
button.addEventListener("click", function() {
    setTimeout(function() {
        location.reload();
    }, 0);
});
