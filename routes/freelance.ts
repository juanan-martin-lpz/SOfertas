import * as express from 'express';
import Freelance from '../models/freelance';

const router = express.Router();

router.get('/', async (req, res, next) => {
    /*
    const freelance = db.collection('freelance');
    const docsSnapshot = await freelance.get();

    const freelancers = docsSnapshot.docs.map(doc => doc.data()); 
    res.json( freelancers );
    */
});

router.get('/:id', async (req, res, next) => {
    /*
    const fl  = req.params.id;

    const freelance = await db.collection('freelance').doc(fl);

    if (freelance) {
        return res.status(200).json({
            status: true,
            message: 'Freelance Recuperado correctamente',
            freelance
        });
    }
    else {
        return res.status(400).json({
            status: false,
            message: 'Error al recuperar el Freelance',
        });
    }
    */
});


router.post('/', async (req, res, next) => {
    /*
    const fl: Freelance = req.body;

    const freelance = db.collection('freelance');
  
    fl.id = uuidv4();

    await freelance.doc(fl.id).set(fl).then( r => {
        res.status(200).json({
            status: true,
            message: 'Insercion correcta con uid :' + fl.id,
            freelance: fl
        });
    })
    .catch( e => {
        res.status(400).json({
            status: false,
            message: 'Error al insertar Freelance',
            errors: e
        });
    })
    */
});

router.put('/', async (req, res) => {
    /*
    const fl: Freelance = req.body;
    const freelance = await db.collection('freelance').doc(fl.id);
  
    if (freelance) {
        freelance.set(fl).then( r => {
            console.log(r);

            res.status(200).json({
                status: true,
                message: 'Freelance actualizado correctamente',
                freelance: fl
            });
        })
        .catch ( e => {
            res.status(400).json({
                status: false,
                message: 'Error al actualizar el Freelance',
                errors: e
            });
        });
    }
    else {
        res.status(400).json({
            status: false,
            message: 'No se encontro el Freelance para ser actualizado',
        });        
    }   

    return res;
    */
});

router.delete('/', async (req, res) => {
    /*
    const fl: Freelance = req.body;
    const freelance = await db.collection('freelance').doc(fl.id);
    
    if (freelance) {
        freelance.delete().then( r => {
            res.status(200).json({
                status: true,
                message: 'Freelance eliminado correctamente',
                freelance: fl
            });
        })
        .catch( e => {
            res.status(400).json({
                status: false,
                message: 'Error al eliminar el Freelance',
                errors: e
            });
        });    
    }
    else {
        res.status(400).json({
            status: false,
            message: 'No se encontro en Freelance para eliminar',
        });
    }
    
    return res;
    */
});


export = router;
