// Меняем цвет фона страницы
document.body.style.display = 'lightblue';

// Меняем текст на определенном элементе
const header = document.querySelector('.vkitgetColorClass__colorTextPrimary--vmkYQ');
if (header) {
    header.textContent = 'miji fm!';
}

const element = document.querySelector('.vkitgetColorClass__colorTextPrimary--vmkYQ');

console.log('some');
element.style.color = 'red'
console.log(element.style.display);


// Скрываем элементы
const ads = document.querySelectorAll('.ad-banner');
ads.forEach(ad => ad.style.display = 'none');
