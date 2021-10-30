var slideIndex = 1;

showSlides(1,1)
showSlides(1,2)
showSlides(1,3)



function plusSlides (n, project_num){
    showSlides(slideIndex+=n, project_num)
}

function showSlides (n, project_num){
    console.log("THE SLIDE INDEX 1")
    console.log(slideIndex)
    console.log(project_num)
    var i; 
    var slides = document.getElementById(project_num.toString()).getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n <1){
        slideIndex = slides.length 
    }
    for (i=0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for (i=0; i< dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"
    // slides[slideIndex-1].className += " active"

}

function currentSlide (n, project_num) {
    console.log("AT CURRENT SLIDE FUNC")
    showSlides(slideIndex=n, project_num)

}