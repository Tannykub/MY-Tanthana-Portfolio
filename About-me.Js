const vinyls = document.querySelectorAll(".vinyl");

vinyls.forEach(vinyl => {
    let speed = 0;
    let rotation = 0;

    vinyl.addEventListener("mouseenter", () => {
        speed = 10;
    });

    vinyl.addEventListener("mouseleave", () => {
        speed = 2;
    });

    function animate() {
        rotation += speed;
        speed *= 0.98;

        vinyl.style.transform = `rotate(${rotation}deg)`;

        requestAnimationFrame(animate);
    }

    animate();
});