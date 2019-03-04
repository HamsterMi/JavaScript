let products = {
  createProducts(shop) {
    let productsEl = document.createElement("div");
    shop.appendChild(productsEl);
    productsEl.id = "products";
    this.createProductEl(productsEl);
    /* return productsEl; */
  },
  createProductEl(productsEl) {
    assortmemt.forEach(item => {
      let productEl = document.createElement("div");
      productEl.innerHTML = item.name + "\n" + "price:" + item.price + "$";
      productEl.className = "product";
      productsEl.appendChild(productEl);
      this.createButtonBuy(item, productEl);
    });
  },

  createButtonBuy(item, products) {
    let buttonBuyEl = document.createElement("button");

    buttonBuyEl.innerHTML = "buy";
    products.appendChild(buttonBuyEl);
    buttonBuyEl.type = "submit";

    buttonBuyEl.addEventListener("click", event => {
      event.preventDefault();
      basket.changeTotalPrice(item);
    });
  }
};
