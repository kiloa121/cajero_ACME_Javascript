function login(usuarios){
    let valCuenta = prompt("Escriba su numero de cuenta")
    let valClave = prompt("Escriba su contraseña")

    if (usuarios.has(valCuenta)){
        alert("Cuenta encontrada")
        for (let [numCuenta, cuenta] of usuarios) {
            if (cuenta.clave === valClave) {
                alert("Contraseña encontrada")
                log = true
                break
            }
            else{
                alert("Clave incorrecta")}
        }
    }else{alert("Cuenta inexistente")}
    return log
}

let opc
const usuarios = new Map()

let menu = ("Bienvenido al CAJERO ACME \n \n" +
    "(1) Crear una cuenta bancaria \n" +
    "(2) Consignar dinero a una cuenta \n" +
    "(3) Retirar dinero \n" +
    "(4) Pagar servicios \n" +
    "(5) Mostrar movimientos bancarios \n" +
    "(0) Salir del programa \n"
)

while (opc != "0") {
    let log = false
    alert(menu)
    opc = prompt("Seleccione la tarea que desea realizar:")
    switch (opc) {
        case "1":
            alert("(1) Crear una cuenta bancaria")
            let numCuenta = prompt("Escriba su numero de cuenta")
            let numDocumento = prompt("Escriba su numero de documento")
            let nombre = prompt("Escriba su nombre completo")
            let clave = prompt("Escriba su contraseña")

            usuarios.set( numCuenta, {
                numDocumento: numDocumento,
                nombre: nombre,
                clave , clave,
                saldo: 0,
                movimientos: []
            });
            
            break;
            



        case "2":
            let numero = prompt ("(2) Consignar dinero a una cuenta \n Desea realizar la transaccion mediante: \n (1) Cuenta    (2) Documento")
            alert("Datos de todos los usuarios:\n" + JSON.stringify(Array.from(usuarios.entries())), null, 1);            
            switch (numero) {
                case "1":
                    let numCuenta = prompt("Escriba su numero de documento")
                    if (usuarios.has(numCuenta) ) {
                        let nuevoSaldo = prompt("Cuenta encontrada, ¿cuanto dinero desea consignar?: ")
                        usuarios.get(numCuenta).saldo += parseInt(nuevoSaldo)
                    }
                    else{
                        alert("Numero de cuenta inexistente")}
                    break;
                case "2":
                    let numDocumento = prompt("Escriba su numero de documento")
                    usuarios.forEach((cuenta, numCuenta) => {
                        if(cuenta.numDocumento === numDocumento) {
                            let nuevoSaldo = prompt ("Cuenta encontrada, ¿cuanto dinero desea consignar?: ")
                            cuenta.saldo += parseInt(nuevoSaldo)
                        }
                        else{
                            alert("Numero de documento inexistente")}
                    })
                        
                    break;
                    
            }
            alert("Datos de todos los usuarios:\n" + JSON.stringify(Array.from(usuarios.entries())), null, 1);            
                
            break;

        case "3":
            alert("(3) Retirar dinero \n Para retirar tiene que autentificarse primero")
            log = login(usuarios)
            alert(log)
            if (log) {
                let dineroARetirar = prompt("¡Ha ingresado correctamente¡ \n ¿Cuanto desea retirar!")
                usuarios.forEach((cuenta, numCuenta)=>{
                    if (cuenta.saldo >= dineroARetirar){
                        cuenta.saldo -= parseInt(dineroARetirar)
                        alert("Dinero retirado con exito, su saldo actual es: " + cuenta.saldo)
                    }else{
                        alert("No tienes suficiente dinero")
                    }
                })
            }
            break;
        case "4":
            alert("(4) Pagar recibos \n Para retirar tiene que autentificarse primero")
            log = login(usuarios)
            if (log){
                let tipoRecibo = prompt("¡Ha ingresado correctamente¡ \n ¿Que recibo desea pagar? \n (1) Energia    (2) Agua    (3) Luz")
                let dineroARetirar = prompt("Cuanto dinero cuesta el recibo")
                switch (tipoRecibo){
                    case "1":
                        

                }
                usuarios.forEach((cuenta, numCuenta)=>{
                    if (cuenta.saldo >= dineroARetirar){
                        cuenta.saldo -= parseInt(dineroARetirar)
                        alert("Dinero retirado con exito, su saldo actual es: " + cuenta.saldo)
                    }else{
                        alert("No tienes suficiente dinero")
                    }
                })
            }
    }
}


