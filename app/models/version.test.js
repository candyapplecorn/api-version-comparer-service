const Version = require('./version');

describe('Version', () => {
    describe('validity', () => {
      it.each([
        ['2', 'VALID'],
        ['1.0', 'VALID'],
        ['1.0.1.0.111.2.9', 'VALID'],
        ['1.a.1.0.111.2.9', 'INVALID'],
        ['', 'INVALID'],
        ['.1.0', 'INVALID'],
        ['0.1.0', 'VALID'],
      ])('should be able to tell %s is %s', (ver, validity) => {
        validity = (validity === 'VALID');
        expect(Version.isValidVersion(ver)).toEqual(validity);
      });
    });
});
