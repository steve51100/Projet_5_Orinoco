/**
 * Retrieve data from localStorage
 */

let objetProduit = JSON.parse(window.localStorage.getItem("productDetails"));

/**
 * Defining the title as the name stored in localStorage
 */
function displayProductDetails(){
    let pageProduct = document.getElementById('page_title');
    let productTitle = document.createElement('h2');
        productTitle.innerText = `${objetProduit.name}`;

    pageProduct.appendChild(productTitle);


    /**
     * Adding the rest of the product info stored in localStorage
     */

    let productDetails = document.getElementById('product_info');

    let productImage = document.createElement('img');
        productImage.className = "product_image";
        productImage.src = `${objetProduit.imageUrl}`;

    let productPrice = document.createElement('p');
        productPrice.className = "product_price";
        productPrice.innerText = `${objetProduit.price}` + `€`;

    let productDescription = document.createElement('p');
        productDescription.className = "description_produit";
        productDescription.innerText = `${objetProduit.description}`;

    productDetails.append(productImage, productPrice, productDescription);
}

displayProductDetails();
console.log(productDetails);

/**
 * Create lense selection
 */
function lenseSelection(){
    let lensesData = objetProduit.lenses;
    let productPerso = document.getElementById("product_perso");
    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    productPerso.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < lensesData.length; i++) {
        var option = document.createElement("option");
        option.value = lensesData[i];
        option.text = lensesData[i];
        selectList.appendChild(option);
    }
}
lenseSelection();

/** 
 * Add product to basket
 **/

function addToCart() {
    let productsTable = localStorage.getItem("productList");

    // Check if productsTable exists in local storage
    if (!productsTable) {

        // If not, initialize the array, initiate the quantity and add the current object
        productsTable = [];
        objetProduit.quantity = 1;
        productsTable.push(objetProduit);
    } else {

        // If yes, decode the array. 
        productsTable = JSON.parse(productsTable);
        console.log(productsTable);

        // check if the object is already in the array
        if (productsTable.find(product => product._id === objetProduit._id)) {

            //if yes ==> just increase the value of the key quantity by 1
            objetProduit.quantity++;
            for (var i = 0; i < productsTable.length; i++) {
                if (objetProduit.id === productsTable[i]._id) { //look for match with id
                    productsTable[i].quantity++; //add
                    break; //exit loop
                }
            }
        } else {
            //if not ==> initiate the quantity and add the object into the array
            objetProduit.quantity = 1;
            productsTable.push(objetProduit);

        }
    }
    // Encode the array.
    productsTable = JSON.stringify(productsTable);

    // Add the array back to LocalStorage. 
    localStorage.setItem("productList", productsTable);

    let popupAdded = document.getElementById("popup_add");
    if(popupAdded.className === "hide"){
        popupAdded.classList.replace("hide","popup_show");
    }else{
        popupAdded.classList.replace("popup_show","hide");
    }
}












