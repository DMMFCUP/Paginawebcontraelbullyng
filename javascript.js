
    // Manejo de reacciones a comentarios falsos
    const reactButtons = document.querySelectorAll('.react-button');

    reactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const countSpan = this.nextElementSibling;
            let count = parseInt(countSpan.textContent);
            count++;
            countSpan.textContent = count;
        });
    });

    const buttons = document.querySelectorAll('.react-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Cambiar el color del botón a verde
            button.style.backgroundColor = 'green';
            button.style.color = 'white'; // Cambiar el color del texto si es necesario

            // Opcional: deshabilitar el botón para que no se pueda presionar de nuevo
            button.disabled = true;
        });
    });
    const commentsContainer = document.getElementById('comments-container');
    const commentForm = document.getElementById('comment-form');

    // Función para cargar comentarios desde la API
    async function loadComments() {
        const response = await fetch('https://tu-api.com/comentarios'); // Cambia esto por tu API
        const comments = await response.json();
        comments.forEach(comment => {
            displayComment(comment);
        });
    }

    // Función para mostrar un comentario
    function displayComment(comment) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('fake-comment');
        commentDiv.innerHTML = `
            <p><strong>${comment.nombre}:</strong> ${comment.comentario}</p>
            <button class="react-button" data-id="${comment.id}">👍</button>
            <span class="reaction-count">${comment.reacciones}</span>
        `;
        commentsContainer.appendChild(commentDiv);
    }


