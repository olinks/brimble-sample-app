import { createServer } from 'http';

const PORT = process.env.PORT ?? 3000;

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head><title>Hello from Brimble</title></head>
      <body style="font-family:monospace;background:#111;color:#eee;padding:40px;text-align:center">
        <h1>Assessment Deployed via Brimble Mini-PaaS</h1>
        <p>Hostname: ${process.env.HOSTNAME ?? 'unknown'}</p>
        <p>Time: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
}).listen(PORT, () => {
  console.log(`Sample app listening on port ${PORT}`);
});
