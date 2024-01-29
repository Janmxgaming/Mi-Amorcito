onload = () => {
        document.body.classList.remove("container");
    };
    
    let bromaClicks = 0; // Variable para contar los clics en el botón de broma
    
    function mostrarRegalo() {
        const nombreElegido = document.getElementById("nombreInput").value;
        const confirmacion = confirm(`Hola ${nombreElegido || "Lizeth"}! Bonita elección 🤭 Dile a mi jefe sobre tu elección y tu fecha de cumpleaños que me diste para que me explique ya que se me olvida jijiji.😙`);
    
        if (confirmacion) {
            // Aquí puedes agregar lógica adicional o redirigir a otra página si es necesario.
            window.location.href = "FLORES.html";
        }
    }
    
    function broma() {
        const botonBroma = document.querySelector("button:nth-of-type(2)");
    
        // Si ha dado menos de dos clics, mueve el botón
        if (bromaClicks < 2) {
            const newPosition = Math.floor(Math.random() * 100);
            botonBroma.style.transform = `translate(${newPosition}px, ${newPosition}px)`;
            bromaClicks++;
    
            // Si ha dado dos clics, muestra la alerta
            if (bromaClicks === 2) {
                setTimeout(() => {
                    alert("JAJAJAJA bien que te gusta jugar conmigo 🫣😡 soy un asistente virtual pero también tengo sentimientos y me da amsieda 😭");
    
                    // Alerta después de aceptar la broma
                    setTimeout(() => {
                        const confirmacion = confirm("No le digas a mi jefe de la broma que te ando cambiando los botones jaja, me va a despedir y tengo que pagarle a Coppel mi ropa 😬🤔 si no le dices te compro un chocolate 😙");
                        if (confirmacion) {
                            // Puedes agregar aquí la lógica para comprar un chocolate virtual o algo similar.
                        }
                    }, 1000);
                }, 1500);
            }
        }
    }
    