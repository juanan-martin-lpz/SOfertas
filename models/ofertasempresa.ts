import { Document, Schema, model, connect } from 'mongoose';

import Nota from './nota';
import SeguimientoEmpresa from './seguimientoEmpresa';
import Lenguaje from './lenguaje';
import Framework from './framework';
import Entrevista from './interview';


export enum EmpresaOfferState {
    OPEN,                    // ABIERTA, EN SEGUIMIENTO
    CLOSED,                  // CERRADA
    CURRICULUM_SENT,         // SE ENVIO CURRICULUM
    INTERVIEW_SET,           // HAY FECHA PARA ENTREVISTA 
    AWAITING,                // ESPERANDO NOTICIAS
    REJECTED,                // RECHAZADO POR LA EMPRESA
    ACCEPTED                 // ACEPTADO
}

export default interface OfertasEmpresa extends Document {
    
    descripcion: string;

    lenguajesRequeridos: [Lenguaje];
    frameworksRequeridos: [Framework];
    lenguajesAdicionales: [Lenguaje];
    frameworksAdicionales: [Framework];
    state: EmpresaOfferState; 
    rejectionReason: string;
    entrevistas: [Entrevista];
    notas: [Nota];
    seguimientos: [SeguimientoEmpresa];
}