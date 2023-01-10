
const payMocas = document.querySelectorAll(".pay-moca")
const payTpbanks = document.querySelectorAll(".pay-tpbank")
const payVnps = document.querySelectorAll(".pay-vnp")

payMocas.forEach( payMoca => {
    payMoca.addEventListener("mousemove", function(e){
        const titleMoca = e.target
        const title = titleMoca.parentElement.parentElement
        const titleMain = title.querySelector(".containe-product-discount-main-pay-item")
        titleMain.innerText = "Giảm 5% tối đa 200k thanh toán qua grap Moca"
    })
});

payTpbanks.forEach( payTpbank => {
    payTpbank.addEventListener("mousemove", function(e){
        const titleTpbank = e.target
        const title = titleTpbank.parentElement.parentElement
        const titleMain = title.querySelector(".containe-product-discount-main-pay-item")
        titleMain.innerText = "Ưu đãi đến 1.1 triệu khi mở thẻ TBBANK EVO Nha!!!"
    })
});

payVnps.forEach( payVnp => {
    payVnp.addEventListener("mousemove", function(e){
        const titleVpn = e.target
        const title = titleVpn.parentElement.parentElement
        const titleMain = title.querySelector(".containe-product-discount-main-pay-item")
        titleMain.innerText = "Giảm tối đá 500k khi thanh toán qua VNPAY-QR"
    })
});
