$(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });

    // con1 이미지 자동 슬라이드
    setInterval(function () {
        $(".notice")
            .stop()
            .animate({ "margin-left": "-530px" }, 1000, function () {
                $(".notice li:first-child()").appendTo(".notice");
                $(".notice").css({ "margin-left": "0px" });
            });
    }, 2000);

    //con3
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con3",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 2,
            // markers: true,
        },
    }).to(".con3", { y: "0", opacity: "1", duration: "1" }, 0.2);

    // con4 room 이미지 페이드
    $(".room-name li").eq(0).addClass("active");
    $(".rooms-thumb .imgbox").eq(0).addClass("active");
    $(".rooms-list .room-info ul").eq(0).addClass("active");
    $(".room-name li").each(function () {
        $(this).mouseenter(function () {
            const idx = $(this).index();
            $(".room-name li").removeClass("active");
            $(".room-name li").eq(idx).addClass("active");
            $(".rooms-list .room-info ul").removeClass("active");
            $(".rooms-list .room-info ul").eq(idx).addClass("active");
            $(".rooms-thumb .imgbox").removeClass("active");
            $(".rooms-thumb .imgbox").eq(idx).addClass("active");
        });
    });
});
