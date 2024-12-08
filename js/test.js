function resizeWithGSAP() {
    const container = document.querySelector('.all');
    const content = document.querySelector('.dashboard');

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const designWidth = 1920;
    const designHeight = 1080;

    // 가로, 세로 모두 윈도우 크기에 맞게 확장하도록 scale 계산
    const scale = Math.max(containerWidth / designWidth, containerHeight / designHeight);

    gsap.to(content, {
        scale: scale,
        x: 0, // x 위치를 0으로 설정하여 왼쪽 상단 고정
        y: 0, // y 위치를 0으로 설정하여 왼쪽 상단 고정
        transformOrigin: "top left", // transform 기준을 왼쪽 상단으로 설정
        duration: 0.5,
        ease: "power1.out"
    });
}

// D3 사용 예제
function resizeWithD3() {
    const container = d3.select(".all");
    const content = d3.select(".dashboard");

    const containerWidth = container.node().offsetWidth;
    const containerHeight = container.node().offsetHeight;

    const designWidth = 1920;
    const designHeight = 1080;

    // 가로, 세로 모두 윈도우 크기에 맞게 확장하도록 scale 계산
    const scale = Math.max(containerWidth / designWidth, containerHeight / designHeight);

    content
        .style("transform", `scale(${scale})`)
        .style("transform-origin", "top left") // transform 기준을 왼쪽 상단으로 설정
        .style("top", "0px") // top을 0으로 설정하여 고정
        .style("left", "0px"); // left을 0으로 설정하여 고정
}

// 이벤트 리스너
window.addEventListener('resize', () => {
    resizeWithGSAP(); // GSAP 사용
    resizeWithD3();   // D3 사용
});

window.addEventListener('load', () => {
    resizeWithGSAP(); // GSAP 사용
    resizeWithD3();   // D3 사용
});
