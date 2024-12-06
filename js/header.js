document.addEventListener("DOMContentLoaded", function () {

    // 테마 교체
    var checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', themeChange);

    function themeChange() {
        var element = document.getElementById('all');
        if (checkbox.checked) {
            element.classList.remove('dark');
            element.classList.add('blue');
        } else {
            element.classList.remove('blue');
            element.classList.add('dark');
        }
    }

    // 시간 업데이트
    function updateTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작
        var day = String(now.getDate()).padStart(2, '0');

        // 24시간제를 12시간제로 변환
        var hours = now.getHours();
        var period = hours >= 12 ? 'PM' : 'AM'; // 오전/오후 설정
        hours = hours % 12 || 12; // 0시를 12시로 변경

        var minutes = String(now.getMinutes()).padStart(2, '0');

        var formattedDate = `${year}.${month}.${day}`;
        var formattedTime = `${hours}:${minutes}`;
        var formattedAm = `${period}`;

        // 날짜 업데이트
        var dateElement = document.getElementById('date');
        if (dateElement) {
            dateElement.textContent = formattedDate;
        } else {
            console.warn("Date element with ID 'date' not found.");
        }

        // 시간을 표시하는 클래스가 여러 개일 경우 처리
        var timeElements = document.getElementsByClassName('time_text');
        if (timeElements.length > 0) {
            for (var i = 0; i < timeElements.length; i++) {
                timeElements[i].textContent = formattedTime;
            }
        } else {
            console.warn("No elements with class 'time_text' found.");
        }

        // AM/PM을 표시하는 클래스가 여러 개일 경우 처리
        var amElements = document.getElementsByClassName('am');
        if (amElements.length > 0) {
            for (var i = 0; i < amElements.length; i++) {
                amElements[i].textContent = formattedAm;
            }
        } else {
            console.warn("No elements with class 'am' found.");
        }
    }



    setInterval(updateTime, 1000);
    updateTime(); // 페이지 로드 시 시간 갱신

    document.querySelectorAll('.refresh_btn').forEach(function (element) {
        element.addEventListener('click', refreshContent);

        // 30초마다 자동으로 리프레시
        setInterval(function () {
            element.click();
        }, 30000);
    });

    function refreshContent() {
        this.classList.toggle('active');

        // 모든 slide 클래스를 가진 요소 가져오기
        var refreshElements = document.getElementsByClassName('slide');

        // 동일한 URL로 데이터를 받아와서 새로고침할 영역을 업데이트
        fetch(window.location.href)
            .then(function (response) {
                return response.text(); // 응답을 텍스트로 반환
            })
            .then(function (html) {
                // 임시로 DOM을 생성하여 받아온 HTML을 파싱
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // 새로 가져온 slide 콘텐츠
                var newContent = tempDiv.getElementsByClassName('slide');

                // 기존 slide 콘텐츠를 새로고침
                for (var i = 0; i < refreshElements.length; i++) {
                    refreshElements[i].innerHTML = newContent[i].innerHTML;
                }

                // 새로고침 후 차트 다시 생성
                renderCharts();  // charts.js에 정의된 차트 생성 함수 호출
            })
            .catch(function (error) {
                console.warn('문제가 발생했습니다:', error);
            });
    }



    // 전체 화면 토글 버튼
    const toggleFullscreenBtn = document.querySelector('#expand');
    toggleFullscreenBtn.addEventListener('click', function () {
        toggleFullScreen(document.documentElement, this); // 페이지 전체를 전체 화면으로 전환
    });

    function toggleFullScreen(element, button) {
        if (!document.fullscreenElement) {
            // 전체 화면 모드로 전환
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) { // 사파리 지원
                element.webkitRequestFullscreen();
            } else if (element.mozRequestFullScreen) { // 파이어폭스 지원
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) { // IE/Edge 지원
                element.msRequestFullscreen();
            }

            // 버튼에 'expand_btn' 클래스를 추가하고 'small_btn' 클래스를 제거
            button.classList.add('small_btn');
            button.classList.remove('expand_btn');
        } else {
            // 전체 화면 모드 해제
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullscreen) { // 사파리 지원
                document.webkitCancelFullscreen();
            } else if (document.mozCancelFullScreen) { // 파이어폭스 지원
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) { // IE/Edge 지원
                document.msExitFullscreen();
            }

            // 버튼에 'small_btn' 클래스를 추가하고 'expand_btn' 클래스를 제거
            button.classList.add('expand_btn');
            button.classList.remove('small_btn');
        }
    }

});
