const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res, next) => {
	const htmlPath = path.resolve(__dirname, '..', 'dist', 'index.html');
	const fileContent = fs.readFileSync(htmlPath, 'utf8');
	res.send(fileContent);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`The server is successfully running on port ${PORT}`));
