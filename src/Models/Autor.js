

const mongoose = require('mongoose'); // Correção: 'mongoose' em vez de 'mongose'


const AutorSchema = mongoose.Schema({
    
        nome: { 
            type: String, 
            required: true 
        },
    
        nacionalidade: { 
            type: String, 
            required: true
        },
    
        createdAt: { 
            type: Date, 
            default: Date.now 
        },

        livro: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Livro'
        }]
    
        
})

const Autor = mongoose.model('Autor', AutorSchema);

module.exports =  { Autor, AutorSchema}