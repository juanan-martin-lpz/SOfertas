import { describe, expect, test } from '@jest/globals';

import { connectDB } from '../db/db';

describe("Conectividad de base de datos", () => {

    jest.setTimeout(15000);

    it("Debe conectarse a la base de datos", (done) => {

        connectDB()
            .then((r: any) => {
                expect(r.ok).toBeTruthy();
                done();
            })
            .catch(e => {
                done(e);
            })

    })
});
