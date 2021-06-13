var v=0
var c=0
let sequencia=[]
let jogou=[]
var mudarsequencia=false
var valorsequencia=0
var timersequencia
var mudando=true    
var click=document.getElementById("click")
var perdeu=document.getElementById("perdeu")
var win=document.getElementById("ganhou")
var jogando=false
function mudarCor(cor){
    var espaco=document.getElementById(`espaco${cor}`)
    espaco.setAttribute("src","_imagens/espaco_azul_modificado.jpg")
    var timer=setTimeout(function(){espaco.setAttribute("src","_imagens/espaco_modificado.jpg")},1000)
}
function iniciarJogo(){
    if(jogando==false){
    jogando=true
    sequencia=[]
    jogou=[]
    c=0
    v=0
    mudarsequencia=false
    valorsequencia=0
    gerarSequencia()
    }
}
function gerarSequencia(){
    mudando=true
    var continua=false
    while(continua==false){
    var aleatorio=(Math.floor(Math.random()*9+1))
    if(sequencia.indexOf(aleatorio)==-1){
        sequencia.push(aleatorio)
        continua=true
    }
    }
    timersequencia=setInterval(mostrarSequencia,1000)
}
function jogar(valor){
    var ganhou=verificar(valor)
    if(ganhou==true){
    click.play()
    mudarCor(valor)
    if(c==sequencia.length){
        v++
        var avancou=document.getElementById(`circulo${v}`)
        avancou.setAttribute("src","_imagens/circulo_verde_modificado.png")
        if(v==5){
            win.play()
            var timer1=setTimeout(mudarCorAzul,1500)
            var timer2=setTimeout(ganhar,1600)
        }
        c=0
        gerarSequencia()
    }
    }
}
function verificar(jogada){
    var acertou=false
    if(sequencia[c]==jogada){
        c++
        acertou=true
        return acertou
    }
    if(acertou==false){
        perdeu.play()
        mudarCorVermelho()
        var timer2=setTimeout(perder,1005)
        return acertou
    }
}
function mudarCorVermelho(){
    for(var i=1;i<=9;i++){
        var auxiliar=document.getElementById(`espaco${i}`)
        auxiliar.setAttribute("src","_imagens/espaco_vermelho_modificado.jpg")
    }
}
function mudarCorPreto(){
    for(var i=1;i<=9;i++){
        var auxiliar=document.getElementById(`espaco${i}`)
        auxiliar.setAttribute("src","_imagens/espaco_modificado.jpg")
    }
}
function mostrarSequencia(){
    mudarCor(sequencia[valorsequencia])
    valorsequencia+=1
    if(valorsequencia==sequencia.length){
        clearInterval(timersequencia)
        valorsequencia=0
        var timer=setTimeout(function(){mudando=false},1500)
    }
}
function mudarCorAzul(){
    for(var i=1;i<=9;i++){
        var auxiliar=document.getElementById(`espaco${i}`)
        auxiliar.setAttribute("src","_imagens/espaco_azul_modificado.jpg")
    }
}
function ganhar(){
    alert("Você ganhou")
    window.location.reload()
}
function perder(){
    alert("Você perdeu")
    window.location.reload()
}
function verificarClick(valor){
    if(mudando==false){
        jogar(valor)
    }else{

    }
}
