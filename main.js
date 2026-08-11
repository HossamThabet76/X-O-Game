let title=document.querySelector('h2');
let titleMain=document.querySelector('.title');
let squares=document.querySelectorAll('.square');
let button=document.querySelector('button');
let next='X';
let checkWinner =false;
let count=0;
for(let i=0;i<squares.length;i++){
    squares[i].onclick=function(){
        if(checkWinner){
            return;
        }
        if(squares[i].innerHTML==''){
            if(next=='X'){
                title.innerHTML='Next Player Is O';
                squares[i].innerHTML='X';
                next='O';
            }
            else{
                title.innerHTML='Next Player Is X';
                squares[i].innerHTML='O';
                next='X';
            }
            count++;
        }
        winner(squares);
        if(count==9 && !checkWinner){
            title.innerHTML='Try Again';
            titleMain.style.background='red';
            button.style.display='inline-block';
        }
    } 
}
function winner(state){
    let line=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    for(let i=0;i<line.length;i++){
        let [a,b,c]=line[i];
        if(squares[a].innerHTML!='' &&squares[a].innerHTML==squares[b].innerHTML && squares[a].innerHTML==squares[c].innerHTML){
            title.innerHTML='Winner Is ' + squares[a].innerHTML;
            titleMain.style.background='green';
            checkWinner =true;
            squares[a].style.background='green';
            squares[b].style.background='green';
            squares[c].style.background='green';
            button.style.display='inline-block';
        }
    }
}
button.onclick=function(){
    location.reload();
}