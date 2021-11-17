import { Schema, model } from 'mongoose';

export interface Entrevista extends Document {
    fecha: Date;
    texto: string;
}

export const entrevistaSchema = new Schema<Entrevista>({
    fecha: { type: Date, required: true },
    texto: { type: String, required: true }
});

export const EntrevistaModel = model('Entrevista', entrevistaSchema);
