var contE = 0, contME = 0;
var table = document.querySelector('table');
table.addEventListener('click', function(evento){
  var celula = evento.target;
  if((celula.className!='linha')&&(celula.className!='corpo')){
    if((evento.shiftKey == true)&&(celula.className!='corredor')&&(celula.className!='meia')&&(celula.className!='inteira')){
      celula.className = 'inteira';
      contE++;
    }
    if((evento.altKey == true)&&(celula.className!='corredor')&&(celula.className!='inteira')&&(celula.className!='meia')){
      celula.className = 'meia';
      contME++;
    }
    if((evento.ctrlKey == true)&&(celula.className!='corredor')&&(celula.className!= 'assento')){
      if(celula.className == 'meia'){
        contME--;
      }
      if(celula.className == 'inteira'){
        contE--;
      }
      celula.className = 'assento';
    }
  }
});
onkeyup = function(){
  var entrada = document.getElementById('valor').value;
  var meiaentrada = parseFloat(entrada/2);
  var precoentrada = document.getElementById('entrada');
  var precomeiaentrada = document.getElementById('meiaentrada');
  var total = document.getElementById('contatotal');
  var output = document.getElementById('meia');
  output.innerHTML = meiaentrada;
  entrada*=contE;
  meiaentrada*=contME;

  total = "TOTAL = "+(entrada+meiaentrada)+" Reais.";

  if(contE>1){
    entrada = contE+" entradas inteiras por "+entrada+" Reais";
  }else{
    entrada = contE+" entrada inteira por "+entrada+" Reais";
  }
  if(contME>1){
    meiaentrada = contME+" meias entradas por "+meiaentrada+" Reais.";
  }else{
    meiaentrada = contME+" meia entrada por "+meiaentrada+" Reais.";
  }

  precoentrada.innerHTML = (entrada);
  precomeiaentrada.innerHTML = (meiaentrada);
  contatotal.innerHTML = (total);
}
