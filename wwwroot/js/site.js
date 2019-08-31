// Write your JavaScript code.
var verifica=0;
function verificaCampos(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var mail = document.getElementById("mail").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var genero = document.getElementById("genero").value;

    if(nome===""){
        alert("O campo NOME está vazio.");
    }else if(sobrenome===""){
        alert("O campo SOBRENOME está vazio.");
    }else if(mail===""){
        alert("O campo E-MAIL está vazio.");
    }else if(telefone===""){
        alert("O campo TELEFONE está vazio.");
    }else if(senha===""){
        alert("O campo SENHA está vazio.");
    }else if(genero==="V"){
        alert("O campo GÊNERO está vazio.");
    }else{
        alert("Tudo certo para o envio do cadastro.");
        verifica=1;
    }
    return verifica;
}
function notaGeral(){
    var nota = parseFloat(document.getElementById("nota").value);
    var media;
    if(verificaCampos()===1){
        media=(nota/2);
        alert("Você deu a nota: "+media);
    }
}
function trocaImagem(){
    var imagem = document.getElementById("selecionador").value;
    switch(imagem){
        case "0":
        alert("Selecione uma imagem.");
        break;

        case "1":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Palmeira Jumeirah.jpg' alt='Palmeira Jumeirah.' width='600px' height='400px'>";
        alert("Imagem da Palmeira Jumeirah.");
        break;
        case "2":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Burj Khalifa.jpg' alt='Burj Khalifa.' width='600px' height='400px'>";
        alert("Imagem do Burj Khalifa.");
        break;
        case "3":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Fonte de Dubai.jpg' alt='Fonte de Dubai.' width='700px' height='400px'>";
        alert("Imagem da Fonte de Dubai.");
        break;
        case "4":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Dubai Marina.jpg' alt='Dubai Marina.' width='800px' height='400px'>";
        alert("Imagem de Dubai Marina..");
        break;
        case "5":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Dubai Garden Glow.jpg' alt='Dubai Garden Glow.' width='700px' height='500px'>";
        alert("Imagem de Dubai Garden Glow.");
        break;
        case "6":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Dubai Creek.jpg' alt='Dubai Creek.' width='1200px' height='500px'>";
        alert("Imagem de Dubai Creek.");
        break;
        case "7":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Grand Hyatt Residence.jpg' alt='Grand Hyatt Residence.' width='1000px' height='500px'>";
        alert("Imagem de Grand Hyatt ResidenceGrand Hyatt Residence.");
        break;
        case "8":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Dubai Aquarium & Underwater Zoo.jpg' alt=' Dubai Aquarium & Underwater Zoo.' width='900px' height='500px'>";
        alert("Imagem de Dubai Aquarium & Underwater Zoo.");
        break;
        case "9":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Downtown Dubai.jpg' alt='Downtown Dubai.' width='900px' height='500px'>";
        alert("Imagem de Downtown Dubai.");
        break;
        case "10":
        document.getElementById("imagemAlbum").innerHTML="<img src='img/Park Hyatt Dubai.jpg' alt='Park Hyatt Dubai.' width='800px' height='500px'>";
        alert("Imagem do Park Hyatt Dubai.");
        break;
    }
}
var meioTabela="";
var fim=false;
var i=0;
function montaPagina(){
    var formulario;
    var inicioTabela;
    var fimTabela;

    formulario=("<div class='quadroprincipal'>"+
            "<input type='text' id='desc' placeholder='Digite a descrição.' style='width: 24%'>"+
            "<input type='text' id='valor' placeholder='Média de Gasto' style='width: 24%'>"+
            "<input type='text' id='ponto' placeholder='Ponto forte da dica.' style='width: 24%'>"+
            "<input type='number' id='nota' style='width: 24%'>"+
            "<center>"+
            "<button id='add'onclick='atualizaTabela()'>ADICIONAR DICA</button>");
    inicioTabela=("</center>"+
        "<br>"+
        "<table>"+
            "<tr>"+
                "<th>Numero</th>"+
                "<th>Descrição</th>"+
                "<th>Média de Gasto</th>"+
                "<th>Ponto Forte</th>"+
                "<th>Nota</th>"+
            "</tr>");
    fimTabela=("</table>"+
        "</div>");
    document.getElementById("conteudo").innerHTML=formulario+inicioTabela+meioTabela+fimTabela;
}
function atualizaTabela(){
        i++;
        meioTabela+=("<tr>"+
        "<td>"+i+"</td>"+
        "<td>"+document.getElementById("desc").value+"</td>"+
        "<td>"+document.getElementById("valor").value+"</td>"+
        "<td>"+document.getElementById("ponto").value+"</td>"+
        "<td>"+document.getElementById("nota").value+"</td>"+
        "</tr>");
        montaPagina();
}
function coletarValores(){
    var juros=0.0148;
    var parcela=0;
    var parcelaReal;
    var parcelaEuro;
    var euro=4.29;
    var meioOrcamento="";
    var inicioTabela="";
    var fimTabela=""
    var taxa=0;

    var pacote = document.getElementsByName("opcional[]");
    var total=0;
    for(var i=0;i<pacote.length;i++){
        if(pacote[i].checked){
            total+=parseFloat(pacote[i].value);
        }
    }
    document.getElementById("soma").value=total+" €";
    
    inicioOrcamento=("<br>"+
    "<table>"+
        "<tr>"+
            "<th>Parcelas</th>"+
            "<th>Valor em Euros</th>"+
            "<th>Taxa de Juros</th>"+
            "<th>Valor em Reais</th>"+
            "<th>Valor da Parcela</th>"+
        "</tr>");
        parcelaEuro=total;
        parcelaReal=(parcelaEuro*euro);
        while(parcela<60){
            parcela=(parcela+6);
            juros=((juros*juros)+juros);
            meioOrcamento+=("<tr>"+
            "<td>"+parcela+"</td>"+
            "<td>"+(parcelaEuro*Math.pow((1+juros),parcela)).toFixed(2)+" €</td>"+
            "<td>"+(juros*100).toFixed(2)+"%</td>"+
            "<td>R$ "+(parcelaReal*Math.pow((1+juros),parcela)).toFixed(2)+"</td>"+
            "<td>R$ "+((parcelaReal*Math.pow((1+juros),parcela))/parcela).toFixed(2)+" x "+parcela+"</td>"+
            "</tr>");
        }
    fimOrcamento=("</table>"+
        "</div>");
    
    document.getElementById("orcamento").innerHTML=inicioOrcamento+meioOrcamento+fimOrcamento;
}