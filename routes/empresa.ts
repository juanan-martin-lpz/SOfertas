import * as express from 'express';

import { Empresa } from '../models/empresa';

const router = express.Router();


router.get('/', async (req, res, next) => {

    //return get('empresa', req, res);

    /*
    const empresa = await db.collection('empresa');

    const docsSnapshot = await empresa.get();

    const empresas = docsSnapshot.docs.map(doc => doc.data());

    res.json(empresas);
    */
});

router.get('/:id', async (req, res, next) => {
    /*
    const fl = req.params.id;

    const empresa = await db.collection('empresa').doc(fl);

    if (empresa) {
        return res.status(200).json({
            status: true,
            message: 'Empresa Recuperada correctamente',
            empresa
        });
    }
    else {
        return res.status(400).json({
            status: false,
            message: 'Error al recuperar la Empresa',
        });
    }
    */
});


router.post('/', async (req, res, next) => {
    /*
    const fl: Empresa = req.body;

    const empresa = db.collection('empresa');

    fl.id = uuidv4();

    await empresa.doc(fl.id).set(fl).then(r => {
        res.status(200).json({
            status: true,
            message: 'Insercion correcta con uid :' + fl.id,
            empresa: fl
        });
    })
        .catch(e => {
            res.status(400).json({
                status: false,
                message: 'Error al insertar Empresa',
                errors: e
            });
        })
        */
});

router.put('/', async (req, res) => {
    /*
    const fl: Empresa = req.body;
    const empresa = await db.collection('empresa').doc(fl.id);

    if (empresa) {
        empresa.set(fl).then(r => {
            console.log(r);

            res.status(200).json({
                status: true,
                message: 'Empresa actualizada correctamente',
                empresa: fl
            });
        })
            .catch(e => {
                res.status(400).json({
                    status: false,
                    message: 'Error al actualizar al Empresa',
                    errors: e
                });
            });
    }
    else {
        res.status(400).json({
            status: false,
            message: 'No se encontro la Empresa para ser actualizado',
        });
    }

    return res;
    */
});

router.delete('/', async (req, res) => {
    /*
    const fl: Empresa = req.body;
    const empresa = await db.collection('empresa').doc(fl.id);

    if (empresa) {
        empresa.delete().then(r => {
            res.status(200).json({
                status: true,
                message: 'Empresa eliminada correctamente',
                empresa: fl
            });
        })
            .catch(e => {
                res.status(400).json({
                    status: false,
                    message: 'Error al eliminar la Empresa',
                    errors: e
                });
            });
    }
    else {
        res.status(400).json({
            status: false,
            message: 'No se encontro la Empresa para eliminar',
        });
    }

    return res;
    */
});


export = router;
