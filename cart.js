let items = [
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
               <button class="decrease-button" onclick="updateQuantity('decrement', ${item?._id}, ${item.price}, ${index});">-</button>
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


function updateQuantity(type, id, price, index) {
   const countspan = document.getElementById(`count${id}`);

   const PriceElement = document.getElementById(`price${id}`);

   let currentcount = parseFloat(countspan.textContent);


   if (type === 'increment') {
      currentcount = currentcount + 1;

   } else if (type === 'decrement') {
      if (currentcount > 1) {
         console.log('call');

         currentcount = currentcount - 1;
      } else {
         removeItem(index)
      }
   }

   countspan.textContent = currentcount;

   const Totalprice = price * currentcount;
   PriceElement.textContent = parseFloat(Totalprice);
   Totalprice.toFixed(2);
   updateSummary();
}




function removeItem(index) {
   console.log(index, "index")
   items.splice(index, 1)
   rendercartitems();
}



function updateSummary() {
   let subTotal = 0;  
   items?.forEach(item => {
      let priceElement = document.getElementById(`price${item?._id}`);
      let value = parseFloat(priceElement.textContent);
      subTotal += value;
   })

   let discount = 2.00;
   let Shipping = 4.00;

   let total = subTotal - discount + Shipping

   document.getElementById('total').textContent = subTotal.toFixed(2);
   document.getElementById('Discount').textContent = discount.toFixed(2);
   document.getElementById('Shipping').textContent = Shipping.toFixed(2);
   document.getElementById('Balance').textContent = total.toFixed(2);

   console.log(subTotal, discount, Shipping,  total);
}