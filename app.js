const databaseObj = require('./database.js')

const express = require('express')

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.get('/usuarios', async (req,res) => {
    const usuarios = await databaseObj.readDatabase()
    res.json(usuarios)
})

app.post('/usuarios', async (req,res) => {
    const email = req.body.email;
    const nome = req.body.nome;
    const usuarios = await databaseObj.readDatabase()
    increment = await databaseObj.readIncrement();

    usuarios.push({
        id: increment.inc,
        nome,
        email
    })

    increment.inc++;
    await databaseObj.writeDatabase(usuarios)
    await databaseObj.writeIncrement(increment.inc)
    res.json(
        usuarios[usuarios.length-1]
    )
})

app.put('/usuarios/:id', async (req,res) => {
    const id = Number(req.params.id);
    const usuarios = await databaseObj.readDatabase()
    let user = null
    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].id == id) {
            usuarios[i].nome = req.body.nome;
            usuarios[i].email = req.body.email;
            user = usuarios[i];
            break;
        }
    }
    await databaseObj.writeDatabase(usuarios)
    res.json(user);
})

app.delete('/usuarios/:id', async (req,res) => {
    const id = Number(req.params.id);
    let usuarios = await databaseObj.readDatabase()
    let user = null;
    usuarios = usuarios.filter(item => {
        if (item.id !== id) {
            return true;
        } else {
            user = item;
            return false;
        }
    });
    await databaseObj.writeDatabase(usuarios)
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: "Este usuario não existe"
        });
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na port 3000')
})