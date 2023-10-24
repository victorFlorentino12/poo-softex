// Objeto Material: Carro
class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.velocidade = 0;
    }
  
    Iniciar() {
      console.log(`O ${this.modelo} começou a funcionar.`);
    }
  
    Acelerar() {
      this.velocidade += 10;
      console.log(`Acelerando. Velocidade: ${this.velocidade} km/h.`);
    }
  
    Frear() {
      this.velocidade -= 5;
      console.log(`Reduzindo a velocidade. Velocidade: ${this.velocidade} km/h.`);
    }
  }
  
  // Objeto Abstrato: Conta Bancária
  class ContaBancaria {
    constructor(numeroConta, titular) {
      this.numeroConta = numeroConta;
      this.titular = titular;
      this.saldo = 0;
    }
  
    Depositar(quantidade) {
      this.saldo += quantidade;
      console.log(`Depósito de ${quantidade} realizado. Novo saldo: ${this.saldo}`);
    }
  
    Sacar(quantidade) {
      if (quantidade <= this.saldo) {
        this.saldo -= quantidade;
        console.log(`Saque de ${quantidade} realizado. Novo saldo: ${this.saldo}`);
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    VerificarSaldo() {
      console.log(`Saldo da conta de ${this.titular}: ${this.saldo}`);
    }
  }
  
  // Exemplos de uso
  const meuCarro = new Carro("Sedan", "Azul");
  meuCarro.Iniciar();
  meuCarro.Acelerar();
  meuCarro.Frear();
  
  const minhaConta = new ContaBancária(12345, "João");
  minhaConta.Depositar(1000);
  minhaConta.Sacar(500);
  minhaConta.VerificarSaldo();
  