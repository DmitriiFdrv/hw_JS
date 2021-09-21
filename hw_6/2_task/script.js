var good0 = {
    title: 'laptop Arsus F1',
    imageSrc: 'products/prod_1.jpg',
    price: 55000,
    count: 1,
};
var good1 = {
    title: 'laptop Arsus Booker',
    imageSrc: 'products/prod_2.jpg',
    price: 34000,
    count: 1,
};
var good2 = {
    title: 'laptop HarryPotter Z',
    imageSrc: 'products/prod_3.jpg',
    price: 29000,
    count: 1,
};
var good3 = {
    title: 'laptop Arcersus Transformer',
    imageSrc: 'products/prod_4.jpg',
    price: 58000,
    count: 1,
};

var laptop = [good0, good1, good2, good3];

var sumlaptop = 0;
var countlaptops = 0;

function buy() {
    var catalog = document.querySelector('.catalog');
    for (i = 0; i < laptop.length; i++) {
        var elem = document.createElement('div');
        elem.classList.add('good__item');
        elem.append(document.createTextNode(laptop[i].title));
        var elemImg = document.createElement('img');
        elemImg.classList.add('img');
        elemImg.src = laptop[i].imageSrc;
        elem.append(elemImg);

        elem.append(document.createTextNode('Цена: ' + laptop[i].price + '\u20bd'));

        elemBtn = document.createElement('button');
        elemBtn.innerText = 'Купить';
        elemBtn.classList.add('buyBtn');
        elemBtn.setAttribute('id', 'b' + i);
        elemBtn.onclick = addlaptops;
        elem.appendChild(elemBtn);

        catalog.appendChild(elem);
    }
}

function addlaptops(e) {
    var button = e.target;
    var arrayBtn = button.id;
    var id = arrayBtn[1];
    var chooselaptop = laptop[id];
    var chooselaptops = document.querySelector('.choose_laptops');

    var tr = chooselaptops.insertRow();
    var td = tr.insertCell();

    sumlaptop += chooselaptop.price;
    td.appendChild(document.createTextNode(chooselaptop.title + chooselaptop.count + ' шт.' + ' / ' + ' Цена ' + chooselaptop.price + ' \u20bd'));
    document.querySelector('.sum').textContent = 'Сумма: ' + sumlaptop + ' \u20bd';
}
buy();