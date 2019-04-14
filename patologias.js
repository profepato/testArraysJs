var btnAgregarPatologia = document.getElementById("btnAgregarPatologia");
var btnEnviarPatología = document.getElementById("btnEnviarPatología");
var divListaPatologias = document.getElementById("divListaPatologias");
var inputJsonPatologias = document.getElementById("jsonPatologias");
var divMensaje = document.getElementById("mensaje");

// Listado de patologías (JS)
var listaPatologias = [];

btnAgregarPatologia.addEventListener("click", function(){
    // Rescatando el combo completo desde html
    var cboPatologia = document.getElementById("cboPatologia");

    // Rescatando el índice seleccionado
    var selectedIndex = cboPatologia.selectedIndex;

    // Rescatando los datos de patología
    var idPatologia = cboPatologia.value;
    
    if(!existPatologia(idPatologia)){
        var nombrePatologia = cboPatologia.options[selectedIndex].innerHTML;

        // Creando el objeto patología (JSON)
        var patologia = {};

        patologia.id = idPatologia;
        patologia.nombre = nombrePatologia;
        // Creando el objeto patología (JSON)

        // Añadiendo ese objeto a la "lista"
        listaPatologias.push(patologia);

        mostrarDatosEnHtml();

        console.log(listaPatologias);

        inputJsonPatologias.value = JSON.stringify(listaPatologias);
    }else{
        divMensaje.innerHTML = "Patología Ya ingresada";
    }
});


btnEnviarPatología.addEventListener("click", function(){
    console.log("Se van a enviar estos datos: ");
    console.log(listaPatologias);
});

function mostrarDatosEnHtml(){
    divListaPatologias.innerHTML = "";
    for(let patologia of listaPatologias){
        divListaPatologias.innerHTML += `
        <div id='fila'>
            <span>${patologia.id}</span>
            <span>${patologia.nombre}</span>
            <span><a href='#' onclick='eliminarPatologia(${patologia.id})'>Eliminar</a></span>
        </div>
        `;
    }
}

function eliminarPatologia(idPatologia){
    listaPatologias = listaPatologias.filter(function(patologia, index, arr){
        return patologia.id != idPatologia;
    });

    mostrarDatosEnHtml();
    inputJsonPatologias.value = JSON.stringify(listaPatologias);
}

function existPatologia(idPatologia){
    for(let patologia of listaPatologias){
        if(patologia.id == idPatologia){
            return true;
        }
    }

    return false;
}

/*
$jsonPatologias = $_POST["jsonPatologias"]; // JSON

// como procesar json desde php
// Investigar una funciona que pase de json string a un object --> array


*/