// let display = document.getElementById('display');
// selector
const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
const keys = document.querySelectorAll(".button");

// eventlistener
keys.forEach(key=>{
    key.addEventListener("click", calculate);
})

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="C"){
        operation.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        operation.style.animation = "";
        return;
    }

    if(buttonText === "←"){
        operation.textContent = operation.textContent.substr(0,operation.textContent.length-1);
        return;
    }

    if(buttonText==="="){
        result.innerText = eval(operation.innerText);
        result.style.animation = "big 0.3s ease-in-out";
        operation.style.animation = "small 0.3s ease-in-out";
        result.style.animationFillMode = "forwards";
        operation.style.animationFillMode = "forwards";
        return;
    }

    else{
        operation.textContent += buttonText;
        return;
    }
}










// let input = Array.from(document.getElementsByClassName('button'));

// input.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });