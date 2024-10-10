// URL de tu base de datos Turso y clave API
const TURSO_URL = 'https://<your-turso-instance-url>';
const TURSO_API_KEY = '<your-api-key>';

// Función para cargar los comentarios al cargar la página
async function loadComentarios() {
  const response = await fetch(${TURSO_URL}/comentarios, {
    method: 'GET',
    headers: {
      'Authorization': Bearer ${TURSO_API_KEY}
    }
  });

  if (!response.ok) {
    console.error('Error al cargar comentarios:', response.statusText);
    return;
  }

  const data = await response.json();
  const comentariosBody = document.getElementById('comentariosBody');
  comentariosBody.innerHTML = ''; // Limpiar la tabla antes de cargar nuevos datos

  // Agregar cada comentario a la tabla
  data.forEach((comentario) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${comentario.nombre}</td>
      <td>${comentario.comentario}</td>
    `;
    comentariosBody.appendChild(row);
  });
}

// Función para agregar un nuevo comentario
async function addComentario(nombre, comentario) {
  const response = await fetch(${TURSO_URL}/comentarios, {
    method: 'POST',
    headers: {
      'Authorization': Bearer ${TURSO_API_KEY},
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, comentario })
  });

  if (!response.ok) {
    console.error('Error al agregar comentario:', response.statusText);
    return;
  }

  loadComentarios(); // Recargar los comentarios después de agregar uno nuevo
}

// Manejar el envío del formulario
document.getElementById('comentarioForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que se recargue la página

  const nombre = document.getElementById('nombre').value;
  const comentario = document.getElementById('comentario').value;

  // Agregar el nuevo comentario
  addComentario(nombre, comentario);

  // Limpiar el formulario
  document.getElementById('comentarioForm').reset();
});

// Cargar los comentarios al iniciar la página
window.onload = loadComentarios;