import { Document, Schema, model, connect } from 'mongoose';

import Framework from './framework';

export default interface Lenguaje extends Document {
   
    nombre: string;
    frameworks: [Framework];

}