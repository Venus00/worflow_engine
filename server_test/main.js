const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Rapport d'Activité Journalier
Nom du Collaborateur : FARHAT Oussama




Date 23/01/2025
Projet/Module Principal Assigné : workflow service
1. Tâches Accomplies
Tâche 1 : Develop the engine worfklow runner, that executes the nodes in asynchronous mode
Durée : 5 heurs
Statut :Terminé.

Tâche 2 : Develop 2 Nodes that executes asynchronous operations as a test (Tiemout, Get requests)
Durée : 3 heurs
Statut :Terminé.
.


2. Progrès du Jour
3. Problèmes Rencontrés
4. Plan pour le Lendemain
5. Feedback our Suggestions
`)
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});