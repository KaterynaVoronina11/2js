

function validateInput() {
    var apartmentNumberInput = document.getElementById('apartmentNumber');
    var tooltipText = document.getElementById('tooltipText');

    var apartmentNumber = parseInt(apartmentNumberInput.value);

    if (isNaN(apartmentNumber) || apartmentNumber < 1 || apartmentNumber > 108) {
        tooltipText.textContent = 'Невірне значення. Введіть число від 1 до 108.';
    } else {
        var entrance = Math.ceil(apartmentNumber / 36);
        var floor = Math.ceil((apartmentNumber % 36) / 4);

        tooltipText.textContent = 'No під’їзду: ' + entrance + '\nПоверх: ' + floor;
    }
}
