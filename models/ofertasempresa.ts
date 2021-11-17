import { Schema, model } from 'mongoose';

import { NotaModel, Nota, notaSchema } from './nota';
import { SeguimientoEmpresaModel, SeguimientoEmpresa, seguimientoEmpresaSchema } from './seguimientoEmpresa';
import { LenguajeModel, Lenguaje, lenguajeSchema } from './lenguaje';
import { FrameworkModel, Framework, frameworkSchema } from './framework';
import { EntrevistaModel, Entrevista, entrevistaSchema } from './interview';


export enum EmpresaOfferState {
    OPEN,                    // ABIERTA, EN SEGUIMIENTO
    CLOSED,                  // CERRADA
    CURRICULUM_SENT,         // SE ENVIO CURRICULUM
    INTERVIEW_SET,           // HAY FECHA PARA ENTREVISTA 
    AWAITING,                // ESPERANDO NOTICIAS
    REJECTED,                // RECHAZADO POR LA EMPRESA
    ACCEPTED                 // ACEPTADO
}

export interface OfertasEmpresa {

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

export const ofertasEmpresaSchema = new Schema<OfertasEmpresa>({

    descripcion: { type: String, required: true },

    lenguajesRequeridos: [lenguajeSchema],
    frameworksRequeridos: [frameworkSchema],
    lenguajesAdicionales: [lenguajeSchema],
    frameworksAdicionales: [frameworkSchema],
    state: Number,
    rejectionReason: String,
    entrevistas: [entrevistaSchema],
    notas: [notaSchema],
    seguimientos: [seguimientoEmpresaSchema]

});

export const OfertasEmpresaModel = model('OfertasEmpresa', ofertasEmpresaSchema);

