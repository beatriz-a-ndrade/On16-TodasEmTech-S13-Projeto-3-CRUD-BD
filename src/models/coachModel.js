const mongoose = require ('mongoose')

// name, team, insignia, pokemons, region, 
// age, trofel, gender

const coachSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name: {
        type: String,
        required: true, // indicativo de campo obrigatório
        unique: true // (o name é único, nao deverá se repetir) => regra 1 do negócio
    },

    team: String,

    region: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        default: "Não informado"
    }
}, { timestamps: true }) // gera automaticamente as datas de atualização e criação

const Model = mongoose.model('coach', coachSchema)

module.exports = Model