import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import  getEnvVar  from './utils/getEnvVar.js';
import userRouter from "./routers/auth.js";
import productRouter from "./routers/products.js";
import reviewsRouter from "./routers/reviews.js";
import pharmaciesRouter from "./routers/pharmacies.js";
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFounndhandler.js';



const  PORT = Number(getEnvVar('PORT', '3000'));


export const startServer = () =>{
    const app = express();
    app.use(express.json({
        type: ['application/json', 'application/vnd.api+json'],
        limit: '100kb',
    }));

app.use(cors());
app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );


app.get("/", (req, res)=>{
    res.json({
        message:'Hello world'
    });
});

app.use(productRouter);
app.use(reviewsRouter);
app.use(pharmaciesRouter);

app.use(userRouter);


app.use('*', notFoundHandler);
app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

};


