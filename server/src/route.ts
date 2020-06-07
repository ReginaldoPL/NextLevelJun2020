import express, { response, request } from 'express';
import knex from './database/connection';

//para desacoplar as rotas do arquivo principal
const routes = express.Router();



routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item =>{
        return {
            id: item.id,
            title: item.name,
            image_url:  `http://localhost:3333/uploads/${item.image}`,
        }

    });
    return response.json(serializedItems);
});

routes.post('/points' , async(request, response) =>{
    //const data = request.body;
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const trx = await knex.transaction();

    const insertIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    });


    const point_id = insertIds[0];
    
    const pointItems = items.map((item_id : number) =>{
        return {
            item_id:item_id,
            point_id: point_id
        }
    });

    await trx('point_items').insert(pointItems);
    
    response.json({success: true})
})


export default routes