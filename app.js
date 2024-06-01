document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('inputbox');
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var buttonText = button.innerText;
            switch (buttonText) {
                case 'AC':
                    display.value = '0';
                    break;
                case 'DEL':
                    if (display.value.length > 1) {
                        display.value = display.value.slice(0, -1);
                    } else {
                        display.value = '0';
                    }
                    break;
                case '=':
                    try {
                        var result = eval(display.value);
                        display.value = isFinite(result) ? result : 'Error';
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                case '±':
                    display.value = (parseFloat(display.value) * -1).toFixed(2);
                    break;
                default:
                    if (display.value === '0' || display.value === 'Error') {
                        display.value = buttonText;
                    } else {
                        display.value += buttonText;
                    }
                    break;
            }
        });
    });
});

