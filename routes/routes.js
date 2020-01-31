const { Router } = require('express');
const { versionCompare } = require('../controllers/version');

module.exports = () => {
  const router = Router();

  router.get('/version-compare', versionCompare);

  return router;
};
