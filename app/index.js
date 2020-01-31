const { PORT, HOST }      = require('./constants/config');

const createApp = require('./app');

const app = createApp();

const server = app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

return server;
