var banner=document.querySelector('.banner');
var menutoggle=document.querySelector('.toggle');
menutoggle.onclick=function(){
    menutoggle.classList.toggle('active');
    banner.classList.toggle('active');
}

