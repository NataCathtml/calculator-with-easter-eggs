document.getElementById('calculate').addEventListener('click', function() {
    const input = document.getElementById('input').value.trim();
    const resultDiv = document.getElementById('result');
    let result;

    const easterEggs = {
        '1000-7': 'Ха-ха, попался!',
        '42': 'Это ответ на всё!',
        '2+2': 'Правильно, 4!',
        // Добавьте свои пасхалки здесь
    };

    try {
        // Используем math.js для безопасного вычисления
        const calculation = math.evaluate(input);
        result = calculation;

        if (easterEggs.hasOwnProperty(input)) {
            result = `${calculation} (${easterEggs[input]})`;
        }

        // Добавление в историю
        const historyList = document.getElementById('history-list');
        const newEntry = document.createElement('li');
        newEntry.innerText = `${input} = ${result}`;
        historyList.prepend(newEntry); // Добавляет сверху
    } catch (error) {
        result = 'Ошибка: неверный ввод';
    }

    resultDiv.innerText = result;
});
   // Обработка кликов по кнопкам
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const inputField = document.getElementById('input');

        if (this.id === 'clear') {
            inputField.value = '';
        } else {
            inputField.value += value;
        }
    });
});