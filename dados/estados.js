const estados = [
    {sigla: "AM", estado: "Amazonas"},
    {sigla: "AL", estado: "Alagoas"},
    {sigla: "BA", estado: "Bahia"},
    {sigla: "CE", estado: "Ceará"},
    {sigla: "DF", estado: "Distrito Federal"},
    {sigla: "ES", estado: "Espírito Santo"},
    {sigla: "GO", estado: "Goiás"},
    {sigla: "MG", estado: "Minas Gerais"},
    {sigla: "PE", estado: "Pernambuco"},
    {sigla: "SE", estado: "Sergipe"}
];

function retornaEstado(sigla){
    for (let estado of estados) {
        console.log(estado.sigla);
        console.log(sigla);
        if (estado.sigla === sigla) {
            return estado.estado;
        }
    }

    return "Não encontrado";
}

exports.retornaEstado = retornaEstado;