let desafiante = null, desafiado = null;

document.getElementById("Jugar").addEventListener("click", jugar);
document.getElementById("btnDesafiado").addEventListener("click", getDesafiado);
document.getElementById("btnDesafiante").addEventListener("click", getDesafiante);
document.getElementById("NumeroMax").addEventListener("change", mostrarBoton);

 function jugar(){
   if(desafiado != null && desafiante != null){
    if(desafiado == desafiante){
      document.getElementById("Resultado").innerText = `Desafiado: ${desafiado} || Desafiante ${desafiante} | Iguales`;
    }else{
      document.getElementById("Resultado").innerText = `Desafiado: ${desafiado} || Desafiante ${desafiante} | Distintos`;
    }
      desafiado = null;
      desafiante = null;
      if(document.getElementById("Jugar").innerText == 'Vuelta') document.getElementById("Jugar").innerText = 'Ida';
      else document.getElementById("Jugar").innerText = 'Vuelta';
    
      document.getElementById("Desafiado").className = 'Visible';
      document.getElementById("btnDesafiado").className = 'Visible';
      document.getElementById("lblDesafiado").className = 'Visible';  
      document.getElementById("Desafiante").className = 'Visible';
      document.getElementById("btnDesafiante").className = 'Visible';
      document.getElementById("lblDesafiante").className = 'Visible';
   }else{
     if(desafiado == null) alert("Falta ingresar un número para el desafiado")
     if(desafiante == null) alert("Falta ingresar un número para el desafiante")
   }
    
}

function mostrarBoton(){
    if(document.getElementById("NumeroMax").value != ''){
        document.getElementById("Jugar").className = 'Visible';
    }else{
        document.getElementById("Jugar").className = 'Oculto';
    }
}

function getDesafiado(){
  const maxNumero = document.getElementById("NumeroMax").value;
  const value = document.getElementById("Desafiado").value;
  if(validarInput(value, maxNumero)) desafiado = value;
  else alert("El número ingresado no es válido para el desafiado.");
  document.getElementById("Desafiado").value = '';
  document.getElementById("Desafiado").className = 'Oculto';
  document.getElementById("btnDesafiado").className = 'Oculto';
  document.getElementById("lblDesafiado").className = 'Oculto';
}

function getDesafiante(){
  const maxNumero = document.getElementById("NumeroMax").value;
  const value = document.getElementById("Desafiante").value;
  if(validarInput(value, maxNumero)) desafiante = value;
  else alert("El número ingresado no es válido para el desafiante.");
  document.getElementById("Desafiante").value = '';
  document.getElementById("Desafiante").className = 'Oculto';
  document.getElementById("btnDesafiante").className = 'Oculto';
  document.getElementById("lblDesafiante").className = 'Oculto';
}


function validarInput(input, max){
  let inp = parseInt(input);
  if(inp > 0 && inp <= max) return true;
  else return false;
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

setInputFilter(document.getElementById("NumeroMax"), function(value) {
    return /^\d*$/.test(value); });

setInputFilter(document.getElementById("Desafiante"), function(value) {
  return /^\d*$/.test(value); });

setInputFilter(document.getElementById("Desafiado"), function(value) {
  return /^\d*$/.test(value); });