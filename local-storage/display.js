export default function displayProducts() {
  let productList = document.getElementById("productList");
  productList.innerHTML = "";

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach((p) => {
    let li = document.createElement("li");
    li.textContent = `${p.name} - ₹${p.price}`;
    productList.appendChild(li);
  });
}
