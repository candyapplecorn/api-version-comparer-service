const Version = require('./version');

describe('Version', () => {
    it('should have a version', () => {
        const version = new Version('2.1.3');
        expect(version.version).toEqual([2, 1, 3]);
    });

    it('should have a version string', () => {
        const versionString = '2.3.1.2.1.03.2.33333';
        const version = new Version(versionString);
        expect(version.versionString).toEqual(versionString);
    });

    describe('removeTrailingZeroes', () => {
        it.each([
          ['1.0.0.0', '1'],
          ['1.2', '1.2'],
          ['1.2.0.1.0', '1.2.0.1']
        ])('should remove the trailing zeroes from %s to equal %s', (ver, expected) => {
            expect(Version.removeTrailingZeroes(ver)).toEqual(expected)
        });
    });

    describe('greatestVersion', () => {
        it.each([
            [['1', '2'], '2'],
            [['1', '2', '1.9'], '2'],
            [['1', '2', '1.9'], '2'],
            [['0.0.1', '0.1'], '0.1'],
            [['0.0.1', '0.0.1.09'], '0.0.1.09'],
            [['10', '3', '0.0.1', '0.0.1.09'], '10'],
        ])(
          'it should determine the greatest version from %o is %s',
          (list, greatest) => {
            const shouldBeGreatest = Version.greatestVersion(list);
            expect(shouldBeGreatest).toEqual(greatest);
        });
    });

    describe('validity', () => {
      it.each([
        ['2', 'VALID'],
        ['1.0', 'VALID'],
        ['1.0.1.0.111.2.9', 'VALID'],
        ['1.a.1.0.111.2.9', 'INVALID'],
        ['', 'INVALID'],
        ['.1.0', 'INVALID'],
        ['0.1.0', 'VALID'],
        ['-1', 'INVALID'],
      ])('should be able to tell %s is %s', (ver, validity) => {
        validity = (validity === 'VALID');
        expect(Version.isValidVersion(ver)).toEqual(validity);
      });
    });
});
