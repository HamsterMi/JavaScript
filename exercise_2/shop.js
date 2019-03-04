/* 2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить»,
 при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа */

let summ = 0;
let shoppingListEl = [];

let shop = {
  createShop() {
    let shopEl = document.createElement("div");
    shopEl.id = "shop";
    document.body.appendChild(shopEl);
    products.createProducts(shopEl);
    basket.createBasket(shopEl, summ);
  }
};
shop.createShop();
