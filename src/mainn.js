let carts = document.querySelectorAll('.add-to-cart')

let products =[
  {
    name: "Футбольний м'яч",
    tagname: "football",
    price: 500,
    inCart: 0,
  },
  {
    name: "Кросівки Nike",
    tagname: "nike",
    price: 3100,
    inCart: 0
  },

  {
    name: "Кросівки Adidas",
    tagname: "Adidas",
    price: 2360,
    inCart: 0
  },
  {
    name: "Кросівки Puma",
    tagname: "Puma",
    price: 2000,
    inCart: 0
  },
  {   name: "Футбольна форма",
    tagname: "uniform",
    price: 1000,
    inCart: 0
  },
  {
    name: "Футбольний м'яч",
    tagname: "football2",
    price: 910,
    inCart: 0
  }
]


for(let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', function(){
    cartNumbers(products[i]);
    totalPrice(products[i]);
  });
}

function loadCartsNumber(){
  let productNumbers = sessionStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector(".cart span").textContent = productNumbers;

  }
}

function cartNumbers(product){

  let productNumbers = sessionStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers){
    sessionStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  }
  else{
    sessionStorage.setItem('cartNumbers', 1);
    document.querySelector(".cart span").textContent = 1;

  }
  setItems(product);
}

function setItems(product) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null){

    if(cartItems[product.tagname] == undefined){
      cartItems = {
        ...cartItems,
        [product.tagname]: product
      }
    }
    cartItems[product.tagname].inCart += 1;
  }

  else{
    product.inCart = 1;
    cartItems = {
      [product.tagname]: product
    }
  }
  sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalPrice(product){

  let cartPrice = sessionStorage.getItem("totalPrice");

  if(cartPrice != null){
    cartPrice = parseInt(cartPrice);
    sessionStorage.setItem("totalPrice", cartPrice + product.price);
  }
  else{
    sessionStorage.setItem("totalPrice", product.price);
  }
}
function displayCart(){
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer=document.querySelector(".products");
  let cartPrice = sessionStorage.getItem("totalPrice");

  if(cartItems && productContainer ){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
            <div class="product">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price} UAH</div>
            <div class="quantity">                          
            <span>${item.inCart}</span>
            </div>
            <div class="total">
                ${item.inCart * item.price},00 UAH
            </div>
            `;

    });

    productContainer.innerHTML += `
        <div class="basketTotalContainer>
            <h4 class="basketTotalTitle></h4>
            <h4 class="basketTotal">${cartPrice},00 UAH</h4>

        `;

  }
}

document.querySelector(".purchase").onclick = function(){
  alert("Дякуємо за покупку! Для оновлення корзини перейдіть на головну сторінку або оновіть сторінку!");
  sessionStorage.clear();
}


loadCartsNumber();
displayCart();