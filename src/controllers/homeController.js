const Contato = require('../models/ContatoModel')


exports.index = async (req, res) => {
  try {
    let contatos;

    if (req.session.user) {
      contatos = await Contato.buscaContatos(req.session.user._id);
    } else {
      contatos = await Contato.buscaContatos();
    }

    res.render('index', { contatos });
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};

