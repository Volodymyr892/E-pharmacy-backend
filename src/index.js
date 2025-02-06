import { initMangoDB } from "./db/initMangoDB.js";
import { startServer } from "./server.js";

const bootstrap = async ()=>{
    await initMangoDB();
    startServer();
};

bootstrap();