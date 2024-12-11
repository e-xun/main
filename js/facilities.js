$(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });
});

// con1~con3 움직임
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".con1, .con2, .con3");
    const con4 = document.querySelector(".con4 .boxwrap");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector(".left img");
                    const text = entry.target.querySelector(".right");

                    if (img && text) {
                        img.style.transform = "translateY(0)";
                        img.style.opacity = "1";
                        text.style.transform = "translateY(0)";
                        text.style.opacity = "1";

                        // 타이밍 설정
                        img.style.transitionDelay = "0s";
                        text.style.transitionDelay = "0.3s";
                    }
                } else {
                    const img = entry.target.querySelector(".left img");
                    const text = entry.target.querySelector(".right");

                    if (img && text) {
                        img.style.transform = "translateY(50px)";
                        img.style.opacity = "0";
                        text.style.transform = "translateY(50px)";
                        text.style.opacity = "0";
                    }
                }
            });
        },
        { threshold: 0.1 } // 뷰포트에 10% 나타났을 때 반응
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // 초기 스타일 설정
    sections.forEach((section) => {
        const img = section.querySelector(".left img");
        const text = section.querySelector(".right");

        if (img && text) {
            img.style.transform = "translateY(50px)";
            img.style.opacity = "0";
            text.style.transform = "translateY(50px)";
            text.style.opacity = "0";

            img.style.transition =
                "transform 0.6s ease-out, opacity 0.6s ease-out";
            text.style.transition =
                "transform 0.6s ease-out, opacity 0.6s ease-out";
        }
    });

    // con4 애니메이션
    const con4Observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const leftBox = con4.querySelector(".imgwrap1");
                    const rightBox = con4.querySelector(".imgwrap2");

                    leftBox.style.transform = "translateX(0)";
                    leftBox.style.opacity = "1";
                    rightBox.style.transform = "translateX(0)";
                    rightBox.style.opacity = "1";

                    leftBox.style.transitionDelay = "0s";
                    rightBox.style.transitionDelay = "0.3s";
                } else {
                    const leftBox = con4.querySelector(".imgwrap1");
                    const rightBox = con4.querySelector(".imgwrap2");

                    leftBox.style.transform = "translateX(-50px)";
                    leftBox.style.opacity = "0";
                    rightBox.style.transform = "translateX(50px)";
                    rightBox.style.opacity = "0";
                }
            });
        },
        { threshold: 0.1 }
    );

    if (con4) {
        con4Observer.observe(con4);

        // 초기 스타일 설정
        const leftBox = con4.querySelector(".imgwrap1");
        const rightBox = con4.querySelector(".imgwrap2");

        leftBox.style.transform = "translateX(-50px)";
        leftBox.style.opacity = "0";
        rightBox.style.transform = "translateX(50px)";
        rightBox.style.opacity = "0";

        leftBox.style.transition =
            "transform 0.6s ease-out, opacity 0.6s ease-out";
        rightBox.style.transition =
            "transform 0.6s ease-out, opacity 0.6s ease-out";
    }
});
