document.getElementById("Jugar").addEventListener("click", jugar);
document.getElementById("NumeroMax").addEventListener("change", mostrarBoton);

 function jugar(){
    const maxNumero = document.getElementById("NumeroMax").value;
    const desafiado =  getRandomNumber(maxNumero);
    const desafiante =  getRandomNumber(maxNumero);
    console.log(desafiado);
    document.getElementById("DesafiadoResultado").innerText = `Desafiado: ${desafiado}`;
    document.getElementById("DesafianteResultado").innerText = `Desafiante: ${desafiante}`;

    document.getElementById("Jugar").innerText = 'Vuelta';
}

function mostrarBoton(){
    if(document.getElementById("NumeroMax").value != ''){
        document.getElementById("Jugar").className = 'Visible';
    }else{
        document.getElementById("Jugar").className = 'Oculto';
    }
}



function getRandomNumber(max){
    const url = new URL(`http://www.randomnumberapi.com/api/v1.0/random?min=1&max=${max}&count=2`);
    let params = { 
        min : 1,
        max: max,
        count: 2
    }
    //url.search = new URLSearchParams(params).toString();
    console.log('url',url)
    fetch(url,{
        method: 'GET',
        mode: 'no-cors'
    }).then(res =>res.json())
    .then(data => {
      return data
    })
    .catch(error => console.error(error))
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