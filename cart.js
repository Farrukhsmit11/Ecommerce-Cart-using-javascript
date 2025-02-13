const items = [
   {
      _id: 1,
      name: "Shoes1",
      price: 599,
      color: "blue",
      imgURL: "Images/shoes img1.webp"
   },

   {
      _id: 2,
      name: "Nike Orignal  Sneakers",
      price: 870,
      color: "red",
      imgURL: "Images/shoes img2.jpg"
   },

   {
      _id: 3,
      name: "White Apple Watch",
      price: 999,
      color: "white",
      imgURL: "Images/shoes img 3.avif"
   }
];



function myMap(items) {
   return items.map((item, index) => {
      return `
      <div class="cart-items">
            <i class="fa-solid fa-xmark cross-icon" onclick="viewDetails(${item?._id})"></i>
            <i class="fa-solid fa-heart heart-icon"></i>
            <img class="shoes1-img" src="${item.imgURL}" alt="${item.name}">
            <div class="product-info">
               <h1>${item.name}</h1>
               <p>${item.color}</p>
            </div>
            <div class="buttons">
               <button class="add-button" onclick="updateQuantity('increment', ${item?._id}, ${item.price})">+</button>
               <span id="count${item?._id}">1</span>
               <button class="decrease-button" onclick="updateQuantity('decrement', ${item?._id}, ${item.price})">-</button>
               <span id="price${item?._id}" class="price">${item.price}</span>
            </div>
         </div>
      `;
   });
}




function rendercartitems() {
   const shoppingcart = document.getElementById('shopping-cart');
   shoppingcart.innerHTML = (myMap(items));
}


rendercartitems();


const num1 = document.getElementById("num1");


function updateQuantity(type = 'increment', id, price) {
   // function updateQuantity(type = 'increment', id, price, obj) {
   // const id = obj?._id;
   // const price = obj?.price;
   const countspan = document.getElementById(`count${id}`);

   const PriceElement = document.getElementById(`price${id}`);

   let currentcount = parseFloat(countspan.textContent);

   if (type === 'increment') {
      currentcount = currentcount + 1;

   } else if (type === 'decrement' && currentcount !== 1) {
      currentcount = currentcount - 1;
   }

   countspan.textContent = currentcount;

   const Totalprice = price * currentcount;

   PriceElement.textContent = parseFloat(Totalprice);
   Totalprice.toFixed(0);
   updateSummary();
}



function updateSummary() {
   let subTotal = 0;    // store total sum of the item prices
   items?.forEach(item => {
      let priceElement = document.getElementById(`price${item?._id}`);
      let value = parseFloat(priceElement.textContent);
      subTotal += value;
   })

   let discount = -2.00;
   let Shipping = 4.00;
   let Tax = 0.00;
   let Balance = 10.00

   let balance = subTotal + discount + Shipping + Balance

   document.getElementById('total').textContent = subTotal.toFixed(2);
   document.getElementById('Discount').textContent = subTotal.toFixed(2);
   document.getElementById('Shipping').textContent = subTotal.toFixed(2)
   document.getElementById('Tax').textContent = subTotal.toFixed(2);
   document.getElementById('Balance').textContent = subTotal.toFixed(2);

   document.getElementById('total').textContent = subTotal;

   document.getElementById('subtotal');

   console.log("Updated Summary:", subTotal, discount, Shipping, Tax, balance);
}