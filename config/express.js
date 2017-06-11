import express from 'express';
import headerRoutes from '../routes/headerParser.routes.js';

let app = express();
headerRoutes(app);

export default app;