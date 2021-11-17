import { Schema, model } from 'mongoose';

export interface Framework extends Document {

    nombre: string;

}

export const frameworkSchema = new Schema<Framework>({
    nombre: { type: String, required: true }
});

export const FrameworkModel = model('Framework', frameworkSchema);
