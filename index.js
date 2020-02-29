var app = new Vue({
    el: "body",
    data: {
        eleccion:  null,
    },
    methods: {
        luz(sala){
            botones.forEach(element => {if(element.nombre === sala) {eleccion=element.estado; console.log(element.estado)} } );
            
        },
        cambio(sala){
            botones.forEach(element => {if(element.nombre === sala){ if(element.estado === true) {element.estado = false} else{element.estado=true} }})
        }
    }
})

var botones = [
    {
        nombre: 'SALA 1',
        estado: false
    }
]

var yellow = false