let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgConatainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let newGameBtn2 = document.querySelector("#draw-btn")
let msgContainer2 = document.querySelector(".draw-div")
let msg2 = document.querySelector("#draw-msg")


let turnO = true  //player X , player O
let count = 0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turnO = true
    count = 0
    enableBoxes()
    msgConatainer.classList.add("hide")
    msgContainer2.classList.add("hidden")
    
}


boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        
        if(turnO){
            box.innerText = "O"
            box.classList.add("Ocolour")
            turnO = false
        }else{
            box.innerText = "X"
            box.classList.add("Xcolour")
            turnO = true
        }
        count++;
        box.disabled = true

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

        checkWinner()
    })

    const gameDraw = () => {
        msg2.innerText = `Game was a Draw.`;
        msgContainer2.classList.remove("hidden");
        disableBoxes();
      };
}
)

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
        box.classList.remove("Ocolour","Xcolour")
        
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`
    msgConatainer.classList.remove("hide")
    disableBoxes();

}

const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText
        let pos1va2 = boxes[pattern[1]].innerText
        let pos1va3 = boxes[pattern[2]].innerText

        if(pos1val != "" && pos1va2 != "" && pos1va3 != ""){
            if(pos1val === pos1va2 && pos1va2 === pos1va3){
                console.log("Winner", pos1val)
                showWinner(pos1val)
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click",resetGame)
newGameBtn2.addEventListener("click",resetGame)


