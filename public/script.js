function init(){
    fetch("/api/users").then(response => response.json()).then((donnees) => {
        let url = window.location.href;
        var page_ban ;
        url.endsWith("banni.html") ? page_ban = true : page_ban = false;
        if (page_ban){
            listeBan()
        }
        console.log(donnees);
        document.getElementById("ut_enregistre").innerHTML = ""
        for (let donne in donnees) {
            if(donnees[donne].nom != null && donnees[donne].prenom != null && donnees[donne].desirable !== false && page_ban === false){
                document.getElementById("ut_enregistre").innerHTML += `<li>
                                                                                    ${donnees[donne].nom} ${donnees[donne].prenom}
                                                                                    <button type="button" onclick="supp(${donnees[donne].id})">X</button>
                                                                                    <button type="button" onclick="ban(${donnees[donne].id},${donnees[donne].desirable})">BANNIR</button>
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
function supp(id) {
    fetch(`/api/users/${id}`, {
        method: "DELETE"
    }).then(() => init())
}

function ban(id,bool){
    if (bool !== false){
        bool_fut = false;
    }
    else{
        bool_fut = true;
    }
    fetch(`/api/users/${id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            desirable: bool_fut
        })
    }).then(() => init())
}
function listeBan(){
    fetch("/api/users").then(response => response.json()).then((donnees) => {
        for (let donne in donnees) {
            if(donnees[donne].desirable === false){
                console.log(donnees[donne]);
                document.getElementById("et_inde").innerHTML += `<li class="list-group-item list-group-item-danger ">
                                                                              ${donnees[donne].nom} ${donnees[donne].prenom}
                                                                              <button type="button" onclick="supp(${donnees[donne].id})">X</button>
                                                                              <button type="button" onclick="ban(${donnees[donne].id},${donnees[donne].desirable})">DEBANNIR</button>
                                                                          </li>`;
            }
        }
    })
}
