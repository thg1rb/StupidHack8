let count = 0;
const sheepSounds = [
    "./resources/sounds/Sheep1.mp3",
    "./resources/sounds/Sheep2.mp3"
];

const sheepImages = [
    "./resources/images/sheep1.webp",
    "./resources/images/sheep2.webp",
    "./resources/images/sheep3.webp",
    "./resources/images/sheep4.webp",
    "./resources/images/sheep5.webp",
    "./resources/images/sheep6.webp",
    "./resources/images/sheep7.webp",
    "./resources/images/sheep8.webp",
    "./resources/images/sheep9.webp",
    "./resources/images/sheep10.webp",
    "./resources/images/sheep11.webp",
    "./resources/images/sheep12.webp",
    "./resources/images/sheep13.webp",
    "./resources/images/sheep14.webp",
    "./resources/images/sheep15.webp",
    "./resources/images/sheep16.webp"
];

function addSheep(event) {
    count++;
    document.getElementById('sheepCount').innerText = count;
    playRandomSheepSound();
    event.target.remove();  // ลบรูปแกะที่คลิกออกจาก DOM
    createSheep(); // เพิ่มแกะใหม่
}

function createSheep() {
    let sheepImage = document.createElement('img');
    sheepImage.src = './resources/images/sheep1.webp'; // ใช้ URL ของรูปภาพแกะที่คุณดาวน์โหลด
    sheepImage.className = 'sheep';
    
    // สุ่มตำแหน่งของแกะ
    sheepImage.style.top = Math.random() * 100 + '%';
    sheepImage.style.left = Math.random() * 100 + '%';

    // สุ่มขนาดของแกะ
    let size = Math.random() * 50 + 30; // ขนาดตั้งแต่ 30px ถึง 80px
    sheepImage.style.width = size + 'px';

    sheepImage.style.animationDuration = (Math.random() * 5 + 5) + 's';
    sheepImage.onclick = addSheep;
    document.getElementById('sheepContainer').appendChild(sheepImage);
}

function playRandomSheepSound() {
    const randomSound = sheepSounds[Math.floor(Math.random() * sheepSounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
}

// เริ่มต้นด้วยการสร้างแกะ 1000 ตัว
for (let i = 0; i < 1000; i++) {
    createSheep();
}
