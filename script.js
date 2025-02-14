//JAVASCRIPT
const form = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");

// Manejar el envío del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const newMessage = { name, email, subject, message };
    saveMessage(newMessage);

    // Mostrar mensaje de confirmación
    confirmationMessage.classList.remove("hidden");

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        confirmationMessage.classList.add("hidden");
    }, 3000);

    form.reset();
});

// Guardar en localStorage sin mostrar en la lista
function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
}

// Cargar mensajes al abrir sin mostrarlos en la lista
document.addEventListener("DOMContentLoaded", () => {
    console.log("Form ready.");
});
