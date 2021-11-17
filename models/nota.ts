import { Schema, model } from 'mongoose';

export interface Nota {

    texto: string;
}

export const notaSchema = new Schema<Nota>({
    texto: { type: String, required: true },
});

export const NotaModel = model<Nota>('Nota', notaSchema);



