<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $comentario = htmlspecialchars($_POST['comentario']);
    
    $comentarioCompleto = "Nombre: $nombre\nComentario: $comentario\n\n";
    
    file_put_contents("comentarios.txt", $comentarioCompleto, FILE_APPEND);
    echo "<p>Comentario guardado con éxito.</p>";
    echo "<a href='index.html'>Regresar a la página</a>";
}
?>
