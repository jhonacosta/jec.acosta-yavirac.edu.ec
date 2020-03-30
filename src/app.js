/*CONFIGURAR EL SERVIDOR */
import express,{ json, request } from 'express';
import morgan from 'morgan';

//Importing Routes
import projectRoutes from './routes/projects';
import taskRoutes from "./routes/tasks";

//Initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/main2',require('../views/js/main2'));

   
export default app;