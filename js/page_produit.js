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


// ajout de la description
   
    let productDescriptions = document.createElement('p');
    productDescriptions.className = "product_description";
    productDescriptions.innerText = `${objetProduit.description} `;


// ajout du tarif
    let productTarif = document.createElement("p");
    productTarif.className = "tarif";
    productTarif.innerText = `${objetProduit.price}` + " " +"Euro";



   productDetails.append(productImage , productTarif ,productDescriptions);
}
displayProductDetail();


// creation du boutton option...
function lenseSelection(){
let lensesData = objetProduit.colors;
let productPerso = document.getElementById("product_perso");
console.log(productPerso);

let selectList = document.createElement("select");
selectList.id="mySelect";
productPerso.appendChild(selectList);
 
//creation des option...
for(var i = 0; i < lensesData.length; i++){
    let option = document.createElement("option");
    option.value = lensesData[i];
    option.text = lensesData[i];
    selectList.appendChild(option);
}

console.log(lensesData);
}
lenseSelection();