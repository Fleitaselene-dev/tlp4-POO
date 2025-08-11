class CuentaBancaria {
    #saldoInicial;
    constructor(titular, saldoInicial){
    this.titular = titular
    this.#saldoInicial = saldoInicial
    };
  get saldoInicial() {
    return this.#saldoInicial;
  }
  set depositar (monto) {
    if (monto >= 0) {
      this.#saldoInicial += monto;
    }
  }

  set extraer(monto) {
    if (monto > this.#saldoInicial) {
      return console.log( "Fondos insuficientes");
    }else{
     this.#saldoInicial -= monto;
  }
}
  get consultarSaldo(){
    console.log(`4. Saldo Actual: $${this.saldoInicial}`)
  }
} 

const Cuenta = new CuentaBancaria("Selene Fleita", 10000)
console.log(`1. Tu saldo: $${Cuenta.saldoInicial}`)
console.log(`2. Se ha depositado: $${Cuenta.depositar = 2000}`)
console.log(`3. Haz extraido: $${Cuenta.extraer = 4000}`)
Cuenta.consultarSaldo

