let heads=document.head;fetch("/public/HTML/index.html").then((e=>e.text())).then((e=>{heads.innerHTML+=e}));let nav=document.querySelector(".home-header");fetch("/public/HTML/navbar.html").then((e=>e.text())).then((e=>{nav.innerHTML+=e}));