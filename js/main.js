document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var sections = document.querySelectorAll('section');
    var pagerItems = document.querySelectorAll('.pager li');
    var slideInterval = setInterval(rotateSlides, 15000); // 3초마다 슬라이드 전환

    // 페이저 클릭 이벤트 설정
    pagerItems.forEach(function (pager, index) {
        pager.addEventListener('click', function () {
            // 현재 슬라이드와 클릭한 슬라이드가 다를 때만 실행
            if (index !== currentIndex) {
                fadeOut(sections[currentIndex], 1000); // 현재 섹션 페이드 아웃
                pagerItems[currentIndex].classList.remove('active'); // 현재 활성화된 페이저 비활성화

                currentIndex = index; // 현재 인덱스를 클릭한 페이저 인덱스로 변경

                fadeIn(sections[currentIndex], 1000); // 클릭한 페이저에 해당하는 섹션 페이드 인
                pagerItems[currentIndex].classList.add('active'); // 해당 페이저 활성화
            }
        });
    });

    function rotateSlides() {
        fadeOut(sections[currentIndex], 1000); // 현재 섹션 페이드 아웃
        pagerItems[currentIndex].classList.remove('active'); // 현재 활성화된 페이저 비활성화

        // 다음 섹션 인덱스 계산
        currentIndex = (currentIndex + 1) % sections.length;

        fadeIn(sections[currentIndex], 1000); // 다음 섹션 페이드 인
        pagerItems[currentIndex].classList.add('active'); // 다음 페이저 활성화
    }

    // fadeIn 함수
    function fadeIn(element, duration) {
        element.style.opacity = 0;
        element.style.display = "flex"; // 요소를 보여주기 위해 display를 block으로 설정

        var startTime = performance.now();

        function fade() {
            var currentTime = performance.now();
            var elapsedTime = currentTime - startTime;
            var progress = Math.min(elapsedTime / duration, 1);
            element.style.opacity = progress;

            if (progress < 1) {
                requestAnimationFrame(fade);
            }
        }

        requestAnimationFrame(fade);
    }

    // fadeOut 함수
    function fadeOut(element, duration) {
        var opacity = 1;
        element.style.display = "flex"; // 요소가 페이드 아웃될 때는 먼저 보여주고 페이드 아웃 시작
        var startTime = performance.now();

        function fade() {
            var currentTime = performance.now();
            var elapsedTime = currentTime - startTime;
            var progress = Math.min(elapsedTime / duration, 1);
            element.style.opacity = 1 - progress;

            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                element.style.display = "none"; // 페이드 아웃이 완료되면 요소를 숨김
            }
        }

        requestAnimationFrame(fade);
    }


    //백본 table slide
    function initSlider(sliderClass, slideWidth) {
        var sliders = document.querySelectorAll(sliderClass);

        sliders.forEach(function (slider) {
            var slideGroup = slider.querySelector(sliderClass + " .backbone_table_list");
            var slides = slider.querySelectorAll(sliderClass + " .backbone_table");
            var bulletArray = slider.querySelectorAll(sliderClass + " .tab_pager li");
            var currentIndex = 0;
            var timeout;

            function move(newIndex) {
                if (currentIndex === newIndex) return; // Return if the same index

                advance(); // Reserve automatic transition

                bulletArray[currentIndex].classList.remove("active");
                bulletArray[newIndex].classList.add("active");

                // Update the transform property to slide
                slideGroup.style.transform = "translateX(-" + (newIndex * slideWidth) + "px)";

                currentIndex = newIndex; // Update current index
            }

            function advance() {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    var nextIndex = (currentIndex + 1) % slides.length; // Calculate next slide index
                    move(nextIndex); // Move to the next slide
                }, 4000); // 4 seconds interval
            }

            // Register click event for each bullet button
            bulletArray.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    move(index); // Move to the corresponding slide
                });
            });

            advance(); // Start automatic transition
        });
    }

    // Initialize sliders for both content sections
    initSlider(".content_15", 925);
    initSlider(".content_16", 925);


    // 시간 업데이트
    function tableTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작
        var day = String(now.getDate()).padStart(2, '0');

        var formattedTime = `${year} - ${month} - ${day}`;
        document.querySelectorAll('.tbl_today').textContent = formattedTime;
    }
});
