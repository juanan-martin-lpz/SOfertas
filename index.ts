// Express goes here!!!

import express from 'express';
import * as cors from 'cors';
import * as bodyParser from "body-parser";

import * as freelanceRouter from './routes/freelance';
import * as empresaRouter from './routes/empresa';
import * as contactoFreelanceRouter from './routes/contactoFreelance';
import * as contactoEmpresaRouter from './routes/contactoEmpresa';

import * as config from './config/config';

const app = express();

// En app configuramos nuestro middleware, de manera normal
// la ruta sera http://localhost:5000/seguimientolaboral-cf3fd/us-central/api/v1/empresa
app.use('/freelance', freelanceRouter);
app.use('/freelance/contactos', contactoFreelanceRouter);


app.use('/empresa', empresaRouter);
app.use('/empresa/contactos', contactoFreelanceRouter);

app.listen(config.PORT, () => {
    console.log(`[server]: Servidor ejecutandose en ${config.PORT}`);
  });