import { Document, Schema, model, connect } from 'mongoose';

export default interface Entrevista extends Document {
    fecha: Date;
    texto: string;
}