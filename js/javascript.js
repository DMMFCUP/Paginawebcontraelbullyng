
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

            button.disabled = true;
        });
    });
    const commentsContainer = document.getElementById('comments-container');
    const commentForm = document.getElementById('comment-form');



