import express, { response } from 'express';


//para desacoplar as rotas do arquivo principal
const routes = express.Router();



routes.get('/', (request, response) => {
    return response.json({ message: "heelo Word" });
});

export default routes