
//*récuperation des donner prix total  et id dans le local-storage
let prixTotal = localStorage.getItem('totalPrice'); 
console.log(prixTotal);

let NumComm = localStorage.getItem('responseOrder'); 
console.log(NumComm);




const pageConfim = document.getElementById('confirm');
const blocConfirm = document.createElement('div');
blocConfirm.className = 'bloc_confirm';
pageConfim.appendChild(blocConfirm);


//*création du message confirmation
const confMess = document.createElement('h2');
confMess.className = 'mess_conf';
confMess.innerText = 'Confirmation de commande';
blocConfirm.appendChild(confMess);

//*création du logo validation vert
const logoConf = document.createElement('div');
logoConf.className = 'fas fa-check-circle';
blocConfirm.appendChild(logoConf);

//*création du paragraphe de remerciement
const paraConfirm = document.createElement('p');
paraConfirm.className = 'p_confim';
paraConfirm.innerHTML = "Votre commande est validé <br/>Toute l'equipe d'orinoco vous remercie pour votre achat.";
blocConfirm.appendChild(paraConfirm); 

//* céation div lign
const divLign1 = document.createElement('div')
divLign1.className = 'lign_sep';
blocConfirm.appendChild(divLign1);

const divLign2 = document.createElement('div')
divLign2.className = 'lign_sep2';
blocConfirm.appendChild(divLign2);


//création des element num de commande
const numCom = document.createElement('div');
numCom.className ='row-12 recap'
numCom.innerHTML = "<span>Numéro de commande :</span>" +' ' +  NumComm;
blocConfirm.appendChild(numCom);

//création de l'élément prix total
const prixCom = document.createElement('div');
prixCom.className ='row-12 recap'
prixCom.innerHTML = "<span>Montant total:</span>" +' ' + prixTotal + '€';
blocConfirm.appendChild(prixCom);





