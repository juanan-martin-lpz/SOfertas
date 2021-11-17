import { connect, set } from 'mongoose';
import * as config from '../config/config';


export async function connectDB() {

    return new Promise(async (resolve, reject) => {

        let db = await connect(config.DB);

        if (db) {
            resolve({ "ok": true, "data": db });
        }
        else {
            reject({ "ok": false, "data": { "error": "No se pudo conectar a la base de datos" } });
        }
    });
}
