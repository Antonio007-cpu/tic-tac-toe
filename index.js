const boxes=Array.from(document.getElementsByClassName('box'))
console.log(boxes)

const drawBoard=()=>{
    boxes.forEach((box,index) => {
        let styleStr = ''
        if (index < 3){
            styleStr += `border-bottom: 2px solid var(--navy);`
        }
        if(index % 3 == 0){
            styleStr += `border-right: 2px solid var(--navy);`
        }
        if(index % 3 == 2){
            styleStr += `border-left: 2px solid var(--navy);`
        }
        if(index > 5){
            styleStr += `border-top: 2px solid var(--navy);`
        }
        box.style=styleStr
    });
}

drawBoard()