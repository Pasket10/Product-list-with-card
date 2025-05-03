
// Variables
    const cards = document.querySelectorAll('.dessert-item'),
        shoppingCardContent = document.querySelector('.contents tbody'),
        emptyMessage = document.querySelector('.blank'),
        dessertInfo = document.querySelector('.dessert-infos'),
        table = document.querySelector('.contents'),
        confirmOrder = document.querySelector('.confirm_order'),
        summary = document.querySelector('.total'),
        summaryValue = document.querySelector('.total-price'),
        cardMessage = document.querySelector('.card_message');
        let cart = {};


    cards.forEach((card) => {
        const addToCartButton = card.querySelector('.card');
        const quantitySelector = card.querySelector('.quantity-selector');
        const increaseButton = card.querySelector('.increase');
        const decreaseButton = card.querySelector('.decrease');
        const quantityDisplay = card.querySelector('.quantity');
        const img = card.querySelector('.img');
        const productId = card.getAttribute('data-id');
        const productName = card.querySelector(".name1").textContent;
        const productPrice = card.querySelector(".price").textContent;
        let quantity = parseInt(quantityDisplay.textContent);


        // Initialiser la quantité
        addToCartButton.addEventListener('click', (e) => {
            addToCartButton.style.display = "none";
            quantitySelector.style.transform = "scale(1)";
            quantitySelector.style.display = "flex";
            quantityDisplay.textContent = 0;
            img.style.border = '2px solid hsl(14, 86%, 42%)';
            
            // productInfo();
      
            // getCardInfo();
            // Efacer le message 
        });

        // Ajoute au panier et Augmenter la quantité
        increaseButton.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;

            productInfo();
      
            getCardInfo();
            
            emptyMessage.style.display = 'none';
            table.style.display = '';
            table.style.width = '100%';
            confirmOrder.style.display = 'block';
            summary.style.display = 'flex';
            cardMessage.style.display = 'flex';

            summaryValue.textContent = `$${Object.values(cart).reduce((acc, item) => acc + item.total, 0)}`;
        });
        
        decreaseButton.addEventListener('click', () => {
            
            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity;
      
                if (quantity === 0) {
                  delete cart[productId];
                    addToCartButton.style.display = "block";
                    quantitySelector.style.display = "none";
                    // addToCartButton.style.alignitem = "center";
                    addToCartButton.style.transform = "scale(1)";
                    img.style.border = 'none';
                    
                } else {
                  cart[productId].quantity = quantity;
                }
      
                getCardInfo();
            }

            if (cart.length === 0) {
                emptyMessage.style.display = 'block';
                table.style.display = 'none';
                table.style.width = '0%';
                  
              }
            
        });

        function productInfo() {
            let total = productPrice * quantity;

            cart[productId] = {
                image: img.src,
                name: productName,
                price: productPrice,
                quantity: quantity,
                total : total
              };

        }



        function getCardInfo() {

            shoppingCardContent.innerHTML = '';
            Object.entries(cart).forEach(([id, item]) => {
                const row = document.createElement('div');
            row.classList.add('prod');
        
            row.innerHTML = `
                
                <di class= 'title'>
                    <div class='imge'>
                        <img src="${item.image}" width=100">
                    </div>
                    
                    <div class= 'infoss'>
                        <p class= 'prod'>${item.name}</p>
                        <p class = 'curency'>${item.quantity}x   <span class='curPrice'>@$${item.price}</span>  <span class='total'>$${item.total}</span></p>
                    </div>
                    
                    <div class= 'rBtn'>
                    <p><a href="#" class="remove">X</a></p>
                    </div>
                </di>
                
            `;
            shoppingCardContent.appendChild(row);
        
            const removeButton = row.querySelector('.remove');
            removeButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentElement.parentElement.parentElement.remove();
                
                addToCartButton.style.display = "block";
                quantitySelector.style.display = "none";
                // addToCartButton.style.alignitem = "center";
                addToCartButton.style.transform = "scale(1)";
                img.style.border = 'none';
                quantity = 0;
                quantityDisplay.textContent = quantity;

                // productInfo();
                // summaryValue.textContent = `$${Object.values(cart).reduce((acc, item) => acc + item.total, 0)}`;
            });
            });
        
            
            
        }
        
    });

     


