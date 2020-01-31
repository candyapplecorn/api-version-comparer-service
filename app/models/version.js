class Version {
  constructor(versionString) {
    this.versionString = versionString;
    this.version = this.parseVersion(versionString);
  }

  parseVersion(versionString) {
    return versionString.split('.').map(Number);
  }

  static isValidVersion(versionString) {
    return /^(\d+\.?)+$/.test(versionString);
  }

  static greatestVersion(versionList) {
    const versions = versionList.map(version => new Version(version));
  }

  static versionComparator(a, b) {

  }
}

module.exports = Version;
