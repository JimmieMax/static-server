const
    Koa = require('koa'),
    Path = require('path'),
    Static = require('koa-static'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    app = new Koa();

app
    .use(Static(Path.resolve(__dirname, './static')));

http.createServer(app.callback()).listen(1080, (e) => {
    console.info(`listening on port ${1080}`);
});
https.createServer({
    key: fs.readFileSync('certificate/private.key'),
    cert: fs.readFileSync('certificate/certificate.crt'),
}, app.callback()).listen(1443, (e) => {
    console.info(`listening on port ${1443}`);
});