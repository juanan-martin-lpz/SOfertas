import { EmpresaModel, Empresa } from '../models/empresa';


export function obtenerEmpresas(): Promise<any> {

    return new Promise((resolve, reject) => {

        EmpresaModel.find({})
            .then(empresas => {
                resolve({ "ok": true, "data": empresas })
            })
            .catch(error => {
                reject({ "ok": false, "data": { "error": error } })
            });
    });
}

export function obtenerEmpresa(id): Promise<any> {
    return new Promise((resolve, reject) => {
        EmpresaModel.findById(id)
            .then(empresa => {
                if (empresa == null) {
                    resolve({ "ok": false, "data": { "error": "No se encuentra la empresa con el id solicitado" } })
                }
                else {
                    resolve({ "ok": true, "data": empresa })
                }
            })
            .catch(error => reject({ "ok": false, "data": { "error": error } }));
    });
}

export function obtenerEmpresaByName(nombre: String): Promise<any> {
    return new Promise((resolve, reject) => {
        EmpresaModel.find({ nombre: nombre })
            .then(empresa => {
                if (empresa.length > 0) {
                    resolve({ "ok": true, "data": empresa })
                }
                else {
                    resolve({ "ok": false, "data": { "error": "No se encuentra la empresa con el nombre solicitado" } })
                }
            })
            .catch(error => reject({ "ok": false, "data": { "error": error } }));
    });
}


export function nuevaEmpresa(empresa: Empresa): Promise<any> {

    return new Promise((resolve, reject) => {

        if (empresa.nombre == "") {
            reject({ "ok": false, "data": { "error": "El nombre de la empresa esta vacio" } });
        }
        else {
            obtenerEmpresaByName(empresa.nombre)
                .then(em => {
                    if (em.ok) {
                        reject({ "ok": false, "data": { "error": "Ya existe una empresa con el nombre solicitado" } })
                    }
                    else {
                        let emp = new EmpresaModel();

                        emp.nombre = empresa.nombre;
                        emp.contactoPrincipal = empresa.contactoPrincipal;
                        emp.notas = empresa.notas;
                        emp.seguimientos = empresa.seguimientos;
                        emp.contactosAdicionales = empresa.contactosAdicionales;

                        emp.save()
                            .then(r => {
                                resolve({ "ok": true, data: r });
                            })
                            .catch(e => {
                                reject({ "ok": false, "data": { "error": e } });
                            });
                    }
                })
                .catch(e => {
                    reject({ "ok": false, "data": { "error": e } })
                });
        }
    });
}
