let count = 0;
const sheepSounds = [
    'sheep_1.mp3',
    'sheep_2.mp3',
    'sheep_3.mp3',
    'sheep_4.mp3',
    'sheep_5.mp3'
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
    sheepImage.src = 'sheep.jpg'; // ใช้ URL ของรูปภาพแกะที่คุณดาวน์โหลด
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
