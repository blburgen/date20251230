let opening = document.getElementById("opening");
let open = document.getElementById("open");
let part1 = document.getElementById("part1");
let part1a = document.getElementById("part1a");
let part1b = document.getElementById("part1b");
let part1c = document.getElementById("part1c");
let flour = document.getElementById("flour");
let cocoa = document.getElementById("cocoa");
let sugar = document.getElementById("sugar");
let soda = document.getElementById("soda");
let powder = document.getElementById("powder");
let gobacktopart1 = document.getElementById("gobacktopart1");
let gotopart2 = document.getElementById("gotopart2");
let gobacktopart2 = document.getElementById("gobacktopart2");
let part2 = document.getElementById("part2");
let part2a = document.getElementById("part2a");
let part2b = document.getElementById("part2b");
let part2c = document.getElementById("part2c");
let gotopart3 = document.getElementById("gotopart3");
let gobacktopart3 = document.getElementById("gobacktopart3");
let part3 = document.getElementById("part3");
let part3a = document.getElementById("part3a");
let part3b = document.getElementById("part3b");
let part3c = document.getElementById("part3c");
let gotopart4 = document.getElementById("gotopart4")
let gobacktopart4 = document.getElementById("gobacktopart4");;
let recipe = document.getElementById("recipe");
let wrong = document.getElementById("wrong");

opening.addEventListener("click",()=>{
    open.classList.add("hidden");
    part1.classList.remove("hidden");
    part1a.classList.remove("hidden");
    recipe.classList.remove("hidden");
    wrong.classList.add("hidden");
});

part1c.addEventListener("click",()=>{
    if(part1b.value.toLowerCase() == "flour"){
        flour.classList.remove("hidden");
        part1a.classList.add("answered")
        wrong.classList.add("hidden");
    }else{
        wrong.classList.remove("hidden");
    }
})

gotopart2.addEventListener("click",()=>{
    part1.classList.add("hidden");
    part1a.classList.add("hidden");
    part2.classList.remove("hidden");
    part2a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

part2c.addEventListener("click",()=>{
    if(part2b.value.toLowerCase() == "cocoa" || part2b.value.toLowerCase() == "chocolate"){
        cocoa.classList.remove("hidden");
        part2a.classList.add("answered")
        wrong.classList.add("hidden");
    }else{
        wrong.classList.remove("hidden");
    }
})

gobacktopart1.addEventListener("click",()=>{
    part2.classList.add("hidden");
    part2a.classList.add("hidden");
    part1.classList.remove("hidden");
    part1a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

gobacktopart2.addEventListener("click",()=>{
    part3.classList.add("hidden");
    part3a.classList.add("hidden");
    part2.classList.remove("hidden");
    part2a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

gotopart3.addEventListener("click",()=>{
    part2.classList.add("hidden");
    part2a.classList.add("hidden");
    part3.classList.remove("hidden");
    part3a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

part3c.addEventListener("click",()=>{
    if(part3b.value.toLowerCase() == "sugar"){
        sugar.classList.remove("hidden");
        part3a.classList.add("answered")
        wrong.classList.add("hidden");
    }else{
        wrong.classList.remove("hidden");
    }
})

gotopart4.addEventListener("click",()=>{
    part3.classList.add("hidden");
    part3a.classList.add("hidden");
    part4.classList.remove("hidden");
    part4a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

gobacktopart3.addEventListener("click",()=>{
    part4.classList.add("hidden");
    part4a.classList.add("hidden");
    part3.classList.remove("hidden");
    part3a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

part4c.addEventListener("click",()=>{
    if(part4b.value.toLowerCase() == "bake" || part4b.value.toLowerCase() == "baking"){
        soda.classList.remove("hidden");
        powder.classList.remove("hidden");
        part4a.classList.add("answered")
        wrong.classList.add("hidden");
    }else{
        wrong.classList.remove("hidden");
    }
})

gotopart5.addEventListener("click",()=>{
    part4.classList.add("hidden");
    part4a.classList.add("hidden");
    part5.classList.remove("hidden");
    part5a.classList.remove("hidden");
    wrong.classList.add("hidden");
});

gobacktopart4.addEventListener("click",()=>{
    part5.classList.add("hidden");
    part5a.classList.add("hidden");
    part4.classList.remove("hidden");
    part4a.classList.remove("hidden");
    wrong.classList.add("hidden");
});