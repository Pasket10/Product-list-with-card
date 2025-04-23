
// Variables
    const cards = document.querySelectorAll('.dessert-item'),
        shoppingCardContent = document.querySelector('.contents tbody'),
        emptyMessage = document.querySelector('.blank'),
        table = document.querySelector('.contents');
        let cart = {};


    cards.forEach((card) => {
        const addToCartButton = card.querySelector('.card');
        const quantitySelector = card.querySelector('.quantity-selector');
        const increaseButton = card.querySelector('.increase');
        const decreaseButton = card.querySelector('.decrease');
        const quantityDisplay = card.querySelector('.quantity');
        const img = card.querySelector('.img');
        const productId = card.getAttribute('data-id');


        // Initialiser la quantité
        addToCartButton.addEventListener('click', (e) => {
            addToCartButton.style.display = "none";
            quantitySelector.style.transform = "scale(1)";
            quantitySelector.style.display = "flex";
            quantityDisplay.textContent = 1;
            img.style.border = '2px solid hsl(14, 86%, 42%)';

            // Ajouter au panier
            
                
    
                    if (e.target) {
                        const cardInfo = e.target.parentElement.parentElement.parentElement;
                        getCardInfo(cardInfo);
                        
                    }
                
                    emptyMessage.style.display = 'none';
                    table.style.display = '';
                    table.style.width = '100%';
                
                
            
        });

        // Augmenter la quantité
        increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityDisplay.textContent);
            quantity++;
            quantityDisplay.textContent = quantity;

        });

        
    });
    

    

    // Diminuer la quantité (minimum 1)
    // decreaseButton.addEventListener("click", (e) => {
    //     if (quantity >= 1) {
    //         quantity--;
    //         e.target.parentElement.parentElement.parentElement.remove();
    //         quantityDisplay.textContent -= quantity;

    //     }
    // });
 
// }


function getCardInfo(card) {

    // const info;
    const info = {
        
        image: card.querySelector('img').src,
        title: card.querySelector('.name1').textContent,
        price: card.querySelector('.price').textContent,
        qtity: card.querySelector('.quantity').textContent,
        id: card.getAttribute('data-id')
        
    }

    addDessertsInCard(info);
}

function addDessertsInCard(card) {
    const row = document.createElement('div');
    row.classList = 'prod';

    row.innerHTML = `
        
        <di class= 'title'>
            <div class='imge'>
                <img src="${card.image}" width=100>
            </div>
            
            <div class= 'infoss'>
                <p class= 'prod'>${card.title}</p>
                <p class = 'curency'>${card.qtity}x   @${card.price}</p>
                
            </div>
            
            <div class= 'rBtn'>
            <p><a href="#" class="remove">X</a></p>
            </div>
        </di>
        
    `;
    
    shoppingCardContent.appendChild(row);

    // row.innerHTML += `
    //     <div class='total'>
    //         <p>Total: ${card.qtity * card.price}</p>
    //     </div>`


    const removeButton = row.querySelector('.remove');
    removeButton.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
            
    });

}



