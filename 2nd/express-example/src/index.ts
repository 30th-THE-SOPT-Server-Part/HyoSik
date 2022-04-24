import express, { Request , Response, NextFunction } from 'express';

const app = express(); // express 객체 받아옴

app.use(express.json()); // express에서 request body를 json으로 받아오겠다.

app.use('/api', require('./api')); // use -> 모든 요청

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hi! My name is Philip!<h1>');
});

app.listen('8080', () => {
   console.log(`
   #############################################
       🛡️ Server listening on port: 8080 🛡️
   #############################################
    `);
 });