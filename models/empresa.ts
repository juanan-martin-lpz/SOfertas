import { Document, Schema, model, connect } from 'mongoose';


import Nota from './nota';
import Contacto from './contacto';
import SeguimientoEmpresa from './seguimientoEmpresa';
import OfertasEmpresa from './ofertasempresa';



export default interface Empresa extends Document {
    
    contactoPrincipal: Contacto;
    notas: [Nota];
    ofertas: [OfertasEmpresa];
    seguimientos: [SeguimientoEmpresa]; 
    contactosAdicionales: Contacto[];
    
}