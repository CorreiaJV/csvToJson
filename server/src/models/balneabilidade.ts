import {Schema, model} from 'mongoose'

const BalneabilidadeSchema = new Schema({
    ponto_codigo:{
        type:"String",
        required:true,
    },
    local_da_coleta:{
        type:"String",
        required:true,
    },
    categoria:{
        type:"String",
        required:true,
    },
    costa_ponto:{
        type:"String",
        required:true,
    },
    data_emissao:{
        type:"String",
        required:true,
    },
    id_campanha:{
        type:"String",
        required:true,
    },
    numero_boletim:{
        type:"String",
        required:true,
    },
    tipo_campanha:{
        type:"String",
        required:true,
    },
    costa_menu:{
        type:"String",
        required:true,
    },
});

export default model("Balneabilidade",BalneabilidadeSchema)