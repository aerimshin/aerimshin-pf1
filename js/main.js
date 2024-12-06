document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var sections = document.querySelectorAll('section');
    var pagerItems = document.querySelectorAll('.pager li');
    var slideInterval = setInterval(rotateSlides, 15000); // 15초마다 슬라이드 전환

    // 페이저 클릭 이벤트 설정
    pagerItems.forEach(function (pager, index) {
        pager.addEventListener('click', function () {
            if (index !== currentIndex) {
                fadeOut(sections[currentIndex], 1000); // 현재 섹션 페이드 아웃
                pagerItems[currentIndex].classList.remove('active'); // 현재 페이저 비활성화

                currentIndex = index; // 현재 인덱스를 변경

                fadeIn(sections[currentIndex], 1000); // 새 섹션 페이드 인
                pagerItems[currentIndex].classList.add('active'); // 새 페이저 활성화
            }
        });
    });

    function rotateSlides() {
        fadeOut(sections[currentIndex], 1000);
        pagerItems[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % sections.length;

        fadeIn(sections[currentIndex], 1000);
        pagerItems[currentIndex].classList.add('active');
    }

    function fadeIn(element, duration) {
        element.style.opacity = 0;
        element.style.display = "flex"; // 요소를 보여주기 위해 display를 flex로 설정

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
            var slideGroup = slider.querySelector(sliderClass + " .backbone_table_list");
            var slides = slider.querySelectorAll(sliderClass + " .backbone_table");
            var bulletArray = slider.querySelectorAll(sliderClass + " .tab_pager li");
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

    // 슬라이더 초기화
    initSlider(".content_15", 925);
    initSlider(".content_16", 925);

    // 날짜 업데이트
    function tableTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = String(now.getMonth() + 1).padStart(2, '0');
        var day = String(now.getDate()).padStart(2, '0');

        var formattedTime = `${year} - ${month} - ${day}`;
        var tblTodayElements = document.querySelectorAll('.tbl_today');

        tblTodayElements.forEach(function (element) {
            element.textContent = formattedTime;
        });
    }

    // 시간 초기화
    tableTime();

    // 숫자 랜덤으로 뽑기
    function randomNum() {
        var randomNumElements = document.querySelectorAll('.randomNum');

        randomNumElements.forEach(function (element) {
            // 100부터 199 사이의 정수 난수 생성
            const randomNum = Math.floor(Math.random() * 100) + 150;

            // 해당 요소의 텍스트 콘텐츠 업데이트
            element.textContent = randomNum + 'MB';
        });
    }
    randomNum();
});
