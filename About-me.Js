// // รอให้ HTML โหลดก่อน
// window.addEventListener("DOMContentLoaded", () => {

//     const vinyls = document.querySelectorAll(".vinyl");

//     vinyls.forEach(vinyl => {
//         let speed = 0;
//         let rotation = 0;

//         vinyl.addEventListener("mouseenter", () => {
//             speed = 12; // เร่ง
//         });

//         vinyl.addEventListener("mouseleave", () => {
//             speed = 2; // เริ่มช้าลง
//         });

//         function animate() {
//             rotation += speed;
//             speed *= 0.97; // 🔥 ค่อย ๆ เบรก

//             vinyl.style.transform = `rotate(${rotation}deg)`;

//             requestAnimationFrame(animate);
//         }

//         animate();
//     });

// });