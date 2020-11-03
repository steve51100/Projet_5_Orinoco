let objetProduit = JSON.parse(window.localStorage.getItem("productDetails"));

console.log(objetProduit);

//appel du titre de localstorage

function displayProductDetail() {
    let pageProduct = document.getElementById('page_title');
    let productTitle = document.createElement('h2');
        productTitle.innerText = `${objetProduit.name}`;

    pageProduct.appendChild(productTitle);
    
// ajout l'image produit

    let productDetails = document.getElementById('product_info');

    let productImage = document.createElement('img');
    productImage.className = "product_image";
    productImage.src = `${objetProduit.imageUrl}`;

   




   productDetails.append(productImage);
}
displayProductDetail();