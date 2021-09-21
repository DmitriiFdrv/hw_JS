var popart = document.querySelectorAll('img');
for (var i = 0; i < popart.length; i++) {
    popart[i].onclick = function (e) {
        var bigImage = document.getElementById('imgBig');
        bigImage.src = e.target.src.replace('small', 'big');
        bigImage.onerror = function () {
            alert('Ошибка! Изображение отсутствует!');
        }
    }
}