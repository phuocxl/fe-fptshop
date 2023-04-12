
const APIProductApple = "http://localhost:8080/product/category?id=1"
const APIProduct = "http://localhost:8080/product/"
function start() {
    getProductApple(function(products) {
        renderProductApple(products)
    })

    

} start()

function getProductApple(callback) {
    fetch(APIProductApple)
    .then(response => {
        return response.json()
    })
    .then(callback) 
}

function renderProductApple(products) {
    const listProductApple = document.querySelector(".containe-product-discount-main-list")
    const dataProducts = products.data
    const htmls = dataProducts.map(function (dataProduct) {
        return `
        <div class="containe-product-discount-main">
        <div class="containe-product-discount-main-img" >
            <a href="" class="containe-product-discount-main-img-link">
                <img src="${dataProduct.image}" alt="" class="discount-main-img-item">
                <div class="product-lable">
                    <span class="badge-warning">Trả góp 0%</span>
                    <p>
                        <span class="badge-primary">Giảm 3.600.666 <sup>đ</sup></span>
                    </p>
                </div>
            </a>
        </div>
        <a href="" class="discount-main-title-name">${dataProduct.productName}</a>
        <div class="containe-product-discount-main-title">
            <div class="discount-main-title-price">
                <h5 class="discount-main-title-price-sale"><span class="discount-main-title-price-sale-item">${dataProduct.pricesSale}</span> <span class="discount-main-title-price-sale-d">đ</span></h5>
                <p class="discount-main-title-pricecorner">${dataProduct.price}đ</p>
            </div>
        </div>
        <div class="containe-product-discount-main-pay">
            <div class="containe-product-discount-main-pay-list">
                <img src="./assets/img/ic-tp-bank.webp" alt="" class="containe-product-discount-main-pay-img pay-tpbank">
                <img src="./assets/img/logo-moca.webp" alt="" class="containe-product-discount-main-pay-img pay-moca">
                <img src="./assets/img/vnpay400.webp" alt="" class="containe-product-discount-main-pay-img pay-vnp">
            </div>
            <p class="containe-product-discount-main-pay-item">Ưu đãi đến 1.1 triệu khi mở thẻ TBBANK EVO Nha!!!</p>
        </div>
        <div class="containe-product-discount-main-button">
            <button onclick="showProduct(${dataProduct.id})" class="containe-product-discount-main-buy btn">Mua Ngay</button>
            <button class="containe-product-discount-main-compare btn">So Sánh</button>
        </div>
    </div>
        `
    })

    listProductApple.innerHTML = htmls.join("")
}

function showProduct(id) {
    const idLocal = localStorage.getItem("iduser")
    if(idLocal != null) {
        localStorage.setItem("idOneProduct",id)
        window.location.href = "http://127.0.0.1:5500/product.html"
    } else {
        const modal = document.querySelector(".js-modal")
        const show = document.querySelector(".modal-login")
        modal.classList.add("open-login")
        show.classList.add("open-login")
    }
}