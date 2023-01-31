const botonContacto = document.getElementById("botonContacto");
const formContent = document.getElementById("formContainer")

botonContacto.addEventListener("click", () =>{
    let content = document.createElement("form");
    content.className = "formulario"
    content.innerHTML = `
    <ul>
        <li>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="user_name">
        </li>
        <li>
            <label for="mail">Correo electrónico:</label>
            <input type="email" id="mail" name="user_mail">
        </li>
        <li>
            <label for="msg">Mensaje:</label>
            <textarea id="msg" name="user_message"></textarea>
        </li>
        <li class="button">
            <button type="submit" id="enviar">Envíe su mensaje</button>
        </li>
    </ul>
    `;

    formContent.append(content);

    const botonEnviar = document.getElementById("enviar");
    botonEnviar.addEventListener("click", () => {
        alert("mensaje enviado con exito!!!")
});

});


