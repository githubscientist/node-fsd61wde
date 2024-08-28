// import the express module
const express = require('express');

// create an express application
const app = express();

const fs = require('fs');

// define the routes and their corresponding functions
app.get('/stats', (req, res) => {
    fs.stat('./files/test.txt', (err, stats) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                size: `${stats.size} bytes`,
                isFile: stats.isFile(),
                isDirectory: stats.isDirectory(),
                isSymbolicLink: stats.isSymbolicLink(),
            });
        }
    })
});

app.post('/create', (req, res) => {
    fs.writeFile('./files/newFile.txt', 'Hello World!', (err) => {
        if (err) {
            res.send(err);
        }
        res.send('File created successfully');
    })
});

app.get('/read', (req, res) => {
    fs.readFile('./files/test.txt', 'utf8', (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    })
})

app.get('/copy', (req, res) => {
    fs.copyFile('./files/fileA.txt', './files/fileB.txt', (err) => {
        if (err) {
            res.send(err);
        }
        res.send('File copied successfully');
    })
})

app.get('/copyX', (req, res) => {
    fs.readFile('./files/fileA.txt', 'utf8', (err, data) => {
        if (err) {
            res.send(err);
        }
        // write the data to the new file
        fs.writeFile('./files/fileB.txt', data, (err) => {
            if (err) {
                res.send(err);
            }
            res.send('File copied successfully');
        })
    })
})

// start the server by listening on a port for incoming requests
app.listen(3001, "localhost", () => {
    console.log("Server is running on http://localhost:3001");
});