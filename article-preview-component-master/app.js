estado = false;

function myFunction() {
    let desktopActive = document.getElementById("desktop_active");
    if(desktopActive.style.display=="none" && screen.width>="850"){
        desktopActive.style.display="flex";
    } else {
        desktopActive.style.display = "none";
    }


}







// $(document).ready(function(){

//     document.getElementById('icon_active').addEventListener('click', function(){
//         document.getElementById('desktop_active')

        
//     })



// })