const boton = document.getElementById('addBtn');
const inputTexto = document.getElementById('noteText');
const inputColor = document.getElementById('noteColor');
const tablero = document.getElementById('board');

const crearNota = () => {
    const texto = inputTexto.value.trim();
    const color = inputColor.value;

    if (texto !== "") {
        const nuevaNota = document.createElement('div');
        nuevaNota.className = 'nota';
        nuevaNota.style.backgroundColor = color;

        // Contenedor para el texto de la nota
        const contenidoTexto = document.createElement('p');
        contenidoTexto.innerText = texto;
        nuevaNota.appendChild(contenidoTexto);

        // Contenedor de botones
        const divBotones = document.createElement('div');
        divBotones.className = 'acciones';

        // Botón Editar
        const btnEditar = document.createElement('button');
        btnEditar.innerText = '✏️';
        btnEditar.onclick = () => {
            const nuevoTexto = prompt("Edita tu nota:", contenidoTexto.innerText);
            if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
                contenidoTexto.innerText = nuevoTexto;
            }
        };

        // Botón Eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.innerText = '🗑️';
        btnEliminar.onclick = () => {
            if (confirm("¿Seguro que quieres borrar esta nota?")) {
                nuevaNota.remove();
            }
        };

        divBotones.appendChild(btnEditar);
        divBotones.appendChild(btnEliminar);
        nuevaNota.appendChild(divBotones);
        
        tablero.prepend(nuevaNota);
        inputTexto.value = "";
        inputTexto.focus();
    }
};

boton.addEventListener('click', crearNota);