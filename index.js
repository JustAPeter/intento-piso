var app = new Vue({
    el: '#app',
    data: {
        eleccion:  null,
        botones:[
            {
                nombre: 'SALA 1',
                estado: false
            }
        ]
    },
    methods: {
        luz(sala){
            botones.forEach(element => {if(element.nombre === sala) eleccion=element.estado } );

        },
        cambio(sala){
            botones.forEach(element => {if(element.nombre === sala){ if(element.estado === true) {element.estado = false} else{element.estado=true} }})
        }
    }
})