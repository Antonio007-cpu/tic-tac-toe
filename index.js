document.addEventListener('DOMContentLoaded',()=>{
    const tiles =Array.from(document.querySelector('.tile'))
    const playerDisplay=documet.querySelector('.display-palyer')
    const resetButton=document.querySelector('#reset')
    const announce =document.querySelector('.announce')

    let board = ['','','','','','','','','']
    let Player = 'X'
    let gameActive=true

    const PlayerX_Won='PLAYERX_WON'
    const Computer_Won='COMPUTER_WON'

    const winCondition=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const playerAction=(tile,index)=>{
        if(isValidation(tile)&& gameActive){
            tile.innerText = currentPlayer
            tile.classList.add('player${currentPlayer}')
            updateBoard(index)
            handleResult()
            changePlayer()
        }
    }

    tiles.forEach( (tile,index)=> {
        tile.addEventListener('click',()=> playerAction(tile,index()))
    })

    resetButton.addEventListener('click', reset)
});