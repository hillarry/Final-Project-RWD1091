let products = [
        {
            "imgSrc" : "../images/product1.jpg",
            "name" : "Mini Backpack",
            "price" : "$150",
            "category" : "featured"
        },
        {
            "imgSrc" : "../images/product2.jpg",
            "name" : "Sports Wear",
            "price": "$300",
            "category" : "featured"
        },
        {
            "imgSrc" : "../images/product5.jpg",
            "name" : "Men's Wear",
            "price" : "$150",
            "category" : "featured"
        },
        {
            "imgSrc" : "../images/product4.jpg",
            "name" : "Desingner bag",
            "price" : "$150",
            "category" : "promo"
        },
        {
            "imgSrc" : "../images/product3.jpg",
            "name" : "Watch",
            "price" : "$150",
            "category" : "promo"
        },
        {
            "imgSrc" : "../images/product7.jpg",
            "name" : "Boots",
            "price" : "$150",
            "category" : "promo"
        },
        {
            "imgSrc" : "../images/product8.jpg",
            "name" : "Black backpack",
            "price" : "$300",
            "category" : "trend"
        },
        {
            "imgSrc" : "../images/product9.jpg",
            "name" : "White Coat",
            "price" : "$300",
            "category" : "trend"
        },
        {
            "imgSrc" : "../images/product10.jpg",
            "name" : "Leather",
            "price" : "$300",
            "category" : "trend"
        }
    ]
console.log(products);
let html = '';
const productCenter = document.getElementById('store-products');
products.forEach(product =>{
    html += `
        <div class ="product-item ${product.category}">
            <div class = "overlay">
                <a href = "" class = "product-thumb">
                    <img src = "${product.imgSrc}" alt='' />
                </a>
            </div>

            <div class= "product-info">
                <span>${product.name}</span>
                <h4>${product.price}</h4>
            </div>

            <ul class="icons">
                <span><i class="fas fa-heart"></i></span>
                <span><i class="fas fa-search"></i></span>
                <span><i class="fas fa-shopping-cart"></i></span>
            </ul>

        </div>
    `;
});
productCenter.innerHTML = html;
const buttons = document.querySelectorAll('.section-title');
console.log(buttons);
const storeProducts = document.querySelectorAll('.product-item');
console.log(storeProducts);
for (i=0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter);

        storeProducts.forEach((product) => {
            if ( filter == 'all'){
                product.style.display = "block";
            }
            else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block';
                }
                else{
                    product.style.display = 'none';
                }
            }
        });

    });
};
