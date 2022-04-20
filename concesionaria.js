let autos = require('./autos')
let personas = require('./personas')

const concesionaria = {
 autos: autos,
 personas: personas,
 buscarAuto: function (patente){
    for (let i=0; i<autos.length; i++){
    if (autos[i].patente === patente){
    return autos[i]
 } 
 else if (autos[i].patente =! patente){
 return null
 }
}
},
venderAuto: function(patente, callback) {
this.buscarAuto(patente).vendido = true
return this.buscarAuto(patente)
},
autosParaLaVenta: function(){
    let autosParaVenta = autos.filter(function(auto) {
        return auto.vendido == false;  }
    )
    return autosParaVenta;
    },
autosNuevos: function(){
    let disponibles = this.autosParaLaVenta()
    let autosNuevos = disponibles.filter(function(auto) {
        return auto.km < 100;  }
    )
    return autosNuevos;
    },
listaDeVentas: function (){
    let autosVendidos = autos.filter(function(auto){
    return auto.vendido == true;
    })
    const listaVentas = autosVendidos.map(function(auto){
    return auto.precio
    })
    return listaVentas
    },
totalDeVentas: function(){
    let ventas = this.listaDeVentas()
    let suma = ventas.reduce(function(acum,ventas) {
    return acum + ventas;  }
    ,0)
    return suma
    },
puedeComprar: function(auto, persona){
        return persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas) && persona.capacidadDePagoTotal > auto.precio
    },
autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta().filter(function(auto){
          if(this.puedeComprar(auto,persona)){
            return auto
          }
        })
    }}

console.log(concesionaria.autosQuePuedeComprar('Juani'))


//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.venderAuto('APL123'))
//console.log(concesionaria.buscarAuto('JJK116'))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.puedeComprar('APL123','Juani')) ESTE NO FUNCA