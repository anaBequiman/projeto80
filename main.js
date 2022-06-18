nomeConvidados = [];
function enviar(){
        var valor = document.getElementById("nomesCaixa1").value;
        nomeConvidados.push(valor);
}
function mostrar(){
    organizacao = [];
    for (var i=0; i<nomeConvidados.length; i++){
        organizacao.push("<h4>" + nomeConvidados[i] + "</h4>");
        nomeConvidados[i];
    }
    var removerVirgula = organizacao.join(" ");
    document.getElementById("nomes2").innerHTML= removerVirgula;
}
function organizada(){
    organizacao = [];
    nomeConvidados.sort();
    for (var i=0; i<nomeConvidados.length; i++){
        organizacao.push("<h4>" + nomeConvidados[i] + "</h4>");
        nomeConvidados[i];
    }
    var removerVirgula = organizacao.join(" ");
    document.getElementById("nomes2").innerHTML= removerVirgula;
}
function procurar(){
    var s = document.getElementById("nomesCaixa2").value;
    var pesquisa = 0;
    var i;
    for(i=0; i < nomeConvidados.length; i++){
        console.log(nomeConvidados[i])
        if(s==nomeConvidados[i]){
            pesquisa=pesquisa+1;
        }
    }
    document.getElementById("nomesOrdem").innerHTML="Nome encontrado"+pesquisa+"vez(es)";
    console.log("Nomes encontrado" + pesquisa + "vez(es)");
}