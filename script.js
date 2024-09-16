let balance = 0;
let clickValue = 1;
const clickValueDisplay = document.getElementById('clickValue');
const balanceDisplay = document.getElementById('balance');
const coin = document.getElementById('coin');

// Функция для обновления баланса и добавления анимации
function updateBalance() {
    balance += clickValue;
    balanceDisplay.textContent = balance;
    animateClickValue();
}

// Функция для анимации значения клика
function animateClickValue() {
    const clickValueElement = document.createElement('div');
    clickValueElement.className = 'click-value';
    clickValueElement.textContent = `+${clickValue}`;
    document.body.appendChild(clickValueElement);

    // Устанавливаем начальные и конечные позиции
    clickValueElement.style.left = `${event.clientX}px`;
    clickValueElement.style.top = `${event.clientY}px`;

    // Запускаем анимацию
    setTimeout(() => {
        clickValueElement.style.transform = `translateY(-100px)`;
        clickValueElement.style.opacity = '0';
    }, 10);

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        clickValueElement.remove();
    }, 1000);
}

// Обработчик клика на монету
coin.addEventListener('click', updateBalance);
