
//appel du fichier externe et retour en json

const getUsers = async function () {
    let response = await fetch('http://localhost:3000/api/teddies');
    if (response.ok) {
        let data = await response.json()
        console.log(response)
        console.log(data);
    }else{
        console.log('Erreur de retour:'+ response.status);
    }

}
getUsers()


const product = document.getElementById('liste');
const productDiv = document.createElement('div');
productDiv.classList.add('product');
product.appendChild(productDiv);
console.log(product);


