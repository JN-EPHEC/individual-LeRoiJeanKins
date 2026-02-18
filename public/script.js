function init(){
    fetch("/api/users").then(response => response.json()).then((donnees) => {
        console.log(donnees);
        document.getElementById("ut_enregistre").innerHTML = ""
        for (let donne in donnees) {
            if(donnees[donne].nom != null && donnees[donne].prenom != null){
                document.getElementById("ut_enregistre").innerHTML += `<li>
                                                                                    ${donnees[donne].nom} ${donnees[donne].prenom}
                                                                                    <button type="button" onclick="supp(${donnees[donne].id})">X</button>
                                                                                </li>`;
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
function supp(id){
    fetch(`/api/users/${id}`, {
        method:"DELETE"
    }).then(response => {
        init();
    })
}