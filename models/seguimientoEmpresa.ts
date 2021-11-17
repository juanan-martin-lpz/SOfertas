import { Schema, model } from 'mongoose';

export interface SeguimientoEmpresa extends Document {
    contenido: string;
}

export const seguimientoEmpresaSchema = new Schema<SeguimientoEmpresa>({
    contenido: { type: String, required: true },
});

export const SeguimientoEmpresaModel = model<SeguimientoEmpresa>('SeguimientoEmpresa', seguimientoEmpresaSchema);
