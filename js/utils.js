
//appel du fichier externe et retour en json

const affichageOurs = document.getElementById("liste");
const appelServ = fetch('http://localhost:3000/api/teddies')

appelServ
 .then((reponse) =>{
     console.log(reponse);

     const ours = reponse.json();
     console.log(ours);

     
    
 }); 
 