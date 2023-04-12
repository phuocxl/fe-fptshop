
const APIProduct = "http://localhost:8080/product/"
const idProduct = JSON.parse(localStorage.getItem("idOneProduct"))

function start() {
    getProduct(function(products) {
        renderProductOne(products)
        renderOrder(products)
    })
}
start()

function getProduct(callback) {
    fetch(APIProduct+idProduct)
    .then(response => {
        return response.json()
    })
    .then(callback) 
}

function renderProductOne(product) {
    const productElement = document.querySelector(".product-main")
    const dataProduct = product.data
    const html = `
    <div class="product-main-header">
    <h2 class="product-main-name">
        ${dataProduct.productName}
    </h2>
    <div class="product-main-rating separate">
        <div class="product-main-rating-start">
            <div class="product-main-rating-start-icon">
                <i class="fa-solid fa-star"></i>  
                <i class="fa-solid fa-star"></i>  
                <i class="fa-solid fa-star"></i>  
                <i class="fa-solid fa-star"></i>  
                <i class="fa-solid fa-star"></i>  
            </div>
            <p class="product-main-rating-evaluate">1360 đánh giá</p>
        </div>
        <p class="product-main-rating-ask">261 hỏi & đáp</p>
    </div>
</div>
<div class="product-main-center">
    <div class="product-main-center-left">
        <div class="product-main-center-left-box">
            <img class="product-main-center-left-box-img" src="https://images.fpt.shop/unsafe/fit-in/585x429/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/9/638088192745255470_product-box-desktop.png" alt="">
            <div class="left-box-lixi">
                <p>Lì xì <span>7.000.000đ</span></p>
            </div>
        </div>
        <img class="product-main-center-left-img" src="${dataProduct.image}" alt="">
    </div>
    <div class="product-main-center-right">
        <div class="product-main-center-right-price">
            <div class="right-price-main">${dataProduct.pricesSale}đ</div>
            <div class="right-price-sub">${dataProduct.price}đ</div>
        </div>
        <div class="product-main-center-right-sale">
            <div class="right-sale-title">Nhận ngay khuyến mại đặc biệt</div>
            <ul class="right-sale-list">
                <li class="right-sale-item">
                    <i class="fa-solid fa-check"></i>
                    <div class="right-sale-list-title"><span>Lì xì ngay 600.000đ áp dụng đến 13/01</span></div>
                </li>
                <li class="right-sale-item">
                    <i class="fa-solid fa-check"></i>
                    <div class="right-sale-list-title"><span>Trả góp 0%</span></div>
                </li>
                <li class="right-sale-item">
                    <i class="fa-solid fa-check"></i>
                    <div class="right-sale-list-title"><span>Lì xì thêm 10% Tai nghe Xiaomi Earphones 2 Basic khi mua kèm máy</span></div>
                </li>
                <li class="right-sale-item">
                    <i class="fa-solid fa-check"></i>
                    <div class="right-sale-list-title"><span>Bảo hành 18 tháng</span></div>
                </li>
                <li class="right-sale-item">
                    <i class="fa-solid fa-check"></i>
                    <div class="right-sale-list-title"><span>Thu cũ đổi mới trợ giá ngay 15% đến 3 triệu (SmartExchange)</span></div>
                </li>
                <li class="right-sale-item">
                    <i class="fa-solid fa-check"></i>
                    <div class="right-sale-list-title"><span>Cơ hội trúng 1 trong 68 Gian Bếp Như Ý</span></div>
                </li>
            </ul>

        </div>
        <div class="right-btn">
            <button onclick="showOrder()" class="right-btn-full">
                <div><strong>MUA NGAY</strong></div>
                <P>Miễn phí giao hàng hoặc nhận tại shop</P>
            </button>
            <div class="right-btn-half">
                <div class="right-btn-half-item">
                    <div><strong>Trả góp 0%</strong></div>
                    <p>Duyệt nhanh qua điện thoại</p>
                </div>
                <div class="right-btn-half-item">
                    <div><strong>Trả góp qua thẻ</strong></div>
                    <p>Visa, Master Card</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `
    productElement.innerHTML = html
}

function renderOrder(product) {
    
        const formOrder = document.querySelector(".modal-cart")
    const dataProduct = product.data
    const html = `
    <header class="modal-cart-header">
                <h2 class="modal-cart-header-text">Có 1 sản phẩm trong giỏ hàng</h2>
                <i onclick="closeLogin()" class="ti-close modal-login-header-close"></i>
            </header>
            <div class="modal-cart-list">
                <div class="modal-cart-main">
                    <div class="modal-cart-main-img">
                        <img class="img-cart" src="${dataProduct.image}" alt="">
                    </div>
                    <div class="modal-cart-main-item">
                        <h4 class="main-item-name">${dataProduct.productName}</h4>
                        <p class="main-item-color">Màu: <span class="main-item-color-item">${dataProduct.color}</span></p>
                    </div>
                    <div class="modal-cart-main-quantity">
                        <input name="amount" style="width: 30px; outline: none; border: none; background-color: transparent" type="number" value="1" min="1">
                        <div class="modal-cart-main-remove">Xóa</div>
                    </div>
                    <div class="modal-cart-main-price">
                        <p class="modal-cart-main-price-sale">${dataProduct.pricesSale}</p>
                        <p class="modal-cart-main-price-corner">${dataProduct.price}</p>
                    </div>
                </div>
                
            </div>
            <div class="modal-cart-info">
                <label class="cart-info-text" for="">Nhập vào địa chỉ nhận hàng</label>
                <input name="address" class="cart-info-address" type="text" placeholder="Nhập vào địa chỉ">
            </div>

            <div class="order">
                <button class="btn-order">HOÀN TẤT ĐẶT HÀNG</button>

            </div>

    `
    formOrder.innerHTML = html
    
}

const btnOrderElement = document.querySelector(".modal-cart")
btnOrderElement.addEventListener("submit", e => {
    e.preventDefault()

    const APIOrder = "http://localhost:8080/order/add"
    const amount = document.querySelector('input[name="amount"]').value
    const addressElement = document.querySelector('input[name="address"]').value
    const idUserLocal = localStorage.getItem("iduser")
    const tokenLocal = localStorage.getItem("token")

    const formDataOrder = {
        amount: amount,
        deliveryDddress:addressElement,
        status: true,
        user: {
            idUser: idUserLocal

        }
    }
    console.log(formDataOrder)

    fetch(APIOrder, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenLocal}`  
        },
        body: JSON.stringify(formDataOrder)
    })
    .then(res => res.json())

    .then(formDataOrder => {

        if(formDataOrder.status == 500) {
            alert("Thất bại")
        } else {
            alert("Đặt hàng thành công")
            const modal = document.querySelector(".js-modal")
            modal.classList.remove("open-login")
        }
    })

    .catch(error => {
        console.log(error)

    }) 
})



