const apiListProduct = "http://localhost:8080/product/"
const limit = 10
const element = document.querySelectorAll(".offet-item")
let offset = 0

for(let i=0; i< element.length; i++) {
  element[i].addEventListener("click", e => {
    const item = e.target.innerText
    const number = new Number(item)
    offset = number -1
  })
}
const apiListPageable = `http://localhost:8080/product/pageable/${offset}/${limit}`
 


const listProduct = document.querySelector(".list-product")


fetch(apiListProduct)
    .then(function(response) {
        return response.json()
    })
    .then(function(lists) {
        const datas = lists.data
        const htmls = datas.map((data) => {
            
            return `
            <tr class="product-item-${data.id}">
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img src="${data.image}" class="avatar avatar-sm me-3" alt="">
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">${data.productName}</h6>
                  <p class="text-xs text-secondary mb-0">${data.desc}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">${data.price}đ</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${data.createDay}</span>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="badge badge-sm bg-gradient-success">Online</span>
            </td>

            <td>
              <div class="ms-auto text-end">
                    <a onclick="handelDelete(${data.id})" class="btn btn-link text-danger px-3 mb-0" href="#"><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a>
                    
                    <a id="" onclick="showUpdate(${data.id})" class="btn btn-link text-dark px-3 mb-0" href="#"><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
              </div>
          </td>
          </tr>
            `
        })
        const html = htmls.join("")
        listProduct.innerHTML = html
    })
    .then(function(error) {

    }) 



function handelDelete(id) {
    fetch(apiListProduct +id,{
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(() => {
    const deleteItem = document.querySelector('.product-item-'+id)
    if(deleteItem) {
      if(confirm("Bạn có muốn xóa")) {
        deleteItem.remove()
      }
    }
  })
  .catch(error => {
      console.log(error)
  }) 
}

const updateElement = document.querySelector(".update-product")
const closeUpdateElement = document.querySelector(".btn-cancel")

closeUpdateElement.addEventListener("click",closeUpdate)

function showUpdate(id) {
  updateElement.classList.add("open")
  const nameProduct = document.querySelector(".js-name-product")
  const html = `
  <h6>Cấp nhật sản phẩm ID: <span class="id-product">${id}</span></h6>
  `
  nameProduct.innerHTML=html
}

function closeUpdate() {
  updateElement.classList.remove("open")
}

const formElement = document.querySelector('.form-design')
  if(formElement) {
    formElement.addEventListener("submit",e => {
      e.preventDefault()
      const productName = document.querySelector('input[name="product-name"]').value
      const desc = document.querySelector('input[name="desc"]').value
      const price = document.querySelector('input[name="price"]').value
      const pricesSale = document.querySelector('input[name="price-sale"]').value
      const color = document.querySelector('input[name="color"]').value
      const image = document.querySelector('input[name="image"]').value
      const categoryId = document.querySelector('select[name="category"]').value
      const id = document.querySelector(".id-product").innerText
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
    
      fetch(apiListProduct+id,{
          method: 'PUT',
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
              alert("Cập nhật thành công")
              window.location="http://127.0.0.1:5500/Admin/pages/list-product.html"
          }
      })
      .catch(error => {
          console.log(error)
    
      }) 
    });
  }



