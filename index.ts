import express from 'express';
import * as cors from 'cors';

import * as db from './db/db';


import { obtenerEmpresas } from './negocio/negocioEmpresa';

// import freelanceRouter from './routes/freelance';
// import empresaRouter from './routes/empresa';
// import contactoFreelanceRouter from './routes/contactoFreelance';
// import contactoEmpresaRouter from './routes/contactoEmpresa';

import * as config from './config/config';

console.log("[server] Arrancando el servidor...")

db.connectDB().then(async () => {

    console.log("[server] Conectado a la base de datos");

    const app = express();

    app.use(express.json())

    // app.use('/freelance', freelanceRouter);
    // app.use('/freelance/contactos', contactoFreelanceRouter);
    // app.use('/empresa', empresaRouter);
    // app.use('/empresa/contactos', contactoFreelanceRouter);

    app.disable('x-powered-by');

    app.listen(config.PORT, () => {

        console.log(`[server]: Servidor ejecutandose en ${config.PORT}`);
    });

}).catch((e) => {
    console.log("[server] Hubo un error al conectarse a la base de datos :" + e);
});
