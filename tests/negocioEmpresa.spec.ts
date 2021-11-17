import { describe, expect, test } from '@jest/globals';

import { connectDB } from '../db/db';
import {
    obtenerEmpresas,
    obtenerEmpresa,
    nuevaEmpresa
} from '../negocio/negocioEmpresa';

describe("Conectividad de base de datos", () => {

    jest.setTimeout(15000);


    beforeAll(async () => {
        await connectDB();
    });


    it("Debe recuperar uno o mas documentos de la coleccion Empresas", async () => {

        return obtenerEmpresas()
            .then(result => {
                expect(result.ok).toBeTruthy;
                expect(result.data.length).toBeGreaterThan(0);
            });
    });

    it("Debe recuperar un documento por su Id de la coleccion Empresas", async () => {

        return obtenerEmpresa("6192a6163a3977a680563cc4")
            .then(result => {

                expect(result.ok).toBeTruthy;
                expect(result.data.nombre).toEqual('Empresa de Ejemplo');
            });
    });

    it("Debe devolver un error si el id de empresa pasado a la busqueda no existe", async () => {

        const error = { "error": "No se encuentra la empresa con el id solicitado" };

        return obtenerEmpresa("6192a6163a39773d50563cc4")
            .then(result => {
                expect(result.ok).toBeFalsy;
                expect(result.data).toEqual(expect.objectContaining(error));
            });
    });

    it("Debe devolver un error si el campo nombre esta vacio al insertar una nueva empresa", async () => {

        const error = { "error": "El nombre de la empresa esta vacio" };

        let empresa = {
            "nombre": "",
            "contactoPrincipal": undefined,
            "notas": [],
            "ofertas": [],
            "seguimientos": [],
            "contactosAdicionales": []
        };

        return nuevaEmpresa(empresa)
            .then(result => {
                expect(result.ok).toBeTruthy();
                expect(result.data).toEqual(expect.objectContaining(empresa));
            })
            .catch(err => {
                expect(err.ok).toBeFalsy();
                expect(err.data).toEqual(expect.objectContaining(error));
            })
    });

    it("Debe devolver un error si al crear un nueva empresa ya existe una empresa con el mismo nombre", async () => {

        let error = { "error": "Ya existe una empresa con el nombre solicitado" };

        let empresa = {
            "nombre": "Empresa de Ejemplo",
            "contactoPrincipal": undefined,
            "notas": [],
            "ofertas": [],
            "seguimientos": [],
            "contactosAdicionales": []
        };

        return nuevaEmpresa(empresa)
            .then(result => {
                expect(result.ok).toBeTruthy();
                expect(result.data).toEqual(expect.objectContaining(empresa));
            })
            .catch(err => {
                expect(err.ok).toBeFalsy();
                expect(err.data).toEqual(expect.objectContaining(error));
            })

    });

    it("Debe recuperar un documento del tipo OBJETO con el campo _id con un valor al insertar una nueva empresa", async () => {

        let empresa = {
            "nombre": "Empresa de Ejemplo 2",
            "contactoPrincipal": undefined,
            "notas": [],
            "ofertas": [],
            "seguimientos": [],
            "contactosAdicionales": []
        };

        return nuevaEmpresa(empresa)
            .then(result => {
                expect(result.ok).toBeTruthy();
                expect(result.data).toHaveProperty("_id");
            });
    });

    it("Debe devolver un error si al pasar un documento para la modificacion ya existe otro con el mismo nombre de empresa y distinto id", async () => {

    });

    it("Debe recuperar un documento actualizado del tipo OBJECT  con el mismo id que el pasado y el campo nombre cambiado", async () => {

    });

    it("Debe retornar un OBJECT con el objeto completo a borrar al borrar un documento con determinado id", async () => {

    });

    it("No debe retornar un OBJECT con un determinado id despues de borrarlo", async () => {

    });


});
