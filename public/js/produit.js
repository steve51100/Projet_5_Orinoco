const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('teddy_id');
console.log(queryString); console.log(urlParams); console.log(id);


const getTeddies = async function () {
    //récupération des données de l'API 
    try {
        let response = await fetch('http://localhost:3000/api/teddies/' + id);
        if (response.ok) {
            let teddies = await response.json();

            console.log(response)
            console.log(teddies);

            //creation de la variable
            const productOursonDiv = document.getElementById('product_ourson');

            console.log(productOursonDiv);

            //creation du bloc
            const productBlocprod = document.createElement("div");
            productBlocprod.className = "bloc_product";
            productOursonDiv.appendChild(productBlocprod);

            //creation du nom du produit
            const productOursonName = document.createElement("div");
            productOursonName.className = "Ourson_name";
            productOursonName.textContent = teddies.name;
            productBlocprod.appendChild(productOursonName);

            //ligne de separation
            const productLignourson = document.createElement('div');
            productLignourson.className = "lign_ourson";
            productBlocprod.appendChild(productLignourson);


            //image de l 'ourson
            const teddyBlocImg = document.createElement('div');
            teddyBlocImg.className = 'bloc_img';
            productBlocprod.appendChild(teddyBlocImg);
            const teddyImg = document.createElement('img');
            teddyImg.className = 'ours_img';
            teddyBlocImg.appendChild(teddyImg);
            teddyImg.setAttribute('src', teddies.imageUrl);
            teddyImg.setAttribute('alt', 'Ours en peluche ' + teddies.name);
            teddyImg.setAttribute('title', 'Ours en peluche ' + teddies.name);
            console.log(teddyBlocImg)
            
            //prix de l'ourson
            const productPriceOurson = document.createElement('div');
            productPriceOurson.className = "price_ourson";
            productPriceOurson.textContent = "prix:" + " " + teddies.price + "€";
            productBlocprod.appendChild(productPriceOurson);

            //description de l'ourson
            const productDescriptionOurson = document.createElement('div');
            productDescriptionOurson.className = "description_ourson";
            productDescriptionOurson.textContent = "description:" + " " + teddies.description;
            productBlocprod.appendChild(productDescriptionOurson);

            //création du button selection des couleurs..
            const form = document.createElement('form');
            productBlocprod.appendChild(form);
            const formDiv = document.createElement('div');
            form.appendChild(formDiv);
            formDiv.className = 'colors_choice';

            const label = document.createElement('label');
            formDiv.appendChild(label);
            label.textContent = "Choix de la couleur : ";
            label.setAttribute('for', "Choix de couleurs de " + teddies.name);

            const select = document.createElement('select');
            formDiv.appendChild(select);
            select.setAttribute('name', "Choix de couleurs de " + teddies.name);
            select.setAttribute('id', "select_1 ");

            //ajout des differentes couleurs
            const colors = teddies.colors;

            for (i = 0; i < colors.length; i++) {
                const selectOption = document.createElement('option');
                select.appendChild(selectOption);
                selectOption.textContent = colors[i];
                selectOption.setAttribute("value", colors[i]);
            }

            // création bouton panier
            let addTeddy = document.createElement('button');
            addTeddy.className = 'btn_ajout_panier';
            form.appendChild(addTeddy);
            addTeddy.type = 'submit';
            addTeddy.name = 'add';
            addTeddy.id = 'submit';
            addTeddy.textContent = "Ajouter au panier"



            //recupération des donner et envoi au panier
            addTeddy.addEventListener("click", function (event) {
                event.preventDefault();

                // stockage des oursons choisis....
                let teddiesChoosen = {
                    teddyName: teddies.name,
                    teddyId: teddies._id,
                    teddyColor: select.value,
                    quantity: 1,
                    teddyPrice: teddies.price ,
                };
                console.log(teddiesChoosen);

                let storedTeddies = JSON.parse(localStorage.getItem('newArticle'));
                const teddyColor = select.value;
                if(storedTeddies) {
                    storedTeddies.push(teddiesChoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedTeddies));
                    console.log(storedTeddies);
                    if (window.confirm(teddies.name + " " + teddyColor + ' a bien été ajouté. Souhaitez-vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                } else {
                    storedTeddies = [];
                    storedTeddies.push(teddiesChoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedTeddies));
                    console.log(storedTeddies);
                    if (window.confirm(teddies.name + " " + teddyColor + ' a bien été ajouté. Souhaitez-vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }
            });

        } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
        }
    } catch (error) {
        alert("Erreur : " + error);
    }
}



//appel de la fonction getTeddies
getTeddies();

