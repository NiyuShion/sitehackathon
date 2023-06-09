var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
    });
});

window.onscroll = () => {
    hideHeader()
};

const hideHeader = () => {
    if (document.documentElement.scrollTop > 720) {
        document.getElementsByTagName("header")[0].style.display = "none";
    } else {
        document.getElementsByTagName("header")[0].style.display = "flex";
    }
}

//calc


// Получаем необходимые элементы со страницы
const inputBox = document.querySelector('.inputBox input');
const select = document.querySelector('.inputBox__select select');
const button = document.querySelector('.calculator__button');
const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');

// Создаем функцию для расчетов
function calculate() {
    const value = parseFloat(inputBox.value);
    const option = select.value;

    let total, average, comparison;
    switch (option) {
        case 'E':
            total = value * 1000;
            average = 110000;
            avg = total / 30;
            if (total > average) {
                comparison = `Ваше потребление ${value} кВт-ч в месяц превышает на ${(total / average - 1) * 100}% среднего значения`;
            } else {
                comparison = `Ваше потребление ${value} кВт-ч в месяц меньше на ${(1 - total / average) * 100}% среднего значения`;
            }
            break;
        case 'W':
            total = value * 0.001;
            average = 6.935;
            avg = value / 30;
            if (total > average) {
                comparison = `Ваше потребление ${value} куб. м воды в месяц превышает на ${(total / average - 1) * 100}% среднего значения`;
            } else {
                comparison = `Ваше потребление ${value} куб. м воды в месяц меньше на ${(1 - total / average) * 100}% среднего значения`;
            }
            break;
        case 'G':
            total = value * 0.001;
            average = 6.49;
            avg = value / 30;
            if (total > average) {
                comparison = `Ваше потребление ${value} куб. м газа в месяц превышает на ${(total / average - 1) * 100}% среднего значения`;
            } else {
                comparison = `Ваше потребление ${value} куб. м газа в месяц меньше на ${(1 - total / average) * 100}% среднего значения`;
            }
            break;
        default:
            alert('Выберите тип ресурса!');
            return;
    }

    res1.textContent = `${total.toFixed(2)} ${option === 'E' ? 'Ватт' : 'куб. м'}`;
    res2.textContent = `${avg.toFixed(2)} ${option === 'E' ? 'Ватт' : 'л.'} в день`;
    res3.textContent = comparison;
}


// Добавляем обработчик события на кнопку "Рассчитать"
button.addEventListener('click', calculate);

let isOpen = false;
const sidebarToggle = () => {
    if (isOpen) {
        document.getElementById("sidebar").style.width = "0px";
        isOpen = false;
    } else {
        if (window.innerWidth > 310) {
            document.getElementById("sidebar").style.width = "300px";
        } else {
            document.getElementById("sidebar").style.width = "100%";
        }
        isOpen = true;
    }
}


// Открыть pop-up-category
let infoShow = (num) => {
    if (num == 1) {
        document.getElementsByClassName("pop-up-category")[0].style.display = "block";
    } else if (num == 2) {
        document.getElementsByClassName("pop-up-category")[1].style.display = "block";
    } else if (num == 3) {
        document.getElementsByClassName("pop-up-category")[2].style.display = "block";
    } else if (num == 4) {
        document.getElementsByClassName("pop-up-category")[3].style.display = "block";
    } else if (num == 5) {
        document.getElementsByClassName("pop-up-category")[4].style.display = "block";
    } else if (num == 6) {
        document.getElementsByClassName("pop-up-category")[5].style.display = "block";
    } else if (num == 7) {
        document.getElementsByClassName("pop-up-category")[6].style.display = "block";
    }
}


// Закрыть pop-up-category
let infoClose = (num) => {
    if (num == 1) {
        document.getElementsByClassName("pop-up-category")[0].style.display = "none";
    } else if (num == 2) {
        document.getElementsByClassName("pop-up-category")[1].style.display = "none";
    } else if (num == 3) {
        document.getElementsByClassName("pop-up-category")[2].style.display = "none";
    } else if (num == 4) {
        document.getElementsByClassName("pop-up-category")[3].style.display = "none";
    } else if (num == 5) {
        document.getElementsByClassName("pop-up-category")[4].style.display = "none";
    } else if (num == 6) {
        document.getElementsByClassName("pop-up-category")[5].style.display = "none";
    } else if (num == 7) {
        document.getElementsByClassName("pop-up-category")[6].style.display = "none";
    }
}

//calendar
const buttons = document.querySelectorAll('.calendar__button');
const texts = document.querySelectorAll('.calendar__text');

// Скрываем все тексты и показываем только для весны
texts.forEach(text => {
    text.style.display = 'none';
    if (text.dataset.season === 'spring') {
        text.style.display = 'block';
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // удаляем класс у всех кнопок
        buttons.forEach(button => {
            button.classList.remove('calendar__button_active');
        });
        // добавляем класс нажатой кнопке
        button.classList.add('calendar__button_active');

        const season = button.dataset.season;
        // скрываем все тексты и показываем только нужный
        texts.forEach(text => {
            text.style.display = 'none';
            if (text.dataset.season === season) {
                text.style.display = 'block';
            }
        });
    });
});

//alert
// Получаем кнопку "Уведомить меня"
let notifyButton = document.querySelectorAll('.event__btn');

// Добавляем обработчик клика на кнопку
for (let i = 0; i < notifyButton.length; i++) {
    notifyButton[i].addEventListener('click', function () {

        alert('Вы успешно зарегестрировались');

    });
}