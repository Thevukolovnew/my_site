// Переменные игры
let score = 0;
let clickPower = 1;
let upgradeCost = 10;
let isMusicPlaying = false;

// Находим элементы
const scoreElement = document.getElementById('score');
const clickPowerElement = document.getElementById('clickPower');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const resetButton = document.getElementById('resetButton');
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const clockElement = document.getElementById('clock');

// Устанавливаем громкость музыки
backgroundMusic.volume = 0.3;

// Функция обновления часов
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Функция обновления отображения
function updateDisplay() {
    scoreElement.textContent = score;
    clickPowerElement.textContent = clickPower;
    upgradeButton.textContent = `⬆️ Улучшить (${upgradeCost} очков)`;
    
    // Блокируем кнопку улучшения если не хватает очков
    upgradeButton.disabled = score < upgradeCost;
}

// Функция управления музыкой
function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicButton.textContent = '🎵 Музыка';
        musicButton.classList.remove('playing');
    } else {
        backgroundMusic.play();
        musicButton.textContent = '⏸️ Пауза';
        musicButton.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
}

// Обработчик клика на главную кнопку
clickButton.addEventListener('click', () => {
    score += clickPower;
    updateDisplay();
    
    // Анимация кнопки
    clickButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickButton.style.transform = 'scale(1)';
    }, 100);
});

// Обработчик кнопки улучшения
upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickPower += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость на 50%
        updateDisplay();
    }
});

// Обработчик кнопки сброса
resetButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите сбросить прогресс?')) {
        score = 0;
        clickPower = 1;
        upgradeCost = 10;
        updateDisplay();
    }
});

// Обработчик кнопки музыки
musicButton.addEventListener('click', toggleMusic);

// Инициализация
updateDisplay();
updateClock();
setInterval(updateClock, 1000); // Обновляем часы каждую секунду
