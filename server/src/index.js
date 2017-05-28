import path from 'path';
import { Server } from 'http';
import Express from 'express';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

// universal routing and rendering
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

// start the server
const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
