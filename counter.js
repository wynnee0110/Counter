const increase  = document.getElementById("increase");
const countLabel =  document.getElementById("countLabel");
const decrease = document.getElementById("decrease");
const start = document.getElementById("start");

let count = 0;


increase.onclick = function() {
 count++;
 countLabel.textContent = count;
}

decrease.onclick = function (){
count--;
countLabel.textContent = count;
}

start.onclick = function () {
count = 0;
countLabel.textContent = count;
}

