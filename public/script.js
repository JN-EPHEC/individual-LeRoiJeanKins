function init(){
    fetch("/api/users").then(response => response.json()).then((donnees) => {
        console.log(donnees);
        document.getElementById("ut_enregistre").innerHTML = ""
        for (let donne in donnees) {
            if(donnees[donne].nom != null && donnees[donne].prenom != null){
                document.getElementById("ut_enregistre").innerHTML += `<li>${donnees[donne].nom} ${donnees[donne].prenom}</li>`;
            }
        }
    })
}
function envoie(){
fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nom:document.getElementById("nom").value,
        prenom:document.getElementById("prenom").value
    })
}).then(donnees => {
    console.log(donnees);
    init();
  })
}