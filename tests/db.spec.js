"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db/db");
describe("Conectividad de base de datos", () => {
    jest.setTimeout(15000);
    it("Debe conectarse a la base de datos", () => {
        return (0, db_1.connectDB)()
            .then(r => {
            expect(r).toBeTruthy();
        })
            .catch(e => {
            return false;
        });
    });
});
//# sourceMappingURL=db.spec.js.map