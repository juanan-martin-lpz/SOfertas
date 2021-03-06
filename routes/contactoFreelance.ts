import * as express from 'express';


import Freelance from '../models/freelance';
import { Contacto } from '../models/contacto';



const router = express.Router();


router.get('/:freelance', async (req, res) => {

    /*
    const fl  = req.params.freelance;

    const contactos = await db.collection('freelance').doc(fl).collection('contactos').get();


    if (contactos) {
        return res.status(200).json({
            status: true,
            message: 'Contactos Freelance Recuperados correctamente',
            contactos: contactos.docs.map(doc => doc.data())
        });
    }
    else {
        return res.status(400).json({
            status: false,
            message: 'Error al recuperar los contactos Freelance',
        });
    }
    */
});


router.post('/:freelance', async (req, res) => {
    /*
    const contacto = req.body;
    const fl = req.params.freelance;

    const contactos = await db.collection('freelance').doc(fl).collection('contactos');
       
    contacto.id = uuidv4();

    await contactos.doc(contacto.id).set(contacto).then( resp => {
        return res.status(200).json({
            status: true,
            message: 'Contacto del Freelance guardado correctamente',
            contacto: contacto
        });    
    })
    .catch( err => {

        return res.status(400).json({
            status: false,
            message: 'Error al guardar del contacto del Freelance',
            errors: err
        });
    });
    */
});


router.put('/:freelance/:id', async (req, res) => {
    /*
    const contacto = req.body;

    const id = req.params.id;
    const fl = req.params.freelance;

    const cont = await db.collection('freelance').doc(fl).collection('contactos').doc(id);
       
    await cont.set(contacto).then( resp => {
        return res.status(200).json({
            status: true,
            message: 'Contacto del Freelance actualizado correctamente',
            contacto: contacto
        });    
    })
    .catch( err => {

        return res.status(400).json({
            status: false,
            message: 'Error al guardar del contacto del Freelance',
            errors: err
        });
    });
    */
});


router.delete('/:freelance/:id', async (req, res) => {

    /*
    const id = req.params.id;
    const fl = req.params.freelance;

    await db.collection('freelance').doc(fl).collection('contactos').doc(id).delete().then( resp => {
        return res.status(200).json({
            status: true,
            message: 'Contacto del Freelance eliminado correctamente',
        });    
    })
    .catch( err => {

        return res.status(400).json({
            status: false,
            message: 'Error al eliminar el contacto del Freelance',
            errors: err
        });
    });
    */
});


export = router;
