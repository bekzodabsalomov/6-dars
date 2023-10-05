const titleEl = document.getElementById("title")
const image1 = document.querySelector("#image1")
const image2 = document.querySelector("#image2")
const body = document.querySelector(".card")


const randomN1 = Math.trunc(Math.random() * 6) + 1 ;
const randomN2 = Math.trunc(Math.random() * 6) + 1 ;

image1.src = `./image-${randomN1}.png`
image2.src = `./image-${randomN2}.png`



if(randomN1 > randomN2){
    titleEl.textContent = "Player 1 Win !" ;
    body.style.background = "purple" ;
} else if(randomN1 < randomN2) {
    titleEl.textContent = "Player 2 Win !"
    body.style.background = "green" ;
} else{
    titleEl.textContent = "Draw" ;  
    body.style.background =
    "Linear-gradient(to right green , purple)" ;
-