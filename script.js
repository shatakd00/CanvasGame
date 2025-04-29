const myBox = document.getElementById("box");
const moveAmt = 50;
let y = 0;
let x = 0;

document.addEventListener("keydown", (event) => {

    document.addEventListener("keydown", event => {
        myBox.textContent = '😍';
        myBox.style.backgroundColor = 'lightblue';
    });
    
    document.addEventListener("keyup", event => {
        myBox.textContent = '😀';
        myBox.style.backgroundColor = '#f71e50';
    });

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmt;
                break;
            case "ArrowDown":
                y += moveAmt;
                break;
            case "ArrowLeft":
                x -= moveAmt;
                break;
            case "ArrowRight":
                x += moveAmt;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
