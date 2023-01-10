
const categoryName = document.querySelector('.header__footer--nav-list')

const category = "http://localhost:8080/category/"

fetch(category)
    .then(function(response)  {
        return response.json()
    })
    .then(function(posts) {
        const htmls = posts.map((post)=> {
            return `
                <li class="header__footer--nav-item">
                    <i class="ti-mobile"></i>
                    <a href="#dt">${post.categoryName}</a>
                </li>
            `
        })
        const html = htmls.join('')
        categoryName.innerHTML = html
        
    })
    .then(function(erro) {

    }) 