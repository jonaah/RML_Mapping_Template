const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json()); // Middleware für JSON-Daten

// In-Memory-Speicher für Dateien
let storedFiles = [];

// Bestehender API-Endpunkt
app.get("/api", (req, res) => {
    res.json({ 
        "users": ["John", "Doe", "Jane", "tet"], 
        "title": "Import Template", 
        "items": storedFiles 
    });
});

// Neuer Endpunkt zum Hochladen von Dateien
app.post("/api/files", (req, res) => {
    const { filename } = req.body;

    if (!filename) {
        return res.status(400).json({ error: "Filename is required" });
    }

    storedFiles.push(filename); // Datei speichern
    res.status(201).json({ message: "File added successfully", files: storedFiles });
});

// App starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
