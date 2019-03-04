let basket = {
  createBasket(shop) {
    let basketEl = document.createElement("div");
    shop.appendChild(basketEl);
    basketEl.id = "basket";
    this.createbasketPrice(basketEl);
    this.createBasketList(basketEl);
  },

  createbasketPrice(basket) {
    let basketPriceEl = document.createElement("div");
    basket.appendChild(basketPriceEl);
    basketPriceEl.id = "basketPrice";
  },
  createBasketList(basket) {
    let basketListEl = document.createElement("div");
    basket.appendChild(basketListEl);
    basketListEl.id = "basketList";
    basketListEl.innerHTML = "Your basket is still empty!";
  },

  changeTotalPrice(item) {
    let basketPriceEl = document.getElementById("basketPrice");
    let basketListEl = document.getElementById("basketList");
    summ += item.price;
    //добавляем товар в корзину
    // лежит ли этот товар в корзине
    //если лежит, увеличиваем его количество
    if (shoppingListEl.includes(item)) {
      item.number++;
    }
    //если нет пушим объект в массив
    else {
      shoppingListEl.push(item);
      item.number = 1;
    }

    let shoppingListElString = " ";
    shoppingListEl.forEach(product => {
      shoppingListElString +=
        product.name + "........." + product.number + "pcs       ";
    });

    basketPriceEl.innerHTML = "total price: " + summ + " $";
    basketListEl.innerHTML =
      "In your basket:      " + "\n" + shoppingListElString;
  }
};
