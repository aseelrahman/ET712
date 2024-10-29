// Scroll to Right
// Collect element
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("click", function(){
    window.scrollBy(100,0)
})

// Scrollable image gallery
// ollect left and riht buttons, and add gallery container
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
let gallerycontainer = document.querySelector(".gallerycontainer")

// Define one functions for scroll left and  scroll right.

function scrollgallery(scrollpixeles){
    gallerycontainer.scrollBy({
        left:scrollpixeles,
        behavior: "smooth"
    })
}

// add event to each button when is clicked
btnright.addEventListener("click", function(){
    scrollgallery(1000)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-500)
})

// To Top Scroll
// Collect to icon
let toTop = document.querySelector(".toTop")
// add scroll event to the window (internet brower)
window.addEventListener("scroll", function(){
    let pexelsfromtop = this.window.scrollY // get the pexels window
    // test window. scrollY

    console.log(pexelsfromtop)

    if(pexelsfromtop>300){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display = "none"
    }
})