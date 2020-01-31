class Version {
  constructor(versionString) {
    this.versionString = versionString;
    this.version = Version.parseVersion(
      Version.removeTrailingZeroes(versionString)
    );
  }

  static parseVersion(versionString) {
    return versionString.split('.').map(Number);
  }

  static removeTrailingZeroes(versionString) {
    return versionString.replace(/(\.0+)+$/, '');
  }

  static isValidVersion(versionString) {
    return /^(\d+\.?)+$/.test(versionString);
  }

  static greatestVersion(versionList) {
    const versions = versionList.map(version => new Version(version));
    const sorted = versions.sort(Version.versionComparator);
    return sorted[0].versionString
  }

  static versionComparator(a, b) {
    if (a.version.join('') === b.version.join('')) {
      return 0;
    }

    const minLength = Math.min(a.version.length,b.version.length);

    for (var i = 0; i < minLength; i++) {
      const [digitA, digitB] = [a.version[i], b.version[i]];

      if (digitA <= digitB) {
        return 1;
      } else if (digitA > digitB) {
        return -1;
      }

      if (i === minLength - 1) {
          const [nextA, nextB] = [a.version[i + 1], b.version[i + 1]];

          if (nextA > 0) {
            return -1
          } else if (nextB > 0) {
            return 1;
          }
      }
    }
  }
}

module.exports = Version;
