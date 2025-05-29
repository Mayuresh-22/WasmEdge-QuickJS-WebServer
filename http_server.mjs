import { createServer } from 'http';

createServer((req, resp) => {
  req.on('data', (body) => {
    resp.write('echo:');
    resp.end(body);
  });
}).listen(8080, '0.0.0.0', () => {
  console.log('listen 8080 on 0.0.0.0 ...\n');
});