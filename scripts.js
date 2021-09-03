const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}




function calcular_simulacao() {
    // Declaração de variáveis
    var nome, mensalidade, tempo, resultado;

    // Entrada de dados
    nome = $("#nome").val()
    mensalidade = $("#mensalidade").val()
    tempo = $("#tempo").val()

    //taxa de juros
    var taxaJuros = 0.05;

    // Processamento de Dados

    var conta = mensalidade * Math.pow((1 + taxaJuros), tempo);

    var resultado = conta.toString(); //Converte o total para string

    // Saída de Dados
    $(".result-nome").html(nome);
    $(".result-mensalidade").html(mensalidade);
    $(".result-resultado").html(resultado);
    $(".result-tempo").html(tempo);


}




