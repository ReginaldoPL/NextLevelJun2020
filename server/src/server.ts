import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuário')

    response.json([
        'Luís',
        'Gustavo',
        'Regis',
        'Daniel',
        'dfdf'
    ]);
});

app.listen(3333);