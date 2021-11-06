import { Document, Schema, model, connect } from 'mongoose';

export default interface SeguimientoFreelance extends Document {
    contenido: string;
}