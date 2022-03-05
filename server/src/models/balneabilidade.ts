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

const Gastos = new Schema({
    codigo_orgao_superior:{
        type:"String",
       
    },
    nome_orgao_superior:{
        type:"String",
       
    },
    codigo_orgao:{
        type:"String",
       
    },
    nome_orgao:{
        type:"String",
       
    },
   codigo_unidade_gestora:{
        type:"String",
       
    },
    nome_unidade_gestora:{
        type:"String",
       
    },
    codigo_grupo_despesa:{
        type:"String",
       
    },
    nome_grupo_despesa:{
        type:"String",
       
    },
    codigo_elemento_despesa:{
        type:"String",
       
    },
    nome_elemento_despesa:{
        type:"String",
       
    },
    codigo_funcao:{
        type:"String",
       
    },
    nome_funcao:{
        type:"String",
       
    },
    codigo_subfuncao:{
        type:"String",
       
    },
    nome_subfuncao:{
        type:"String",
       
    },
    codigo_programa:{
        type:"String",
       
    },
    nome_programa:{
        type:"String",
       
    },
    codigo_acao:{
        type:"String",
       
    },
    nome_acao:{
        type:"String",
       
    },
    linguagem_cidada:{
        type:"String",
       
    },
    codigo_favorecido:{
        type:"String",
       
    },
    nome_favorecido:{
        type:"String",
       
    },
    numero_documento:{
        type:"String",
       
    },
    gestao_pagamento:{
        type:"String",
       
    },
    data_pagamento:{
        type:"String",
       
    },
    valor:{
        type:"String",
       
    },
    data_pagamento_original:{
        type:"String",
       
    },
    ano:{
        type:"String",
       
    },
    mes:{
        type:"String",
       
    },



});

const cota = new Schema({
    cod_legislatura:{
        type:"String",
       
    },
    datemissao:{
        type:"String",
       
    },
    idedocumento:{
        type:"String",
       
    },idecadastro:{
        type:"String",
       
    },
    indtipodocumento:{
        type:"String",
       
    },
    nucarteiraparlamentar:{
        type:"String",
       
    },
    nudeputadoid:{
        type:"String",
       
    },
    nulegislatura:{
        type:"String",
       
    },
    numano:{
        type:"String",
       
    },
    numespecificacaosubcota:{
        type:"String",
       
    },
    numlote:{
        type:"String",
       
    },
    nummes:{
        type:"String",
       
    },
    numparcela:{
        type:"String",
       
    },
    numressarcimento:{
        type:"String",
       
    },
    numsubcota:{
        type:"String",
       
    },
    sgpartifo:{
        type:"String",
       
    },
    sguf:{
        type:"String",
       
    },
    txnomeparlamentar:{
        type:"String",
       
    },
    txtcnpjcpf:{
        type:"String",
       
    },
    txtdescricao:{
        type:"String",
       
    },
    txtdescricaoespecificacao:{
        type:"String",
       
    },
    txtfornecedor:{
        type:"String",
       
    },
    txtnumero:{
        type:"String",
       
    },
    txtpassageiro:{
        type:"String",
       
    },
    txttrecho:{
        type:"String",
       
    },
    vlrdocumento:{
        type:"String",
       
    },
    vlrglosa:{
        type:"String",
       
    },
    vlrliquido:{
        type:"String",
       
    },
    vlrrestituicao:{
        type:"String",
       
    },



});
export default model("Balneabilidade",BalneabilidadeSchema);