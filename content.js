// Меняем цвет фона страницы
document.body.style.display = 'lightblue';

// Меняем текст на определенном элементе
const header = document.querySelector('h1');
if (header) {
    header.textContent = 'Изменено расширением!';
}

// Скрываем элементы
const ads = document.querySelectorAll('.ad-banner');
ads.forEach(ad => ad.style.display = 'none');
