
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnBuys = $$(".containe-product-discount-main-buy")

btnBuys.forEach((btnBuy) => {
    btnBuy.addEventListener("click", clickBtnBuy)
});

function clickBtnBuy(e) {
    e.stopPropagation()
    const btnItem = e.target
    const product = btnItem.parentElement
    const productMain = product.parentElement
    const img = productMain.querySelector(".discount-main-img-item").src
    const name = productMain.querySelector(".discount-main-title-name").innerText
    const price = productMain.querySelector(".discount-main-title-price-sale-item").innerText
    addCart(img, name, price)
}
function addCart(img, name, price) {
    const cart = $(".header-cart-heading-list")
    if(cart) {
        const cartItem = document.createElement("ul")
        cartItem.classList.add("header-cart-heading-item")
        cartItem.innerHTML = `<li class="header-cart-heading-item-list">
        <img src="${img}" alt="" class="header-cart-img">
        <div class="header-cart-heading-info">
            <div class="header-cart-heading-info-item">
                <h5 class="header-cart-heading-info-item-name">${name}</h5>
                <div class="header-cart-heading-info-item-price-ward">
                    <span class="header-cart-heading-info-item-price">${price}</span>
                    <span class="header-cart-heading-info-item-multiply">x</span>
                    <input style="width: 30px; outline: none; border: none; background-color: transparent" type="number" value="1" min="1">
                    
                </div>
            </div>
            <div class="header-cart-heading-description">
                <span class="header-cart-heading-description-remove">Xóa</span>
            </div>
        </div>
    </li>`
    cart.appendChild(cartItem)
    deleteCart()
    handelSumPrice()
    sumCount()
    }

}

const showCart = $(".js-cart")
const showCartOpen = $(".header-cart-notify-list")
const closeCart = document.body


function handelShowCart(e) {
    showCartOpen.classList.add("oppen-cart")
    e.stopPropagation()
}

function handelCloseCart() {
    showCartOpen.classList.remove("oppen-cart")
}
showCart.addEventListener("click",handelShowCart )

closeCart.addEventListener("click",handelCloseCart)

// total sumprice

function handelSumPrice() {
    const sumPrices = $$(".header-cart-heading-item")
    let totalSum = 0
       for(let i = 0; i < sumPrices.length; i++ ) {
        const inputValue = sumPrices[i].querySelector("input").value
        const priceValue = sumPrices[i].querySelector(".header-cart-heading-info-item-price").innerText
        const newPriceValue = priceValue.split(".").join('')
        const sum = inputValue * newPriceValue
        totalSum +=sum
    }
    const totalCart = $(".header-cart-price")
    totalCart.innerText =  totalSum.toLocaleString('de-DE')
    changeInput()
}

//change input 
function changeInput() {
    const cartItems = $$(".header-cart-heading-item")
    for(let i = 0; i< cartItems.length; i++) {
        const input =cartItems[i].querySelector("input")
        input.addEventListener("change", ()=>handelSumPrice())
    }
}

//delete cart
function deleteCart() {
    const cartItems = $$(".header-cart-heading-item")
    for(let i = 0; i< cartItems.length; i++) {
        const deleteItems = $$(".header-cart-heading-description-remove")
        deleteItems[i].addEventListener("click", (e) => {
            const deleteItem = e.target
            const deletes = deleteItem.parentElement.parentElement.parentElement.parentElement
            deletes.remove()
            handelSumPrice()
            sumCount()
        })
    }
}
// count cart 
function sumCount() {
    const counts = $(".header-cart-notify-heading")
    const countCart = $$(".header-cart-heading-item")
    let sum = 0
    const index =countCart.length
    sum += index
    counts.innerText = sum
}


