/* 1. Доработать функцию замены картинки в галерее таким образом, 
чтобы она проверяла наличие картинки по указанному в src адресу. */

let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    let appDiv = document.getElementById("big_pic");
    appDiv.innerHTML = "";
    let img = document.createElement("img");
    img.src = "img/gallery/big/" + images[i].id.toString() + ".png";
    img.onerror = function() {
      img.alt = "изображение не найдено";
    };
    appDiv.appendChild(img);
  });
}
