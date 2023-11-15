const Router = require('express').Router;

const LivroController  = require('../Controllers/LivroController');
const AutorController  = require('../Controllers/AutorController');

const { 
        index,
        showLivros, 
        showLivrosById, 
        updateLivro, 
        deleteLivro 
    } = LivroController;


const { 
        indexAutor,
        showAutor, 
        showAutorById, 
        updateAutor, 
        deleteAutor 
    } = AutorController;


const router = Router();

router.post('/livros', index);
router.get('/livros', showLivros);
router.get('/livros/:id', showLivrosById);
router.put('/livros/:id', updateLivro);
router.delete('/livros/:id', deleteLivro);



router.post('/autor', indexAutor);
router.get('/autor', showAutor);
router.get('/autor/:id', showAutorById);
router.put('/autor/:id', updateAutor);
router.delete('/autor/:id', deleteAutor);

module.exports = router;