const tg = document.getElementById("tg")
const container = document.getElementById("container")

tg.addEventListener("click", function(){
    if(container.style.backgroundColor === "white"){
        container.style.backgroundColor = "rgb(26,35,45)"}

        else{
            container.style.backgroundColor = "white"
        }
})