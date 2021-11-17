import { Schema, model } from 'mongoose';


import { notaSchema, NotaModel, Nota } from './nota';
import { contactoSchema, ContactoModel, Contacto } from './contacto';
import { seguimientoEmpresaSchema, SeguimientoEmpresaModel, SeguimientoEmpresa } from './seguimientoEmpresa';
import { ofertasEmpresaSchema, OfertasEmpresaModel, OfertasEmpresa } from './ofertasempresa';



export interface Empresa {

    nombre: String;
    contactoPrincipal?: Contacto;
    notas?: Nota[];
    ofertas?: OfertasEmpresa[];
    seguimientos?: SeguimientoEmpresa[];
    contactosAdicionales?: Contacto[];

}

export const empresaSchema = new Schema<Empresa>({
    nombre: String,
    contactoPrincipal: contactoSchema,
    notas: [notaSchema],
    ofertas: [ofertasEmpresaSchema],
    seguimientos: [seguimientoEmpresaSchema],
    contactosAdicionales: [contactoSchema]
});

export const EmpresaModel = model<Empresa>('Empresa', empresaSchema);
