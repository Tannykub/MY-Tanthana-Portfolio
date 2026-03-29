const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = ["Skill", "Knowledge", "what you know", "Experience", "Profile", "Education", "Project", "Contact", "About Me", "Resume", "Portfolio", "Achievement", "Certificate", "Internship", "Hobby", "Interest", "Language", "Strength", "Weakness", "Goal", "Passion"];
let particles = [];
ctx.font = "16px monospace";

function createWord() {
    const word = words[Math.floor(Math.random() * words.length)];

    particles.push({
        text: word,
        x: Math.random() * canvas.width,   // สุ่มทั่วจอ
        y: Math.random() * canvas.height,  // 🔥 สำคัญ
        opacity: 1,
        speedX: (Math.random() - 0.5) * 1, // ลอยซ้าย-ขวา
        speedY: (Math.random() - 0.5) * 1, // ลอยขึ้น-ลง
        size: Math.random() * 20 + 15
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        ctx.font = p.size + "px monospace";
        ctx.fillStyle = `rgba(0,0,0,${p.opacity})`;

        ctx.fillText(p.text, p.x, p.y);

        // 🔥 เคลื่อนที่แบบลอย
        p.x += p.speedX;
        p.y += p.speedY;

        // จางลง
        p.opacity -= 0.005;

        // ถ้าหาย → ลบ
        if (p.opacity <= 0) {
            particles.splice(i, 1);
        }
    });
}

setInterval(createWord, 1000 ); // สร้างคำใหม่ทุกวินาที
setInterval(draw, 5);