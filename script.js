const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");



noBtn.addEventListener("mouseover", () => {
    // คำนวณขอบเขตสูงสุดที่ปุ่มสามารถเคลื่อนที่ได้
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // สุ่มตำแหน่งใหม่ โดยไม่ให้ปุ่มออกนอกขอบจอ
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // อัปเดตตำแหน่งปุ่ม
    noBtn.style.position = "absolute"; // ตรวจสอบให้แน่ใจว่าปุ่มอยู่ในตำแหน่ง absolute
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});


yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
});
