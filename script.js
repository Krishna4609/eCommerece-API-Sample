const API_URL = 'https://fakestoreapi.com/products'
const CATEGORY_URL = 'https://fakestoreapi.com/products/category/'

const main = document.getElementById('main')
async function getProduct(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    showProducts(data)
} 
function showProducts(products){
    main.innerHTML = ''
    products.forEach(product => {
        const {title, description, price,image} = product
        
        const prodEl = document.createElement('div')
        prodEl.classList.add('product-card')

        prodEl.innerHTML=`<div class="prod-img"><img src="${image}" alt=""></div>
        <div class="prod-desc"><span class="prod-title">${title}</span>${description}<span class="prod-price">Price &#8377;${price}</span></div>
        `

        main.appendChild(prodEl)
    });
}

getProduct(API_URL)