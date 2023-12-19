let products = document.querySelector("#products")
console.log(products);


products.addEventListener("click",(e)=> {
    if(e.target.tagName === "SPAN"){
        window.location.href += "/" + e.target.className;
    }
})