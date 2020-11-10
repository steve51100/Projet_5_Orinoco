const getTeddies = async function () {
   //récupération des données de l'API 
   try {
      let response = await fetch('http://localhost:3000/api/teddies/');
      if (response.ok) {
         let teddies = await response.json();

         console.log(response)
         console.log(teddies);

         //creation de la variable
         for (let teddy of teddies) {
            const teddiesDiv = document.getElementById('teddies');

            //cree la section teddy
            const teddiesSection = document.createElement('section');
            teddiesDiv.appendChild(teddiesSection);
            teddiesDiv.className = 'teddy';




            //création lien vers produit.html pour chaque section
            const productLink = document.createElement("a");
            productLink.href = "produit.html" + teddy._id;
            teddiesSection.appendChild(productLink);
            productLink.className = 'section_zoom';
            productLink.setAttribute('title', "L'ourson " + teddy.name + " vous attend !");


            //disposition des elements div gauche et droite
            const divLeft = document.createElement("div");
            divLeft.className = ("div_left");
            productLink.appendChild(divLeft);

            const divRight = document.createElement("div");
            divRight.className = ("div_right");
            productLink.appendChild(divRight);

            //sous-elements de div gauche
            const sousDivTitle = document.createElement('div');
            sousDivTitle.className = ('Div_name');
            divLeft.appendChild(sousDivTitle);
            //......
            const sousDivImg = document.createElement('div');
            sousDivImg.className = ('Div_img');
            divLeft.appendChild(sousDivImg);


            //sous-élément de div droite
            const sousDivPrice = document.createElement('div');
            sousDivPrice.className = ('Div_Price');
            divRight.appendChild(sousDivPrice);
            //......
            const sousDivDesc = document.createElement('div');
            sousDivDesc.className = ('Div_Description');
            divRight.appendChild(sousDivDesc);



            //*********************************** */
            //appel des elements plus affectation des emplacements
            //******* Name ******** Name ******** Name *****
            const productName = document.createElement('h3')
            productName.textContent = teddy.name;
            sousDivTitle.appendChild(productName);

            //******* Image ******** Image ******** Image *****
            const ProductImg = document.createElement('img');

            ProductImg.setAttribute('src', teddy.imageUrl);
            ProductImg.setAttribute('alt', 'Ours en peluche ' + teddy.name);
            ProductImg.setAttribute('title', 'Ours en peluche ' + teddy.name);
            sousDivImg.appendChild(ProductImg);

            //******* Prix ******** Prix ******** Prix *****
            const productPrice = document.createElement('p')
            productPrice.className = ('price');
            productPrice.textContent = "prix:" + " " + teddy.price + " " + "€";
            sousDivPrice.appendChild(productPrice);
            
            //******* Description ******** Description ******** Description *****
            const productDesc = document.createElement('p')
            productDesc.className = ('para');
            productDesc.textContent = teddy.description;
            sousDivDesc.appendChild(productDesc);




         }
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










