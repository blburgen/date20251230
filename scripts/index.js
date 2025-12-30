let opening = document.getElementById("opening");
let open = document.getElementById("open");
let part1 = document.getElementById("part1");
let gotopart2 = document.getElementById("gotopart2");
let part2 = document.getElementById("part2");
let gotopart3 = document.getElementById("gotopart3");
let part3 = document.getElementById("part3");
let gotopart4 = document.getElementById("gotopart4");

opening.addEventListener("click",()=>{
    open.classList.add("hidden");
    part1.classList.remove("hidden");
});

gotopart2.addEventListener("click",()=>{
    part1.classList.add("hidden");
    part2.classList.remove("hidden");
});

gotopart3.addEventListener("click",()=>{
    part2.classList.add("hidden");
    part3.classList.remove("hidden");
});

gotopart4.addEventListener("click",()=>{
    part3.classList.add("hidden");
    part4.classList.remove("hidden");
});

gotopart5.addEventListener("click",()=>{
    part4.classList.add("hidden");
    part5.classList.remove("hidden");
});