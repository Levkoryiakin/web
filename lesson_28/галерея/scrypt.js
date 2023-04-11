// const slide = document.querySelector(".gallery_slide");


// slide.forEach((s) => {
//     s.addEventListener("click", function() {
//         let currentTab = s; 
//         s.classList.remove("active");
//     })
//         currentTab.classList.add("active");

//     })

allSlides = document.querySelectorAll(".gallery_slide");

allSlides.forEach((slide) => {
    slide.addEventListener("click", () => {
        clearAll()
        slide.classList.add("active")
    })
})

function clearAll(){
    allSlides.forEach((slide) => {
        slide.classList.remove("active")
    })
}
    







