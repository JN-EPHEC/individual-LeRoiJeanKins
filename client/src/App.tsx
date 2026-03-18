import { useEffect, useState } from "react";

// Définir le modèle de données
interface User {
    id: number;
    nom: string;
    prenom: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");

    // 1️⃣ Récupérer les utilisateurs
    const fetchUsers = () => {
        fetch("/api/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.filter(u => u.nom && u.prenom)); // filtrer ceux qui n'ont pas de nom/prénom
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // 2️⃣ Ajouter un utilisateur
    const addUser = () => {
        if (!nom || !prenom) return; // vérification simple
        fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nom, prenom }),
        })
            .then(res => res.json())
            .then(() => {
                setNom("");
                setPrenom("");
                fetchUsers(); // rafraîchir la liste
            })
            .catch(err => console.error(err));
    };

    // 3️⃣ Supprimer un utilisateur
    const deleteUser = (id: number) => {
        fetch(`/api/users/${id}`, { method: "DELETE" })
            .then(() => fetchUsers())
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Liste des Étudiants</h1>

            {/* Formulaire */}
            <div className="card shadow-sm mb-5">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-5">
                            <input
                                type="text"
                                value={nom}
                                onChange={e => setNom(e.target.value)}
                                className="form-control"
                                placeholder="Nom"
                            />
                        </div>
                        <div className="col-md-5">
                            <input
                                type="text"
                                value={prenom}
                                onChange={e => setPrenom(e.target.value)}
                                className="form-control"
                                placeholder="Prénom"
                            />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary w-100" onClick={addUser}>
                                Ajouter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Liste des utilisateurs */}
            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Utilisateurs enregistrés</h5>
                </div>
                {loading ? (
                    <p className="p-3">Chargement...</p>
                ) : (
                    <ul className="list-group list-group-flush">
                        {users.map(user => (
                            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {user.prenom} {user.nom}
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;