const btn = document.querySelector("#btngame")
let player1;
let player2;


btn.addEventListener("click",function(e){
    e.preventDefault()
 player1 = document.querySelector("#player1").value
 player2 = document.querySelector("#player2").value
document.querySelector('form').classList.toggle("form")
console.log(player1,player2);
})


///
let start = "X";
let arr = Array(9).fill(null)

function checkWinner(){
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]))
        { 
        if(start == "X") {
            document.write(`Winner is ${player1}`)
        } else {
            document.write(`Winner is ${player2}`)
        }
        } 
    if(!arr.some((e) => e === null)){
        document.write("Draw!!")
        return;
    }
}

function handleClick(el){
const id = Number(el.id);
if(arr[id] !== null) return;
arr[id] = start;
el.innerText = start;
checkWinner()
if(start === 'X'){
    start = '0';
}else{
    start = 'X';
}

console.log(arr);

    
}