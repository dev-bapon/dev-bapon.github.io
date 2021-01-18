
// sidebar menu 
let sidebar=document.getElementById('sidebar');
let times=document.getElementById('times');
let sidemenu=document.getElementById('sidemenu');

sidebar.onclick=function(){
    // console.log(sidebar.value);
    // sidemenu.style.background='green';
    sidemenu.classList.toggle('sidemenu-show');
}

times.onclick=function(){
    // console.log(times);
    sidemenu.classList.toggle('sidemenu-show');
}

// sidemenu.onclick=function(){
//     // console.log(times);
//     sidemenu.classList.toggle('sidemenu-show');
// }

// sidebar.onclick(function(){
//    
// })