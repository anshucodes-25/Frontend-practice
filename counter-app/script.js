
let h1 = document.getElementById("count");
count = 0;

function Decrease(){
    count--;
    h1.textContent = count;
}

function reset(){
    count = 0;
    h1.textContent = count;
}

function Increase(){
    count++;
    h1.textContent = count;
}
