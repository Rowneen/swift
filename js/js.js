
    let selectedElement = null;

    function selectElement(element) {
        if (selectedElement === element) {
            deselectElement();
        } else {
            if (selectedElement) {
                selectedElement.classList.remove("selected");
            }
            element.classList.add("selected");
            selectedElement = element;
        }
    }

    function deselectElement() {
        const selectableElements = document.querySelectorAll(".selectable");
        selectableElements.forEach(element => {
            element.classList.remove("selected");
        });
        selectedElement = null;
    }   

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".selectable")) {
            deselectElement();
        }
        
    });
    document.addEventListener("DOMContentLoaded", function () {
        // Находим элементы
        const fullNameInput = document.getElementById("fullName");
        const phoneNumberInput = document.getElementById("phoneNumber");
        const emailInput = document.getElementById("email");
        const scheduleInput = document.getElementById("schedule");
        const agreementCheckbox = document.getElementById("agreementCheckbox");
        const submitButton = document.getElementById("submitButton");
        const successMessage = document.getElementById("successMessage");
    
        // Находим кнопку и добавляем обработчик клика
        submitButton.addEventListener("click", function () {
            // Проверяем заполненность полей и состояние чекбокса
            if (!fullNameInput.value || !phoneNumberInput.value || !emailInput.value || !scheduleInput.value || !agreementCheckbox.checked) {
                // Если какое-то поле не заполнено, обводим его красной рамкой
                if (!fullNameInput.value) {
                    fullNameInput.style.border = "2px solid red";
                } else {
                    fullNameInput.style.border = "none";
                }
    
                if (!phoneNumberInput.value) {
                    phoneNumberInput.style.border = "2px solid red";
                } else {
                    phoneNumberInput.style.border = "none";
                }
    
                if (!emailInput.value) {
                    emailInput.style.border = "2px solid red";
                } else {
                    emailInput.style.border = "none";
                }
    
                if (!scheduleInput.value) {
                    scheduleInput.style.border = "2px solid red";
                } else {
                    scheduleInput.style.border = "none";
                }
    
                // Проверка на состояние чекбокса
                if (!agreementCheckbox.checked) {
                    agreementCheckbox.style.boxShadow = "0 0 5px red";
                    agreementCheckbox.style.border = "2px solid red"; // Добавляем обводку чекбоксу в случае ошибки
                } else {
                    agreementCheckbox.style.outline = "none";
                    agreementCheckbox.style.border = "none"; // Убираем обводку чекбокса в случае успеха
                }
    
                // Меняем стили и текст кнопки на ошибочные
                submitButton.style.backgroundColor = "red"; // Цвет фона для ошибки
                submitButton.style.color = "white"; // Цвет текста для ошибки
                submitButton.textContent = "Ошибка";
    
                // Скрываем сообщение об ошибке и возвращаем стандартные стили через 3 секунды
                setTimeout(function () {
                    fullNameInput.style.border = "none";
                    phoneNumberInput.style.border = "none";
                    emailInput.style.border = "none";
                    scheduleInput.style.border = "none";
                    agreementCheckbox.style.boxShadow = "none";
                    agreementCheckbox.style.border = "none";
                    submitButton.style.backgroundColor = ""; // Возвращаем изначальный цвет фона
                    submitButton.style.color = ""; // Возвращаем изначальный цвет текста
                    submitButton.textContent = "Хочу работать!";
                }, 3000); // 3000 миллисекунд = 3 секунды
            } else {
                // Если все поля заполнены, меняем стили и текст кнопки на успешные
                fullNameInput.style.border = "none";
                phoneNumberInput.style.border = "none";
                emailInput.style.border = "none";
                scheduleInput.style.border = "none";
                agreementCheckbox.style.outline = "none";
                agreementCheckbox.style.border = "none";
                submitButton.style.backgroundColor = "green"; // Цвет фона для успешного выполнения
                submitButton.style.color = "white"; // Цвет текста для успешного выполнения
                submitButton.textContent = "Успешно";
    
                // Скрываем сообщение об успешной отправке и возвращаем стандартные стили через 3 секунды
                setTimeout(function () {
                    submitButton.style.backgroundColor = ""; // Возвращаем изначальный цвет фона
                    submitButton.style.color = ""; // Возвращаем изначальный цвет текста
                    submitButton.textContent = "Хочу работать!";
                }, 3000); // 3000 миллисекунд = 3 секунды
            }
        });
    });
    function showPopup(element) {
        const popupContainer = element.querySelector('.popup-container');
    
        if (!popupContainer) {
            const popup = document.createElement('div');
            popup.classList.add('popup-container');
            element.appendChild(popup);
        }
    }
    
    function hidePopup(element) {
        const popupContainer = element.querySelector('.popup-container');
        if (popupContainer) {
            element.removeChild(popupContainer);
        }
    }

// Получаем все необходимые элементы
const distanceInput = document.querySelector('.boxinputField'); // Поле ввода расстояния
const productInput = document.querySelector('.boxinputField'); // Поле ввода товара
const paymentOptions = document.querySelectorAll('.selectbox_oform, .selectbox_oform2'); // Элементы выбора оплаты
const totalAmountElement = document.getElementById('totalAmount'); // Элемент для вывода итога

// Обработчик событий для обновления итога
function updateTotalAmount() {
  // Получаем значения из полей ввода
  const distance = parseFloat(distanceInput.value) || 0;

  // Делаем какие-то расчеты (здесь, например, просто сумма расстояния)
  const totalAmount = distance;

  // Обновляем текст в элементе итога
  totalAmountElement.textContent = `${totalAmount} руб.`;
}

// Обработчик события для полей ввода
distanceInput.addEventListener('input', updateTotalAmount);
productInput.addEventListener('input', updateTotalAmount);

// Обработчик события для выбора оплаты
paymentOptions.forEach(option => {
  option.addEventListener('click', updateTotalAmount);
});
// ...

// Обработчик события для кнопки оплаты
payButton.addEventListener('click', function() {

  // Изменение стиля кнопки и отображение уведомления
  payButton.classList.add('success_pay');
  payButton.textContent = 'Успешно!';
});
