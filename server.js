import app from './config/express';

const port = process.env.PORT;

app.listen(port);
console.log('Server running on port ' + port);