const Version = require('../models/version');

function versionCompare(req, res) {
    const versions = req.query.versions

    if (!versions || versions.length < 2) {
      return res.status(400).json({ error: 'Must supply two or more versions' });
    }

    const invalidVersions = versions.filter(version => !Version.isValidVersion(version));
    if (invalidVersions.length > 0) {
      return res.status(400).json({
        error: `These versions are invalid: ${invalidVersions.join(', ')}`
      });
    }

    // ask model for greatest version from list of versions
    const greatestVersion = Version.greatestVersion(versions);

    res.json(greatestVersion);
}

module.exports = {
  versionCompare
};
