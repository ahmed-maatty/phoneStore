const list = document.querySelector(".nav-items");
const mnu = document.getElementById("menu");

mnu.addEventListener("click", () => {
    showmenu ()
});



let turnoff = document.getElementsByClassName("nav-item");

for(let i = 0 ; i < turnoff.length ; i++){
    turnoff[i].addEventListener('click', () => {
        showmenu ()
    })
};


function showmenu () {
    mnu.classList.toggle("is-active");
    list.classList.toggle("is-active");
};


let div = document.getElementById("up")

window.onscroll = function () {
    if(this.scrollY >= 600){
        div.classList.add("show")
    }else{
        div.classList.remove("show")
    }
}

function  ToUp(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

div.addEventListener("click",() => {
    ToUp()
})