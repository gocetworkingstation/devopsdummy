import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

// A simple GET that returns an array of names
app.get('/api/names', (req: Request, res: Response) => {
    const names = ['Alice', 'Bob', 'Charlie'];
    res.json(names);
});

app.listen(port, () => {
    console.log(`API server is running on http://localhost:${port}`);
});
