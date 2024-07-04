//importing index.html for common 

let heads = document.head
fetch('/public/HTML/index.html')
.then(res=>res.text())
.then(data=>{
    heads.innerHTML += data;
})

let nav = document.querySelector(".home-header")
fetch('/public/HTML/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML += data;
})