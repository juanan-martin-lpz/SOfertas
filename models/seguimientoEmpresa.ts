import { Document, Schema, model, connect } from 'mongoose';

export default interface SeguimientoEmpresa extends Document {
    contenido: string;
}