var btns = document.querySelectorAll(".drum");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            console.log(buttonInnerHTML);
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;  

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

            default:
                console.log(buttonInnerHTML);
                break;
        }
    }

function handleKeyClick(event) {
    var buttonInnerHTML = event.key;
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            console.log(buttonInnerHTML);
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;  

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            console.log(buttonInnerHTML);
            break;      

            default:
                console.log(buttonInnerHTML);
                break;
        }
    }
    
document.addEventListener("keydown", handleKeyClick);