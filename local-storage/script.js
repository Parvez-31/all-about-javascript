import displayProducts from "./display.js";
window.onload = function () {
  displayProducts();
};

document.getElementById("btn").addEventListener("click", addProduct);

function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;

  if (!name || !price) {
    alert("Please enter product name and price!");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products"));

  if (!Array.isArray(products)) {
    products = [];
  }

  let newProduct = {
    id: Date.now(),
    name: name,
    price: Number(price),
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  displayProducts();
}
