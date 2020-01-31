const CatModel = require('../models/version');

function versionCompare(req, res) {
    const versions = req.query.versions

    // ask model for greatest version from list of versions
    const greatestVersion = CatModel.greatestVersion(versions);

    res.json(greatestVersion);
}

module.exports = {
  versionCompare
};
