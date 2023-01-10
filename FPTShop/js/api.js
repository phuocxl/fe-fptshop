const apiCategory = "http://localhost:8080/category/"

fetch(apiCategory)
    .then(function (response) {
        return response.json();
    })
    .then(function(categoryName){
        console.log(categoryName)
    })