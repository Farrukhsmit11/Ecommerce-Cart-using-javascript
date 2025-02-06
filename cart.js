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
            <i class="fa-solid fa-xmark cross-icon" onclick="viewDetails(${index})"></i>
            <i class="fa-solid fa-heart heart-icon"></i>
            <img class="shoes1-img" src="${item.imgURL}" alt="${item.name}">
            <div class="product-info">
               <h1>${item.name}</h1>
               <p>${item.color}</p>
            </div>
            <div class="buttons">
               <button class="add-button" onclick="updateQuantity('increment', ${index}, ${item.price})">+</button>
               <span id="count${index}">1</span>
               <button class="decrease-button" onclick="updateQuantity('decrement', ${index}, ${item.price})">-</button>
               <span id="price${index}" class="price">${item.price}</span>
            </div>
         </div>
      `;
   });
}


function rendercartitems() {
   const shoppingcart = document.getElementById('shopping-cart');
   shoppingcart.innerHTML = (myMap(items));
}


function viewDetails(index) {
   console.log(items[index]);
}

rendercartitems();


const num1 = document.getElementById("num1");


function updateQuantity(type = 'increment', id, price) {
   // function updateQuantity(type = 'increment', obj) {
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
}



function updateSummary() {
   let count1 = document.getElementById('count1').textContent
   let count2 = document.getElementById('count2').textContent
   let count3 = document.getElementById('count3').textContent

   let subtotal = count1 + count2 + count3;

   subtotal = subtotal + Shipping-Discount + Shipping & Handling

   console.log(subtotal);

}