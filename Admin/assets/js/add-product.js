
const formElement = document.querySelector('.form-design')
const apiAddProduct = 'http://localhost:8080/product/add'

formElement.addEventListener("submit",e => {
    e.preventDefault()
    const productName = document.querySelector('input[name="product-name"]').value
    const desc = document.querySelector('input[name="desc"]').value
    const price = document.querySelector('input[name="price"]').value
    const pricesSale = document.querySelector('input[name="price-sale"]').value
    const color = document.querySelector('input[name="color"]').value
    const image = document.querySelector('input[name="image"]').value
    const categoryId = document.querySelector('select[name="category"]').value
    const formData = {
        productName: productName,
        desc: desc,
        price:price,
        pricesSale: pricesSale,
        color: color,
        image: image,
        category: {
            categoryId: categoryId
        }
    }

    fetch(apiAddProduct,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(formData => {
        console.log(formData)
        if(formData.status == 500) {
            alert("Thất bại")
        } else if(formData.message.includes("product name already taken")) {
            alert("Tên sản phẩm đã tồn tại")
        } else {
            alert("Thêm thành công")
        }
    })
    .catch(error => {
        console.log(error)

    }) 
});