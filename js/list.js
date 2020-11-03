/**
 * Get the cameras data through API
 */

request('GET','http://localhost:3000/api/teddies', function(ours){
    displayOurs(ours);
});

/**
 * Display cameras on homepage
 * */
const listeVue = document.getElementById('liste');

function displayOurs(ours){
    for(let i in ours) {
        let productCard = document.createElement('section');
            productCard.classList.add('product_card');
            productCard.onclick = function storeData(){
              
                window.open("page_produit.html");
            };

        let productLeftDiv = document.createElement('div');
        let productName = document.createElement('h3');
            productName.innerText = `${ours[i].name}`;

        let productImage = document.createElement('img');
            productImage.src = `${ours[i].imageUrl}`;
            console.log(productImage.src);

        let productRightDiv = document.createElement('div');
        let productPrice = document.createElement('p');
            productPrice.classList.add('product_price');
            productPrice.innerText = `${ours[i].price}` + `€`;

        let productDescription = document.createElement('p');
            productDescription.innerText = `${ours[i].description}`;

        listeVue.append(productCard);
        productCard.append(productLeftDiv,productRightDiv);
        productLeftDiv.append(productName,productImage);
        productRightDiv.append(productPrice,productDescription);
    }
}