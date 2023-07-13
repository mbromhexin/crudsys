//get all element
var title = document.getElementById("title")
var price = document.getElementById("price")
var taxes = document.getElementById("taxes")
var ads = document.getElementById("ads")
var discount = document.getElementById("discount")
var total = document.getElementById("total")
var count = document.getElementById("count")
var category = document.getElementById("category")
var createBtn = document.getElementById("create")
var search = document.getElementById("search")
var searchByTitle = document.getElementById("searchByTitle")
var searchByCategory = document.getElementById("searchByCategory")



var productList;

if(localStorage.getItem("productList") != null){
    productList = JSON.parse(localStorage.getItem("productList"))
    showProductList()
}else{
    productList = []
}

createBtn.onclick = function(){
    if(! isEmpty()){
        var product = {
            title:title.value,
            price:price.value,
            taxes:taxes.value,
            ads:ads.value,
            discount:discount.value,
            total:total.innerHTML,
            count:count.value,
            category:category.value
        }
        productList.push(product)
        console.log(productList)
        saveProductListInStorge()
        clearInputs()
        showProductList()
    
    }else{
        alert("you must fill all faileds")
    }

}

function isEmpty(){
    if(title.value=='' || price.value =='' || count.value=='' || category.value==''){
        return true
    }else{
        return false
    }
}

function saveProductListInStorge(){
    localStorage.setItem("productList",JSON.stringify(productList))
}

function showProductList(){
    var html =''
    for(var i=0; i<productList.length; i++){
        html +=
        `<tr>
            <td>${i}</td>
            <td>${productList[i].title}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].count}</td>
            <td>${productList[i].taxes}</td>
            <td>${productList[i].ads}</td>
            <td>${productList[i].discount}</td>
            <td>${productList[i].total}</td>
            <td><button onclick="updateProduct(${i})" id="updateBtn">UPDATE</button></td>
            <td><button onclick="deleteProduct(${i})" id="deleteBtn">DELETE</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = html
}

function clearInputs(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

function calcPrice(){
    if(price.value !=''){
        var result = (Number(price.value)+Number(taxes.value)+Number(ads.value))-Number(discount.value)
        total.style.backgroundColor = "green"
        total.innerHTML = result
    }else{
        total.style.backgroundColor = "red"
    }
}

function deleteProduct(index){
    var confirmDelete = confirm(`you will delete ${productList[index].title} !!!!`)
    if(confirmDelete){
        productList.splice(index,1)
        saveProductListInStorge()
        showProductList()
    }
}


function searchInProducts(){
    for(var i =0 ; i<productList.length; i++){
        if(search.value == productList[i].title){
            console.log(productList[i].title)
        }
    }
}


searchByTitle.onclick = function(){

    alert("search By Title")

}


searchByCategory.onclick = function(){

alert("search By Category")

}








/*

function updateProduct(index){
    var confirmUpdate = confirm(`you will update ${productList[index].title} data`)
    if(confirmUpdate){
        createBtn.innerHTML = 'Update Product'
        createBtn.style.backgroundColor = 'yellow'
        createBtn.style.color = 'black'    
        title.value = productList[index].title;
        price.value = productList[index].price;
        taxes.value = productList[index].taxes;
        ads.value = productList[index].ads;
        discount.value = productList[index].discount;
        total.innerHTML = productList[index].total;
        count.value = productList[index].count;
        category.value = productList[index].category;
        if(createBtn.clicked == true){
            alert("update from function")
            createBtn.innerHTML = 'hambozo'
        }
    }
    
}

*/















