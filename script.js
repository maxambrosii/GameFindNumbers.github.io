(function() {
    function C() {
        e.globalCompositeOperation = "source-over";
        e.fillStyle = "rgba(8,8,12,0.65)";
        e.fillRect(0, 0, f, p);
        e.globalCompositeOperation = "lighter";
        x = q - u;
        y = r - v;
        u = q;
        v = r;
        for (var d = 0.86 * f, l = 0.125 * f, m = 0.5 * f, t = Math.random, n = Math.abs, o = z; o--;) {
            var h = A[o],
                i = h.x,
                j = h.y,
                a = h.a,
                b = h.b,
                c = i - q,
                k = j - r,
                g = Math.sqrt(c * c + k * k) || 0.001,
                c = c / g,
                k = k / g;
            if (w && g < m) var s = 14 * (1 - g / m),
                a = a + (c * s + 0.5 - t()),
                b = b + (k * s + 0.5 - t());
            g < d && (s = 0.0014 * (1 - g / d) * f, a -= c * s, b -= k * s);
            g < l && (c = 2.6E-4 * (1 - g / l) * f, a += x * c, b += y * c);
            a *= B;
            b *= B;
            c = n(a);
            k = n(b);
            g =0.5 * (c + k);
            0.1 > c && (a *= 3 * t());
            0.1 > k && (b *= 3 * t());
            c = 0.45 * g;
            c = Math.max(Math.min(c, 3.5), 0.4);
            i += a;
            j += b;
            i > f ? (i = f, a *= -1) : 0 > i && (i = 0, a *= -1);
            j > p ? (j = p, b *= -1) : 0 > j && (j = 0, b *= -1);
            h.a = a;
            h.b = b;
            h.x = i;
            h.y = j;
            e.fillStyle = h.color;
            e.beginPath();
            e.arc(i, j, c, 0, D, !0);
            e.closePath();
            e.fill()
        }
    }

    function E(d) {
        d = d ? d : window.event;
        q = d.clientX - m.offsetLeft - n.offsetLeft;
        r = d.clientY - m.offsetTop - n.offsetTop
    }

    function F() {
        w = !0;
        return !1
    }

    function G() {
        return w = !1
    }

    function H() {
        this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 *
            Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
        this.b = this.a = this.x = this.y = 0;
        this.size = 1
    }
    var D = 2 * Math.PI,
        f = 1E3,
        p = 560,
        z = 600,
        B = 0.96,
        A = [],
        o, e, n, m, q, r, x, y, u, v, w;
    window.onload = function() {
        try {
            var nlng = navigator.language || navigator.userLanguage;
            var lng = nlng.substr(0, 2).toLowerCase();
            if (lng == "ru" || lng == "uk" || lng == "be") document.getElementById("flw").innerHTML = ': <a href="https://www.twitter.com/spielzeugz" target="_blank">Twitter</a> / <a href="https://plus.google.com/116743952899287181520" target="_blank">G+</a> / <a href="https://vk.com/id266298870">VK</a>';
        } catch (e) {}
        o = document.getElementById("mainCanvas");
        if (o.getContext) {
            m = document.getElementById("outer");
            n = document.getElementById("canvasContainer");
            e = o.getContext("2d");
            for (var d = z; d--;) {
                var l = new H;
                l.x = 0.5 * f;
                l.y = 0.5 * p;
                l.a = 34 * Math.cos(d) * Math.random();
                l.b = 34 * Math.sin(d) * Math.random();
                A[d] = l
            }
            q = u = 0.5 * f;
            r = v = 0.5 * p;
            document.onmousedown =
                G;
            document.onmouseup = F;
            document.onmousemove = E;
            setInterval(C, 33);
        } else document.getElementById("output").innerHTML = "Sorry, needs a recent version of Chrome, Firefox, Opera, Safari, or Internet Explorer 9."
    }
})();



// Размеры нашей игры
let rows;
let columns;

let now = 0;

let numbers = [];

let timer;
let time = 0;

let tableElement = document.getElementById('myTable');
tableElement.addEventListener('click', init);

// Секундомер
function stopwatch() {
    time += 1;
    timerText.innerHTML = 'Время идёт: ' + time;
};

// Начать игру
function gameStart(lvl) {

    // Присвоение начальных размеров таблицы
    if (lvl == 'Easy') {
        rows = 3;
        columns = 3;
    } else if (lvl == 'Medium') {
        rows = 5;
        columns = 5;
    } else if (lvl == 'Hard') {
        rows = 6;
        columns = 6;
    };

    // TextBox
    btnEasy.style = 'display: none;';
    btnMedium.style = 'display: none;';
    btnHard.style = 'display: none;';

    // Показываем кнопку 'Рестарт'
    btnRestart.style = 'display: block;';

    // Текст с таймером
    timerText.style = 'display: block;';
    // Вывод времени
    timerText.innerHTML = 'Время идёт: ' + time + '<br><br><br>';
    // Строим таблицу
    CreateTable();
    // Запускаем секундомер
    timer = setInterval(stopwatch, 1000);
}

// Перезапустить игру
function gameRestart() {

    // Обнуляем переменные
    numbers = [];
    now = 0;
    time = 0;

    // Удаляем нашу таблицу по id
    let tbl = document.getElementById("MainTable");
    tbl.remove();

    // Останавливаем время
    clearInterval(timer);

    // Скрываем кнопку 'Рестарт'
    btnRestart.style = 'display: none;';

    // TextBox
    btnEasy.style = 'display: inline-block;';
    btnMedium.style = 'display: inline-block;';
    btnHard.style = 'display: inline-block;';




    // Базовая строка
    timerText.innerHTML = 'Всем Хеллооу!<br><br>Выберите уровень сложности игры: <br><br><br>';

};

// Построим таблицу
function CreateTable() {

    let table = document.createElement("table");
    table.setAttribute('id', 'MainTable');
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '5');
    table.setAttribute('align', 'center');
    table.setAttribute('display', 'block');


    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.setAttribute('class', 'td');
            td.style.cssText = 'font-size: ' + (Math.floor(Math.random() * (50 - 13)) + 13) + 'px;';
            td.style.color = getRandomColor();
            td.innerHTML = getRandomNumber(1, ((columns * rows) + 1));

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("myTable").appendChild(table);
};

// Отслеживание нажатий на ячейки таблицы
function init(event) {

    // Нажал на ячейку
    let cell = event.target;

    // Проверяем ячейку
    let check = cell.classList.contains('td') && !cell.classList.contains('select');

    if (check) {

        // Число из ячейки в переменную
        let val = +cell.innerHTML;

        if (val === now + 1) {
            now += 1;
            cell.classList.add('select');

            if (val === rows * columns) {

                timerText.innerHTML = '<img src="win.png" alt="" > <p><h1>Вы выиграли!</h1></p> Ваше время: ' + time + ' сек.' + '<br>' + '<br>' + ' <p>Поздравляем вас!</b> Надеюсь вам понравилась игра, попробуйте еще раз! </p>';

                clearInterval(timer);
            }
        }

    }
};

function randomInterval(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};


// Возвращает рандомное число в диапазоне (опционально)
function getRandomNumber(min, max) {
    let number = Math.floor(min + Math.random() * (max - min))
    if (numbers.includes(number)) return getRandomNumber(min, max)
    else {
        numbers.push(number)
        return number;
    }
};

// Возвращает рандомный цвет
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};







