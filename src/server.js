import express from 'express';
// import pino from 'pino-http';
import cors from 'cors';
import  getEnvVar  from './utils/getEnvVar.js';
import productRouter from "./routers/products.js";



const  PORT = Number(getEnvVar('PORT', '3000'));


export const startServer = () =>{
    const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.json({
        message:'Hello world'
    });
});

app.use(productRouter);
app.use('*', (req, res, next)=>{
    res.status(404).json({
        message:'Route not found'
    });
});
app.use((err, req, res, next)=>{
    res.status(500).json({
        mesagge: 'Something went wrong',
        error: err.mesagge,
    });
});


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

};


