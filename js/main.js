document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var sections = document.querySelectorAll("section");
    var pagerItems = document.querySelectorAll(".pager li");
    var slideInterval = setInterval(rotateSlides, 15000); // 15초마다 슬라이드 전환

    // 페이저 클릭 이벤트 설정
    pagerItems.forEach(function (pager, index) {
        pager.addEventListener("click", function () {
            if (index !== currentIndex) {
                fadeOut(sections[currentIndex], 1000); // 현재 섹션 페이드 아웃
                pagerItems[currentIndex].classList.remove("active"); // 현재 페이저 비활성화

                currentIndex = index; // 현재 인덱스를 변경

                fadeIn(sections[currentIndex], 1000); // 새 섹션 페이드 인
                pagerItems[currentIndex].classList.add("active"); // 새 페이저 활성화
            }
        });
    });

    function rotateSlides() {
        fadeOut(sections[currentIndex], 1000);
        pagerItems[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % sections.length;

        fadeIn(sections[currentIndex], 1000);
        pagerItems[currentIndex].classList.add("active");
    }

    function fadeIn(element, duration) {
        element.style.opacity = 0;
        element.style.display = "flex";

        var startTime = performance.now();

        function fade() {
            var currentTime = performance.now();
            var progress = Math.min((currentTime - startTime) / duration, 1);
            element.style.opacity = progress;

            if (progress < 1) {
                requestAnimationFrame(fade);
            }
        }

        requestAnimationFrame(fade);
    }

    function fadeOut(element, duration) {
        var startTime = performance.now();

        function fade() {
            var currentTime = performance.now();
            var progress = Math.min((currentTime - startTime) / duration, 1);
            element.style.opacity = 1 - progress;

            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                element.style.display = "none";
            }
        }

        requestAnimationFrame(fade);
    }

    // 백본 테이블 슬라이더 초기화
    function initSlider(sliderClass, slideWidth) {
        var sliders = document.querySelectorAll(sliderClass);

        sliders.forEach(function (slider) {
            var slideGroup = slider.querySelector(".backbone_table_list");
            var slides = slider.querySelectorAll(".backbone_table");
            var bulletArray = slider.querySelectorAll(".tab_pager li");
            var currentIndex = 0;
            var timeout;

            function move(newIndex) {
                if (currentIndex === newIndex) return;

                advance();

                bulletArray[currentIndex].classList.remove("active");
                bulletArray[newIndex].classList.add("active");

                slideGroup.style.transform = `translateX(-${newIndex * slideWidth}px)`;
                currentIndex = newIndex;
            }

            function advance() {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    var nextIndex = (currentIndex + 1) % slides.length;
                    move(nextIndex);
                }, 4000); // 4초마다 전환
            }

            bulletArray.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    move(index);
                });
            });

            advance();
        });
    }

    initSlider(".content_15", 925);
    initSlider(".content_16", 925);

    function tableTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = String(now.getMonth() + 1).padStart(2, "0");
        var day = String(now.getDate()).padStart(2, "0");

        var formattedTime = `${year} - ${month} - ${day}`;
        document.querySelectorAll(".tbl_today").forEach(function (element) {
            element.textContent = formattedTime;
        });
    }

    tableTime();

    function randomNum() {
        document.querySelectorAll(".randomNum").forEach(function (element) {
            const randomNum = Math.floor(Math.random() * 100) + 150;
            element.textContent = randomNum + "MB";
        });
    }

    randomNum();

    // function resizeContent() {
    //     const container = document.querySelector('.all');
    //     const content = document.querySelector('.dashboard');

    //     // 부모 컨테이너 크기
    //     const containerWidth = container.offsetWidth;
    //     const containerHeight = container.offsetHeight;

    //     // 디자인 기준 비율
    //     const designWidth = 1920;
    //     const designHeight = 1080;

    //     // 부모 비율과 디자인 비율 비교
    //     const scale = Math.min(containerWidth / designWidth, containerHeight / designHeight);

    //     // 스케일링
    //     content.style.transform = `scale(${scale})`;
    //     //content.style.transformOrigin = 'top left';

    //     // 가운데 정렬
    //     content.style.left = `${(containerWidth - designWidth * scale) / 2}px`;
    //     content.style.top = `${(containerHeight - designHeight * scale) / 2}px`;
    // }

    // // 이벤트 리스너
    // window.addEventListener('resize', resizeContent);
    // window.addEventListener('load', resizeContent);

});
