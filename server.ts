import cors from 'cors'
import express from 'express'
const userRoutes = require('./src/user/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hewwo!");
})

app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));