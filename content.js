// Меняем цвет фона страницы
document.body.style.background = 'lightblue';

// Находим оригинальную кнопку
const originalButton = document.querySelector('[data-testid="audio-player-controls-state-button"]');

if (originalButton) {
    // Создаём кастомную кнопку
    const customButton = document.createElement('button');
    customButton.textContent = 'Custom Play Button';
    customButton.style.padding = '10px 20px';
    customButton.style.fontSize = '16px';
    customButton.style.backgroundColor = 'orange';
    customButton.style.color = 'white';
    customButton.style.border = 'none';
    customButton.style.borderRadius = '5px';
    customButton.style.cursor = 'pointer';

    // Добавляем обработчик клика
    customButton.addEventListener('click', () => {
        // Передаём событие оригинальной кнопке        originalButton.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

        console.log('Оригинальное событие выполнено');
    });

    // Удаляем оригинальную кнопку из DOM
    originalButton.style.display = 'none';

    // Добавляем кастомную кнопку в нужное место
    const container = document.querySelector('.vkitAudioPlayerPlaybackControls__root--Zfn4x');
    if (container) {
        container.appendChild(customButton);
    }
}
