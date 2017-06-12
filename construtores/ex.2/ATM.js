function ATM(abastecer, compartimento, consultarQuantidade){
  this.compartimento = [ [5,0], [10,0], [20,0], [50,0], [100,0] ];
}
ATM.prototype.abastecer = function(valor, compartimento){
  for (var x = 0; this.compartimento[x].indexOf(compartimento)==-1; x++) {
    if(x==4){
      return 0;
    }
  }
  if(this.compartimento[x].indexOf(compartimento)!=-1){
    this.compartimento[x][1] += valor;
    return true;
  }
}
ATM.prototype.consultarQuantidade = function(compartimento){
  for (var x = 0; this.compartimento[x].indexOf(compartimento)==-1; x++) {
    if(x==this.compartimento.length-1){
      return 0;
    }
  }
  if(this.compartimento[x].indexOf(compartimento)!=-1){
    return this.compartimento[x][1];
  }
}
ATM.prototype.consultarValor = function(){
  var total = 0;
  for (var x=0; x<=this.compartimento.length-1; x++){
    var quant = (this.compartimento[x][0] * this.compartimento[x][1]);
    total += quant;
  }
  return total;
}
ATM.prototype.retirar = function(valor){
  if (valor >= 100) {
    notas = Math.trunc(valor/100);
    if(notas <= this.compartimento[4][1]){
      this.compartimento[4][1]-= notas;
    }
    notas = Math.trunc((valor%100)/50);
    if(notas <= this.compartimento[3][1]){
      this.compartimento[3][1]-= notas;
    }
    notas = Math.trunc(((valor%100)%50)/20);
    if(notas <= this.compartimento[2][1]){
      this.compartimento[2][1]-=notas;
    }
    notas = Math.trunc((((valor%100)%50)%20)/10);
    if(notas <= this.compartimento[1][1]){
      this.compartimento[1][1]-=notas;
    }
    notas = Math.trunc(((((valor%100)%50)%20)%10)/5);
    if(notas <= this.compartimento[0][1]){
      this.compartimento[0][1]-=notas;
    }
  }
  if ((valor >= 50)&&(valor <= 100)) {
    notas = Math.trunc(valor/50);
    if(notas <= this.compartimento[3][1]){
      this.compartimento[3][1]-= notas;
    }
    notas = Math.trunc((valor%50)/20);
    if(notas <= this.compartimento[2][1]){
      this.compartimento[2][1]-= notas;
    }
    notas = Math.trunc(((valor%50)%20)/10);
    if(notas <= this.compartimento[1][1]){
      this.compartimento[1][1]-=notas;
    }
    notas = Math.trunc((((valor%50)%20)%10)/5);
    if(notas <= this.compartimento[0][1]){
      this.compartimento[0][1]-=notas;
    }
  }
  if ((valor >= 20)&&(valor <= 50)){
    notas = Math.trunc(valor/20);
    if(notas <= this.compartimento[2][1]){
      this.compartimento[2][1]-= notas;
    }
    notas = Math.trunc((valor%20)/10);
    if(notas <= this.compartimento[1][1]){
      this.compartimento[1][1]-= notas;
    }
    notas = Math.trunc(((valor%20)%10)/5);
    if(notas <= this.compartimento[0][1]){
      this.compartimento[0][1]-=notas;
    }
  }
  if ((valor >= 10)&&(valor <= 20)) {
    notas = Math.trunc(valor/10);
    if(notas <= this.compartimento[1][1]){
      this.compartimento[1][1]-= notas;
    }
    notas = Math.trunc((valor%10)/5);
    if(notas <= this.compartimento[0][1]){
      this.compartimento[0][1]-= notas;
    }
  }
  if ((valor >= 5)&&(valor <= 10)){
    notas = Math.trunc(valor/5);
    if(notas <= this.compartimento[0][1]){
      this.compartimento[0][1]-= notas;
    }
  }
}

const atm = new ATM();
// abastecendo com 20 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.consultarQuantidade(100)); // 33
// espera-se 33 cédulas
console.log(atm.consultarQuantidade(100) === 33);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.consultarQuantidade(5)); // 0
console.log(atm.consultarQuantidade(5) === 0);
console.log(atm.consultarQuantidade(50)); // 0
console.log(atm.consultarQuantidade(50) === 0);
// mesmo os que não existem
console.log(atm.consultarQuantidade(3)); // 0
console.log(atm.consultarQuantidade(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.consultarQuantidade(3) === 0);
// consultando o valor
console.log(atm.consultarValor()); // 33 * 100 = 3300 reais
console.log(atm.consultarValor() === 3300);
// retirada rejeitada, não há cédulas que combinem R$ 350,00 (por ex.: de R$ 10, R$ 20 ou R$ 50)
atm.retirar(350);
console.log(atm.consultarQuantidade(100) === 33);
console.log(atm.consultarValor() === 3300);

// até aqui 0.3 pontos <=========================================
