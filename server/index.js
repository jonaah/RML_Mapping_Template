const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));


app.get("/api", (req, res) => {
    res.json({ "users" : ["John", "Doe", "Jane", "tet"] , "title": "Import Template", "items": ["Item 1", "Item 2", "Item 3", "Item4", "Item5", "Item6", "Item 7", "Item 8", "Item9", "Item10"], "onNew": "onNew", "onImport": "onImport" });

});


// Fügen Sie diese Zeile hinzu, um sicherzustellen, dass alle anderen Routen auf Ihre index.html Datei verweisen
//app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'index.html'));
//});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
