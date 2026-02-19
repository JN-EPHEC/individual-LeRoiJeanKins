import express from 'express';
import {requestLogger} from "./middlewares/logger";
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import './models/User.js'
import './middlewares/errorHandler'
import {errorHandler} from "./middlewares/errorHandler";



const app = express();
const port = 3000;

app.use(requestLogger);
app.use(express.static('public'));
app.use(express.json());
app.use('/api/users', userRoutes);


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

app.use(errorHandler);

sequelize.sync().then(() => {
    console.log("Syncronisation");
    app.listen(port, () => {
        console.log(`Le serveur est lancé sur le port ${port}`);
        console.log(sequelize);
    })
})


