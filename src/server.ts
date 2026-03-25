import app from './app';

// default port
const port = process.env.PORT;

// server listening
app.listen(port, () => console.log(`Server is listening on localhost:${port}`));
