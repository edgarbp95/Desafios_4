let mobileActive = document.getElementById("mobile_active");

// function myFunction() {

document.getElementById('icon_active').addEventListener('click', function(){
    let desktopActive = document.getElementById("desktop_active");
    if(desktopActive.style.display==="none" && screen.width>="850"){
        desktopActive.style.display="flex";
    }else if (mobileActive.style.display==="none" && screen.width<"850"){
        mobileActive.style.display="flex";
    }
     else {
        desktopActive.style.display = "none";
        mobileActive.style.display = "none";
    }
})

