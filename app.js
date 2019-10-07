
let prices = [15000 , 10000 , 1000 , 20000];
let items = ["Стол" , "Стул" , "Полотенце" , "Зеркало"];
let i = 0;
let discount = 0.5; // 50 % скидка

let list = '';

list += '<ul>';
	
	for (i = 0; i < items.length; i++) {
		list += '<li>';
		let newPrice = prices[i] * discount;

		list += items[i] + ' | Старая цена : ' + prices[i] + ' | Новая Цена : ' + newPrice;

		list += '</li>';
	}


list += '</ul>';

document.getElementById('demo').innerHTML = list;