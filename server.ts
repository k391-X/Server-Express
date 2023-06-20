import express, { Request, Response } from 'express';

const app = express();

// Route Get request

app.get('/api/data', (req: Request, res: Response) => {
    const data = {
        message: 'Hello, World!',
    };

    res.json(data);
})

// Start server
const port = 7042;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});