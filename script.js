const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// ฟังก์ชันสุ่มตำแหน่งใหม่
const moveButton = () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
};

// เพิ่ม event listener สำหรับการ hover (เมาส์)
noBtn.addEventListener("mouseover", moveButton);

// เพิ่ม event listener สำหรับการสัมผัส (โทรศัพท์)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // ป้องกันการคลิกโดยไม่ได้ตั้งใจ
    moveButton();
});

// เมื่อคลิกปุ่ม "Yes"
yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
});