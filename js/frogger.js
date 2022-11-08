function game (){
const timeLeftDis = document.querySelector("#time-left");
const resultDis = document.querySelector("#result");
const spButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

console.log(squares)
let cIndex = 76
const width = 9 
let currentTime = 20
let timerId
let wlTimerId 

// first attempt chicken sprite :D save me lord
// const chickenSprite = new Image();
// chickenSprite.src = "Chicken.webp"


    function moveChicken(e){
        squares[cIndex].classList.remove("chicken",)
            switch(e.key){
                case 'a':
                // console.log("move left")  <--- helped in the begining to make sure it was working 
                if (cIndex % width !== 0) cIndex -= 1
                break
                    case 'd':
                    // console.log("move right") <--- helped in the begining to make sure it was working 
                    if (cIndex % width < width - 1) cIndex += 1
                    break
                        case 'w':
                        // console.log("move up") <--- helped in the begining to make sure it was working 
                        if(cIndex - width >= 0)cIndex -= width
                        break
                            case 's':
                            // console.log("move down")   <--- helped in the begining to make sure it was working 
                            if (cIndex + width < width * width)cIndex += width
                            break
        }

        squares[cIndex].classList.add("chicken")
    }



function autoMoveElements(){
    currentTime--
    timeLeftDis.textContent = currentTime
    logsLeft.forEach(logsLeft => moveLogLeft(logsLeft))
    logsRight.forEach(logsRight => moveLogRight(logsRight))
    carsLeft.forEach(carsLeft => moveCarLeft(carsLeft))
    carsRight.forEach(carsRight => moveCarRight(carsRight))
}

function wlOutComes(){
    lose()
    win()
}


function moveLogLeft(logsLeft){
    switch(true){
        case logsLeft.classList.contains("l1"):
             logsLeft.classList.remove("l1")
             logsLeft.classList.add("l5")
             break
             case logsLeft.classList.contains("l2"):
             logsLeft.classList.remove("l2")
             logsLeft.classList.add("l1")
             break
             case logsLeft.classList.contains("l3"):
             logsLeft.classList.remove("l3")
             logsLeft.classList.add("l2")
             break
             case logsLeft.classList.contains("l4"):
             logsLeft.classList.remove("l4")
             logsLeft.classList.add("l3")
             break
             case logsLeft.classList.contains("l5"):
             logsLeft.classList.remove("l5")
             logsLeft.classList.add("l4")
             break
    }
}

function moveLogRight(logsRight){
    switch(true){
        case logsRight.classList.contains("l1"):
             logsRight.classList.remove("l1")
             logsRight.classList.add("l2")
             break
             case logsRight.classList.contains("l2"):
             logsRight.classList.remove("l2")
             logsRight.classList.add("l3")
             break
             case logsRight.classList.contains("l3"):
             logsRight.classList.remove("l3")
             logsRight.classList.add("l4")
             break
             case logsRight.classList.contains("l4"):
             logsRight.classList.remove("l4")
             logsRight.classList.add("l5")
             break
             case logsRight.classList.contains("l5"):
             logsRight.classList.remove("l5")
             logsRight.classList.add("l1")
             break
    }
}

function moveCarLeft(carsLeft){
    switch(true){
        case carsLeft.classList.contains("c1"):
             carsLeft.classList.remove("c1")
             carsLeft.classList.add("c2")
             break
             case carsLeft.classList.contains("c2"):
             carsLeft.classList.remove("c2")
             carsLeft.classList.add("c3")
             break
             case carsLeft.classList.contains("c3"):
             carsLeft.classList.remove("c3")
             carsLeft.classList.add("c1")
             break
    }
}

function moveCarRight(carsRight){
    switch(true){
        case carsRight.classList.contains("c1"):
             carsRight.classList.remove("c1")
             carsRight.classList.add("c3")
             break
             case carsRight.classList.contains("c2"):
             carsRight.classList.remove("c2")
             carsRight.classList.add("c1")
             break
             case carsRight.classList.contains("c3"):
             carsRight.classList.remove("c3")
             carsRight.classList.add("c2")
             break
    }
}

function lose (){
    if (
        squares [cIndex].classList.contains("c1")||
        squares [cIndex].classList.contains("l4") ||
        squares [cIndex].classList.contains("l5") ||
        currentTime <= 0
    ){
        resultDis.textContent = " The chicken didn't make it across the road, YOU LOSE! "
        clearInterval(timerId)
        clearInterval(wlTimerId)
        squares[cIndex].classList.remove("chicken")
        document.removeEventListener("keyup", moveChicken)
    }
}

function win () {
    if (squares[cIndex].classList.contains("winning-block")) {
        resultDis.textContent = "Chicken has crossed the road , YOU WIN!"
        clearInterval(timerId)
        clearInterval(wlTimerId)
        document.removeEventListener("keyup", moveChicken)
    }
}

spButton.addEventListener ("click",() => {
    if (timerId) {
        clearInterval(timerId)
        clearInterval(wlTimerId)
        wlTimerId= null
        timerId = null
        document.removeEventListener("keyup", moveChicken)
    } else {
        timerId = setInterval(autoMoveElements, 1000)
        wlTimerId = setInterval(wlOutComes, 50)
        document.addEventListener("keyup", moveChicken)
    }
})
}
game()





// first try on making the reset button

reset = document.getElementById("reset").onclick = function() {
    if (reset) {
        // console.log("reset + if");
        timerId = null;
        clearInterval(timerId);
        wlTimerId= null;
        clearInterval(wlTimerId);
        // document.removeEventListener("keyup", moveChicken);
        console.log(game());
    } else {
        // console.log("reset + else")
        // timerId = setInterval(autoMoveElements, 1000)
        // wlTimerId = setInterval(wlOutComes, 50)
        // document.addEventListener("keyup", moveChicken)
    }
} 




// game()
  // else {
//         timerId = setInterval(autoMoveElements, 1000)
//         wlTimerId = setInterval(wlOutComes, 50)
//         document.addEventListener("keyup", moveChicken)
//     }
    
    
    
    
//     game()
//     