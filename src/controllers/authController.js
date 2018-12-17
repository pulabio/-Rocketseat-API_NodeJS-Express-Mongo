const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    //repassa os parâmetros da url request (muito dahora) pra const user
//    console.log(req.body);


//quebrei a cabeça, mas não sei por que o await user.create não funcionou
//    let usuario = new User(req.body);


    usuario.save(function (err, usuario) {
      res.send(usuario)
      console.log("salvo");
      if (err) return console.error(err);
    });
/*

    let batata = await User.create(req.body);
    console.log(batata);
    console.log(batata.name);
//    console.log(user);
*/


//    console.log(batata);
//    console.log(batata.name);
//    console.log(user);

    return;

  } catch(err) {
    return res.status(400).send({error: 'Registration failed'});
  }
});

module.exports = app => app.use('/auth', router);

let usuario = new User({
  "name": "Marcos",
  "email": "joao@joao.com.br",
  "password": "123456"
})

console.log(usuario);

usuario.save(function (err, usuario) {
  res.send(usuario)
  console.log("salvo");
  if (err) return console.error(err);
});
