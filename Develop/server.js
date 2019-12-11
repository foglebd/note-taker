var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// =============================================================
var notes = [

];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res){
    return res.json(notes);
});

app.post("/api/notes", function(req, res){
    var newNote = req.body;
    
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
    
    res.send();
});

app.delete("/api/notes:id", function(req, res){
    
    res.send();
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
