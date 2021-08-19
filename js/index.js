// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPrice = price * quantity;

  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {                                           // adicionar mais uma fileira de produtos //
  // ITERATION 2                                            
  const listProducts = document.getElementsByClassName("product");

  let total = 0;

  for (let i = 0; i < listProducts.length; i++){
    total += updateSubtotal(listProducts[i]);
  }

  // ITERATION 3                                                     // calcular o total final //
  const totalPriceList = document.querySelector("#total-value span");
  totalPriceList.innerHTML = total;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
