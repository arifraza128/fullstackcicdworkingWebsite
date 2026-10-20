const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok' }));
    }

    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(`
      <!doctype html>
      <html>
        <head><title>CI/CD Demo</title></head>
        <body>
          <h1>CI/CD Pipeline Working!</h1>
          <p>Deployed automatically to Kubernetes on AWS EC2.</p>
        </body>
      </html>
    `);
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  createServer().listen(port, '0.0.0.0', () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = { createServer };
