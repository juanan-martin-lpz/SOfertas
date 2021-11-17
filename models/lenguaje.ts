import { Schema, model } from 'mongoose';

import { FrameworkModel, Framework, frameworkSchema } from './framework';

export interface Lenguaje {

    nombre: string;
    frameworks: [Framework];

}

export const lenguajeSchema = new Schema<Lenguaje>({
    nombre: { type: String, required: true },
    frameworks: [frameworkSchema]
});

export const LenguajeModel = model('Lenguaje', frameworkSchema);

