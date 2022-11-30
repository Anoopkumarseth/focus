body = document.querySelector('body');

siteheader = document.querySelector('.site_header');
navBtn = siteheader.querySelector('.primaryToggle');
primaryMenu = siteheader.querySelector('.primary_menu');
navBtn.addEventListener('click', () => {
    navBtn.classList.toggle("active")
    body.classList.toggle("primary_menu_open")
})
siteheader.addEventListener("click", () => {
    navBtn.classList.remove("active")
    body.classList.remove("primary_menu_open")
})

// close nav on swipe left
document.addEventListener('swiped-left', function(e) {
    navBtn.classList.remove("active")
    body.classList.remove("primary_menu_open")
});
// open nav on swipe right
document.addEventListener('swiped-right', function(e) {
    navBtn.classList.add("active")
    body.classList.add("primary_menu_open")
});

function stopProp(element) {
    element.addEventListener("click", (event) => {
        event.stopPropagation();
    })
};
stopProp(navBtn)
stopProp(primaryMenu)


// swiper
var swiper = new Swiper(".testimonial_swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



