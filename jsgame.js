let sign = "X";
let disp = document.getElementById("player");




function printx(number) {
    let square = document.getElementById("r"+number); 
    console.log(square);
    onclickSound();
    if(square.innerHTML==""){
    square.innerHTML=sign;
    winner();
    checksign();
    disp.innerHTML =  "<center>" + sign +"'s Turn now" + "</center>";
    }
}

function checksign() {
    if(sign == "X"){
        sign="O";
     } 
    else {
        sign ="X";
    }
}

function getbox(no) {
    return document.getElementById("r"+no).innerHTML;
}

function checkmove(a,b,c,m) {
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m){
        return true;
    }
    else{
        return false;
    }
}

function winner() {
    if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) || checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) || checkmove(1,5,9,sign) || checkmove(7,5,3,sign)){
        disp.innerHTML =  "<center>" + "Congratulations! "+ sign +" Won the game " + "</center>";
        winnerSound();
        celebration();
        for(let i=1; i<=9;i++){
            document.getElementById("r"+i).innerHTML="";
        }
        throw "Game end";

    }
    else{
        if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!=""){
            disp.innerHTML = "<center> It's a Tie! 😅 </center>";
            winnerSound();
            throw " It's a Tie! ";
        }
    }
    
}

function newStart() {
    location.reload()
}

function changeBackground() {

        let background = document.getElementById("body");
        if (background.className === 'first') {

            background.className = 'second';
        }
        else {
            background.className = 'first';
        }
}

function onclickSound() {
    let audio = new Audio('clickSound.wav');
    audio.play();
    confetti.stop();
}

function winnerSound() {
    let audio = new Audio('WinnerSound.wav')
    audio.play();
}

function celebration() {
    confetti.start();
   
    
}