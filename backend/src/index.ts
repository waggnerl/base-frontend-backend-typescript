import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//const allowedOrigins = ['http://localhost:3000'||'http://localhost:3333'];
//
//const options: cors.CorsOptions = {
//    origin: allowedOrigins
//  };
//
//app.use(cors(options));
app.use(cors());

app.use(routes);
const port = 3333; 
app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
})  