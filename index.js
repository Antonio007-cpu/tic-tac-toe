const boxes=Array.from(document.getElementsByClassName('box'))
const playText=document.getElementById('playText')
const spaces=[null,null,null,null,null,null,null,null,null]
const O_Player='O'
const X_Player='X'
let currentPlayer =X_Player


// console.log(boxes)

const drawBoard=()=>{
    boxes.forEach((box,index) => {
        let styleString = ''
        if (index < 3){
            styleString += `border-bottom: 2px solid var(--navy);`
        }
        if(index % 3 === 0){
            styleString += `border-right: 2px solid var(--navy);`
        }
        if(index % 3 === 2){
            styleString += `border-left: 2px solid var(--navy);`
        }
        if(index > 5){
            styleString += `border-top: 2px solid var(--navy);`
        }
        box.style=styleString
        box.addEventListener('click',boxClicked)
    })
}

const boxClicked=(event)=>{
    const id =event.target.id
    // console.log(id)
    if(!spaces[id]){
        spaces[id]=currentPlayer
        event.target.innerText=currentPlayer

        if (playerWon()){
                playText.innerText=`${currentPlayer} has won the game!`
                return
        }
        currentPlayer=currentPlayer===O_Player ?X_Player:O_Player
    }
  
}

const playerWon=()=>{
    if(spaces[0]===currentPlayer){
        if(spaces[1]===currentPlayer && spaces[2]===currentPlayer){
            console.log(`${currentPlayer} wins up top.`)
            return true
        }

        if(spaces[3]===currentPlayer && spaces[6]===currentPlayer){
            console.log(`${currentPlayer} wins by left.`)
            return true
        }

        if(spaces[4]===currentPlayer && spaces[8]===currentPlayer){
            console.log(`${currentPlayer} wins diagnolly.`)
            return true
        }
        


    }
}
drawBoard()