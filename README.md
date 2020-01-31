# api-version-comparer-service
tells you which api version is higher

# Install

Just copy-paste this install script.

```bash
git clone https://github.com/candyapplecorn/api-version-comparer-service.git && \
cd api-version-comparer-service && \
npm install && \
npm run test
```

# Usage

Start the server with `npm run start`.

There's only one route: __/version-compare__. You can send it a query parameter, 'versions', which can be one or more "version" numbers.

Here's an example CURL request:

```bash
$> curl 'localhost:8080/version-compare?versions\[\]=2&versions\[\]=2.1';
"2.1"
$>
```
