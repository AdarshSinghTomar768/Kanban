var add = document.querySelector("#add");
var container = document.querySelector("#cont");
var contvisible = false;
var main = document.querySelector("#main");
add.addEventListener("click", function() {
    if(!contvisible){
        container.style.display = "flex";
        contvisible = true;
    }
    else
    {
        container.style.display = "none";
        contvisible = false;
    }
})
var colourselector = "Red";
var list = document.querySelectorAll(".priority");
for (let i = 0;i<list.length;i++){
    list[i].addEventListener("click", function(){
        document.querySelector("#"+colourselector).classList.remove("active");
        list[i].classList.add("active");
        colourselector = list[i].id;
    })
}
function generateTicket(task,color){
    var ticketcont = document.createElement("div");
    ticketcont.className = `box ${color}`;
    ticketcont.innerHTML = `<div class="title">HTML</div>
                            <div class="content">${task}</div>
                            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`
    main.appendChild(ticketcont);    
}

// generateTicket("kdygfde", "Red")
var textarea= document.querySelector("#txt");
textarea.addEventListener("keydown", function(e){
    let keyname = e.key;
    if(keyname === "Enter"){
        if(txt.value == ""){
            txt.value = "";
            alert("Plese enter the task")
            return
        }
        else{
            generateTicket(txt.value, "red")
            txt.value = "";
            container.style.display = "none";
            contvisible = false;
        }
    }
})

var del = document.querySelector("#delete")
let isDelEnabled = false;
del.addEventListener("click" function(){
    if (!isDelEnabled){
        isDelEnabled.style.color = "red"
        isDelEnabled = "True"
    }
    else{
        isDelEnabled = "false";
        isDelEnabled.style.color = "white";
    }
})
