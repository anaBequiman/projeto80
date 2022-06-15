nomeConvidados = [];
function enviar(){
        var valor = document.getElementById("nomesCaixa1").value;
        nomeConvidados.push("<h4>" + valor + "</h4>");
}
function mostrar(){
    organizacao = [];
    for (var i=0; i<nomeConvidados.length; i++){
        organizacao.push("<h4>" + nomeConvidados[i] + "</h4>");
        nomeConvidados[i];
    }
    var removerVirgula = nomeConvidados.join(" ");
    document.getElementById("nomes2").innerHTML= removerVirgula;
}
function organizada(){
    organizacao = [];
    for (var i=0; i<nomeConvidados.length; i++){
        organizacao.push("<h4>" + nomeConvidados[i] + "</h4>");
        nomeConvidados[i];
    }
    var removerVirgula = nomeConvidados.join(" ");
    document.getElementById("nomes2").innerHTML= removerVirgula;
}
function procurar(){
    var ordem = document.getElementById("nomes").value;
    var pesquisa = 0;
    var i;
    var s = 0;
    for(i=0; i < nomeConvidados.length; i++){
        if(s==nomeConvidados[i]){
            pesquisa=pesquisa+1;
        }
    }
    document.getElementById("nomesOrdem").innerHTML="Nome encontrado"+pesquisa+"vez(es)";
    console.log("Nomes encontrado"+pesquisa+"vez(es)");
}