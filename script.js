const audioPlayer = document.getElementById("audio-player");
const volumeControl = document.getElementById("volume");
const body = document.body; // Ссылка на body, чтобы менять фон страницы

// Массив фонов, которые будут меняться в зависимости от времени песни
const backgrounds = [
    'images/dj-background.jpg', // Фон для первой песни
    'images/dj-background-2.jpg', // Фон для второй песни
    'images/dj-background-3.jpg'  // Фон для третьей песни
];

volumeControl.addEventListener("input", (event) => {
    audioPlayer.volume = event.target.value;
});

// Функция смены песни
function changeSong(song) {
    const audioSource = document.getElementById("audio-source");
    audioSource.src = song;
    audioPlayer.load();
    audioPlayer.play();
}

// Функция для смены фона в зависимости от времени воспроизведения песни
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    let backgroundIndex = 0;

    // Если песня уже начала играть
    if (currentTime >= 0 && currentTime < 30) {
        backgroundIndex = 0; // Первоначальный фон
    } else if (currentTime >= 30 && currentTime < 60) {
        backgroundIndex = 1; // Сменить фон
    } else if (currentTime >= 60) {
        backgroundIndex = 2; // Другой фон
    }

    // Меняем фон страницы
    body.style.backgroundImage = `url(${backgrounds[backgroundIndex]})`;
});
