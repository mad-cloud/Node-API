import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'
const app = express();
const PORT = 9000;
app.use(bodyParser.json());
app.use('/users', usersRoutes);//starting path for all the routes
app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send('Hello from Homepage')
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})