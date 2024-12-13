$(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });
});

// con1
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".con1");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector(".con1_txt");
                    const text = entry.target.querySelector(".con1Img");

                    if (img && text) {
                        img.style.transform = "translateX(0)";
                        img.style.opacity = "1";
                        text.style.transform = "translateX(0)";
                        text.style.opacity = "1";

                        // 타이밍 설정
                        img.style.transitionDelay = "0s";
                        text.style.transitionDelay = "0.3s";
                    }
                } else {
                    const img = entry.target.querySelector(".con1_txt");
                    const text = entry.target.querySelector(".con1Img");

                    if (img && text) {
                        img.style.transform = "translateX(-100px)";
                        img.style.opacity = "0";
                        text.style.transform = "translateX(100px)";
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
        const img = section.querySelector(".con1_txt");
        const text = section.querySelector(".con1Img");

        if (img && text) {
            img.style.transform = "translateX(-100px)";
            img.style.opacity = "0";
            text.style.transform = "translateX(100px)";
            text.style.opacity = "0";

            img.style.transition =
                "transform 0.6s ease-out, opacity 0.6s ease-out";
            text.style.transition =
                "transform 0.6s ease-out, opacity 0.6s ease-out";
        }
    });
});

// 질문 열고 닫힘
// document.querySelectorAll(".list .ask").forEach((ask) => {
//     ask.addEventListener("click", function () {
//         const answer = this.nextElementSibling; // 다음 요소인 .answer
//         const title = this.querySelector(".tit"); // 현재 .tit 요소

//         // 현재 클릭한 요소의 상태를 토글
//         if (answer.style.display === "block") {
//             answer.style.display = "none";
//             title.classList.remove("active");
//         } else {
//             // 다른 모든 .answer를 닫고 화살표 초기화
//             document.querySelectorAll(".list .answer").forEach((ans) => {
//                 ans.style.display = "none";
//                 ans.previousElementSibling
//                     .querySelector(".tit")
//                     .classList.remove("active");
//             });

//             // 현재 선택한 .answer 열기
//             answer.style.display = "block";
//             title.classList.add("active");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const asks = document.querySelectorAll(".list .ask");
    const answers = document.querySelectorAll(".list .answer");

    // 첫 번째 답변을 기본 표시
    answers[0].style.display = "block";
    asks[0].querySelector(".tit").classList.add("active");

    // 클릭 이벤트 설정
    asks.forEach((ask, index) => {
        ask.addEventListener("click", function () {
            const answer = this.nextElementSibling; // 현재 클릭한 .answer
            const title = this.querySelector(".tit"); // 현재 .tit

            if (answer.style.display === "block") {
                // 이미 열려 있는 경우 닫기
                answer.style.display = "none";
                title.classList.remove("active");
            } else {
                // 모든 답변 닫기
                answers.forEach((ans) => (ans.style.display = "none"));
                asks.forEach((a) =>
                    a.querySelector(".tit").classList.remove("active")
                );

                // 선택한 답변 열기
                answer.style.display = "block";
                title.classList.add("active");
            }
        });
    });
});

// 하단 올라옴
document.addEventListener("DOMContentLoaded", () => {
    // 섹션 애니메이션
    const animatedSections = document.querySelectorAll(".banner, .faq, .Qna");

    const animateObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.opacity = "1";
                } else {
                    entry.target.style.transform = "translateY(50px)";
                    entry.target.style.opacity = "0";
                }
            });
        },
        { threshold: 0.1 } // 뷰포트 10% 진입 시 작동
    );

    animatedSections.forEach((section) => {
        section.style.transform = "translateY(50px)";
        section.style.opacity = "0";
        section.style.transition =
            "transform 0.6s ease-out, opacity 0.6s ease-out";
        animateObserver.observe(section);
    });
});
