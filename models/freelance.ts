import { Document, Schema, model, connect } from 'mongoose';


import { Contacto } from './contacto';
import SeguimientoFreelance from './seguimientoFreelance';
import { Nota } from './nota';
import { Lenguaje } from './lenguaje';
import { Framework } from './framework';

export enum FreelanceOfferState {
    OPEN,
    CLOSED,
    NEGOTIATING,
    REJECTED,
    ACCEPTED
}

export default interface Freelance extends Document {


    state: FreelanceOfferState;

    nombre: string;
    descripcionOferta: string;
    lenguajes: [Lenguaje];
    frameworks: [Framework];
    contactoPrincipal: Contacto;
    notas: [Nota];
    seguimientos: [SeguimientoFreelance];
    contactosAdicionales: [Contacto];
}
