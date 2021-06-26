 
const sndNote = document.getElementById("snd-note")

/* modal */
let modal = document.querySelector(".modal-background")
const cerrar= document.querySelector(".cerrar")
const result =document.querySelector(".resultado")
const message = document.querySelector(".mensaje")

cerrar.addEventListener("click",()=>{
    modal.classList.remove("animations")
})

sndNote.addEventListener("click",()=>{
    let resultado, mensaje;
    try {
        let prevRes = parseInt(document.getElementById("note").value)
        if (isNaN(prevRes)) {
            throw "Ingrese solo números"
        }
        
       mensaje = definirMensaje(prevRes)
       resultado = verificarAprobacion(7,5,prevRes);  
    } catch (error) {
        resultado = "error"
        mensaje = "Intentaste hackear el sitio"
        
    }
    //abriremos un modal
   openModal(resultado, mensaje);  
   modal.classList.add("animations")
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
          case 1:resultado = "Muy deficiente"
          break;
          case 2:resultado = "Muy deficiente"
          break;
          case 3:resultado = "Muy deficiente"
          break;
          case 4:resultado = "Deficiente"
          break;
          case 5:resultado = "Deficiente"
          break;
          case 6:resultado = "Deficiente"
          break;
          case 7:resultado = "Aprobado"
          break;
          case 8:resultado = "Muy Bien"
          break;
          case 9:resultado = "Excelente"
          break;
          case 10:resultado = "Summacunlaude"
          break;
    
        default:resultado = null
            break;
    } return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    nota1 = 7;
    nota2 = 5;
    promedio = (nota1 + nota2 + prevRes)/3
    if (promedio >= 7) {
        return "APROBADO" 
        
    } return "DESAPROBADO"
 
} 
const openModal = (resultado,mensaje)=>{
    result.textContent= resultado;
    message.textContent= mensaje;
  
    if (result.textContent==="APROBADO") result.classList.add("green")
    else result.classList.add("red")
   
}





