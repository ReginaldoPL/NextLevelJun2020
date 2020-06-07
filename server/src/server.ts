import express, { response } from 'express';

const app = express();

//pra receber json
app.use(express.json());

//rota , edereço compresso
//recurso, qual entidade estamos acessando dod sistema


//GET: buscar
//POST: criar
//PUT: editar
//DELETE: deletar


//Request Param: Parâmetrps que vem na própria rota que identificam um recurso
//Quey Param : ParÂmetros gerlamente opcionais para filtros e paginação
//request Body: Parametros para criação e atualizaçã ode informações

const users = [
    'Luís',
    'Gustavo',
    'Regis',
    'Daniel',
    'dfdf'
];

app.get('/users', (request, response) => {
    //normalemnte pode haver mais de um search, por isso colocar o String
  
    const  search = request.query.search? String(request.query.search):null;

    console.log('search ',search);

    const filteredUsers = search? users.filter((user) => {
        console.log(user.includes(search));
         return user.includes(search)
    }) : users;
    console.log('filteredUsers ',filteredUsers);

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => { 
  
    const id = Number (request.params.id);
    const user = users[id];
    return response.json(user);
});


app.post('/users', (request, response) => {
    const data = request.body; 
    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user);
})

app.listen(3333);