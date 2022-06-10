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
    const tie="Tie"

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

    function handleResult(){
        let won=false
        for (let i=0;i<=7)
    }





    const Announce=(type)=>{
        switch(type){
            case PlayerX_Won:
                announce.innerHTML="Player<span class='playerX'></span> Won"
                break
            case Computer_Won:
                announce.innerHTML="Computer<span class='computer'></span> Won"
                break
            case tie:
                announce.innerHTML='Tie'
        }
        announce.classList.remove('hide')
    }

    const changePlayer=()=>{
        playerDisplay.classList.remove('player${currentPlayer')
        currentPlayer=currentPlayer==='X'?'O':'X'
        playerDisplay.innerText=currentPlayer
        playerDisplay.classList.add('player${currentPlayer}')
    }

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