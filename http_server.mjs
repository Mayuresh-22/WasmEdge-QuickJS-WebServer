import http from 'http';

const port = 8080;

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't programmers like nature? It has too many bugs.",
  "What do you call a fish with no eyes? Fsh!",
  "Why did the bicycle fall over? Because it was two tired!"
];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/jokes') {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ joke: randomJoke }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Simple HTTP server listening at http://localhost:${port}`);
  console.log(`Try: http://localhost:${port}/jokes`);
});