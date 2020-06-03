const mongoose = require('mongoose');
//crear un objeto Schema
let Schema = mongoose.Schema;
//Definir mi colección
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Quiero el nomre']
    },
    periodos:{
        type: String,
        required: [true, 'Quiero el nombre']
    },
    nacionalidad:{type: String},
    pintura:{type: String}
});

module.exports = mongoose.model('Pintores',PintoresSchema);