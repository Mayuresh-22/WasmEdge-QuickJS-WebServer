import express from 'express';

const app = express();
const port = 8080;

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't programmers like nature? It has too many bugs.",
  "What do you call a fish with no eyes? Fsh!",
  "Why did the bicycle fall over? Because it was two tired!"
];

app.get('/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  res.json({ joke: randomJoke });
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
  console.log(`Try: http://localhost:${port}/jokes`);
});