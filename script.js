ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.750869, 37.540730],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl']
    });

    var myPlacemark = new ymaps.Placemark([55.750869, 37.540730], {
        hintContent: 'Мы здесь!',
        balloonContent: 'Ваш офис'
    });

    myMap.geoObjects.add(myPlacemark);
}

document.getElementById("email-link").addEventListener("click", function(event) {
    event.preventDefault();

    if (isMobileDevice()) {
        window.location.href = "mailto:ITGOcomp@yandex.ru?subject=Запрос&body=Текст%20сообщения";
    } else {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ITGOcomp@yandex.ru&su=Запрос&body=Текст%20сообщения", "_blank");
    }
});

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

window.onload = function() {
    var marquee = document.querySelector('marquee');
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
        marquee.style.display = 'none';
    }
};
