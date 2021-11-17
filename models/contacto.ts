import { Schema, model } from 'mongoose';

import { notaSchema, Nota } from './nota';

export interface Contacto {

    nombre: string;
    email: string;
    telefono: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    web: string;
    notas: Nota[];
    //{type: Schema.Types.ObjectId , ref: Nota, required: false}

}

export const contactoSchema = new Schema<Contacto>({
    nombre: { type: String, required: true },
    email: { type: String, required: false },
    telefono: { type: String, required: false },
    linkedin: { type: String, required: false },
    twitter: { type: String, required: false },
    facebook: { type: String, required: false },
    web: { type: String, required: false },
    notas: [notaSchema]
});

export const ContactoModel = model<Contacto>('Contacto', contactoSchema);

