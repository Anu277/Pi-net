const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Specify the folder containing your videos
const videoFolder = 'F:/ml yt';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/videos', (req, res) => {
    fs.readdir(videoFolder, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).send('Error reading directory');           return;
        }

        // Sort files in ascending order
        files.sort();

        // Send the list of files to the client
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
