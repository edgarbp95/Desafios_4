let estado = false;

// function myFunction() {

document.getElementById('icon_active').addEventListener('click', function(){
    let desktopActive = document.querySelector(".desktop_share");
    let mobileActive = document.querySelector(".mobile_share");
    if(estado==false && screen.width>="850"){
        desktopActive.style.display="flex";
        estado=true;
    }else if (estado==false && screen.width<"850"){
        mobileActive.style.display="flex";
        estado=true;
            document.querySelector('.mobile_share_icon').addEventListener('click', function(){
              mobileActive.style.display = "none";  
              estado=false;
            })
    }
     else {
        desktopActive.style.display = "none";
        mobileActive.style.display = "none";
        estado=false;
    }
})

