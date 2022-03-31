/*HTML References*/
const lista = document.getElementById("lista");
const nombreInsertado = document.getElementById("nombreInsertado");
const anadirBtn = document.getElementById("anadirBtn");
const idArray = new Array(0);
let largoIdArray = 0;

const eliminarNombre = (elementoListaABorrar) => {
    lista.removeChild(elementoListaABorrar);
    idArray.splice(elementoListaABorrar.id,1);
    console.log(elementoListaABorrar.id);
 
    for(let i = elementoListaABorrar.id; i < idArray.length; i++){
        idArray[i].setAttribute("id",i);
    }
}

const anadirNombre = () => {
    const nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.innerHTML = `${nombreInsertado.value}`;
    nuevoElementoLista.setAttribute("class", "roll-in-blurred-left");
    nuevoElementoLista.setAttribute("id", idArray.length);
    nuevoElementoLista.addEventListener("click", () => eliminarNombre(nuevoElementoLista));
    idArray[idArray.length] = nuevoElementoLista;
    lista.appendChild(nuevoElementoLista);
    nombreInsertado.value = "";
}

const presionoEnter = (event) => {
    if(event.code == 'Enter') anadirNombre();
}

/*Event listeners*/ 
anadirBtn.addEventListener("click", () => anadirNombre());
nombreInsertado.addEventListener("keydown",presionoEnter);
