import { Document, Schema, model, connect } from 'mongoose';

export default interface Framework extends Document {
    
    nombre: string;
    
}