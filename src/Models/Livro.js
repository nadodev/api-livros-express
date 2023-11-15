const mongoose = require('mongoose'); // Correção: 'mongoose' em vez de 'mongose'


const LivroSchema = mongoose.Schema({

    nome: { 
        type: String, 
        required: true 
    },

    editora: { 
        type: String, 
        required: true
    },

    ano: { 
        type: Number, 
        required: true 
    },

    paginas: { 
        type: Number, 
        required: true 
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    },

    autor : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autor',
        required: true
    }

})


module.exports = mongoose.model('Livro', LivroSchema);

