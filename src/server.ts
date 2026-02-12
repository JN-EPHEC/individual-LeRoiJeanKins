import express from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from 'sequelize';

const app = express();
const port = 3000;

app.get('/', (req:object, res:object) => {
    res.send('Hello World!');
})

app.get('/api/data', (req:object, res:object) => {
    const etudiants = [
        { id: 1, nom: "Dupont", prenom: "Jean" },
        { id: 2, nom: "Martin", prenom: "Sophie" },
        { id: 3, nom: "Doe", prenom: "John" },
    ];

    res.send(etudiants);
})

app.get('/api/hello/:name', (req:object, res:object) => {
    const msg = { "message": req.params.id, "timestamp": new Date() };

    res.json(msg);
})

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(sequelize);
})