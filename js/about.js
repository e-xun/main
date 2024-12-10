$(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });

    // con1 올라옴
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con1",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 2,
            // markers: true,
        },
    }).to(".con1", { y: "0", opacity: "1", duration: "1" }, 0.2);
});

// con2
window.addEventListener(`scroll`, function () {
    for (let i = 0; i < document.querySelectorAll(`box`).length; i++) {
        if (
            document.querySelectorAll(`box`)[i].getBoundingClientRect().top <=
                500 &&
            document.querySelectorAll(`box`)[i].getBoundingClientRect().top >=
                300
        ) {
            document.querySelectorAll(`box`)[i].classList.add(`active`);
        } else {
            document.querySelectorAll(`box`)[i].classList.remove(`active`);
        }
    }
});
