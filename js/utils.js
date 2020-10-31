function request(method, url, callback, data){
    // Créez une variable de demande et affectez-lui un nouvel objet XMLHttpRequest.
    let request = new XMLHttpRequest(); //objet
    
    request.onreadystatechange = function(){
        if(this.readyState == XMLHttpRequest.DONE && [200, 201].indexOf(this.status) !== false){
            callback(JSON.parse(this.responseText, this.status));
        }
    };
    // Ouvrez une nouvelle connexion à l'aide de la requête GET sur le point de terminaison de l'URL
    request.open(method, url);
    request.setRequestHeader("Content-Type", "application/json");
    if(method == 'POST'){
        request.send(JSON.stringify(data));
    }else{
        request.send();
    }
  
}