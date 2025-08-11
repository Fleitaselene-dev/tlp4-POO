
 function CuentaBancaria (titular, saldoInicial){
    this.titular = titular
    this.saldoInicial = saldoInicial
 }
 CuentaBancaria.prototype.depositar = function(monto){
   this.saldoInicial += monto;
 };
 CuentaBancaria.prototype.extraer = function(monto){
  if(this.saldoInicial >= monto ){
    this.saldoInicial -= monto
  }else{
   return console.log("Fondos insuficientes")
  }
  };
  CuentaBancaria.prototype.consultarSaldo = function(){
 console.log(`Saldo Actual: $${this.saldoInicial}`)
  }
const Cuenta = new CuentaBancaria("Lucas Cardenas", 10000)
Cuenta.depositar(2000)
Cuenta.extraer(5000)
Cuenta.consultarSaldo()