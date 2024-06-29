// Simular useState
function useState(initialValue) {
  let state = initialValue;
  const getState = () => state;
  const setState = (newValue) => {
    state = newValue;
    render(); // Actualizar el botón
  };
  return [getState, setState];
}

// Variables para mantener el estado
let [name, setName] = useState("Todos los juegos");
let ok = false;
let catalogo = [];

// Renderizar el botón con el nombre actual
function render() {
  const button = document.querySelector(".button");
  button.textContent = name();
}

// Función para obtener los datos de la API
const fetchCatalogo = async () => {
  try {
    const response = await fetch("http://localhost:3000/juegos");
    const data = await response.json();
    catalogo = data;
    renderCatalogo();
  } catch (error) {
    console.error("Error:", error);
  }
};

// Función para renderizar el catálogo
const renderCatalogo = () => {
  const todos = document.querySelector(".todos");
  todos.innerHTML = ""; // Limpiar contenido existente
  catalogo.forEach((juego) => {
    const html = `
      <div class="carta">
        <article class=""><img src="${juego.imagen_juego}" alt="${juego.nombre_juego}"></article>
        <div class="epigrafe"><a class="enlace" target="_blank" href="${juego.url_juego}">${juego.nombre_juego}</a></div>
      </div>
    `;
    todos.innerHTML += html;
  });
};

// Evento de clic del botón
document.querySelector(".button").addEventListener("click", () => {
  if (!ok) {
    fetchCatalogo();
    ok = true;
  }

  // Alternar el nombre del botón y la visibilidad del catálogo
  const todos = document.querySelector(".todos");
  if (name() === "Todos los juegos") {
    todos.style.display = "flex";
    setName("Ver menos");
  } else {
    todos.style.display = "none";
    setName("Todos los juegos");
  }
});

// Render inicial
render();
