const screen =document.querySelector(".screen")
const buttons =document.querySelectorAll(".btn")
const equal =document.querySelector(".btn-green")
const clear =document.querySelector(".btn-red")

buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value= e.target.dataset.num;
            screen.value += value
        })
})
equal.addEventListener("click", function(e){
    if (screen.value=== "")
        screen.value==="";
    else{
        let answer = eval(screen.value)
        screen.value=answer;
    }
})

clear.addEventListener("click", function(e){
        screen.value="";
    })