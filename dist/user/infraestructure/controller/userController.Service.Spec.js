"use strict";
describe('GET - userController Servide', () => {
    test('Probando el metodo index', () => {
        const expected = 'Hola servicio';
        const result = 'Hola service';
        expect(result).toStrictEqual(expected);
    });
});
