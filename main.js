nomeConvidados = [];
function enviar(){
    for (var i=1; i<=nomeConvidados.length; i++){
        var valor = document.getElementById(nomesCaixa1).value;
        nomeAlunos.push(valor);
    }
}
function mostrar(){
    for (var i=0; i<nomeAlunos.length; i++){
        organizacao.push("<h4>" + nomeAlunos[i] + "</h4>");
        nomeAlunos[i];
    }
    var removerVirgula = mostrar.join(" ");
    document.getElementById("nomes").innerHTML= removerVirgula;
}
function organizada(){
    var ordem = document.getElementById(ordem1).value;
    var pesquisa = 0;
    var i;
    for(i=0; i < nomeConvidados.length; i++){
        if(s==nomeConvidados[i]){
            pesquisa=pesquisa+1;
        }
    }
    document.getElementById("nomesOrdem").innerHTML="Nome encontrado"+pesquisa+"vez(es)";
    console.log("Nomes encontrado"+pesquisa+"vez(es)");
}