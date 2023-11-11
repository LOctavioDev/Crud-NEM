import express from 'express'
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';

//Initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', )

//Middlewares

//Routes

//Public files

//Run server
app.listen(app.get('port'), ()=>
    console.log(`----Server listening on port ${app.get('port')}----\n Link: http://localhost:${app.get('port')}`));