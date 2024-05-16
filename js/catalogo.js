const catalogo = [
  {
    path: "./img/ac2.jpg",
    alt: "Assassin's Creed II",
    href: "",
  },
  {
    path: "./img/ac3.jpeg",
    alt: "Assassin's Creed III",
    href: "",
  },
  {
    path: "./img/ac4.jpg",
    alt: "Assassin's Creed IV",
    href: "",
  },
  {
    path: "./img/acmirage.jpg",
    alt: "Assassin's Creed Mirage",
    href: "",
  },
  {
    path: "./img/acodyssey.png",
    alt: "Assassin's Creed Odyssey",
    href: "",
  },
  {
    path: "./img/acrevelations.jpg",
    alt: "Assassin's Creed Revelations",
    href: "",
  },
  {
    path: "./img/acsyndicate.jpg",
    alt: "Assassin's Creed Syndicate",
    href: "",
  },
  {
    path: "./img/acunity.jpg",
    alt: "Assassin's Creed Unity",
    href: "",
  },
  {
    path: "./img/acvalhalla.png",
    alt: "Assassin's Creed Valhalla",
    href: "",
  },
];
//simular useState
function useState(initialValue) {
  let state = initialValue;
  const getState = () => state;
  const setState = (newValue) => {
    state = newValue;
    render(); //actualizar el botón
  };
  return [getState, setState];
}

// Variables para mantener el estado
let [name, setName] = useState("Todos los juegos");
let ok = false;
function render() {
  const button = document.querySelector(".button");
  button.textContent = name();
}

const todos = document.querySelector(".todos");

//evento de clic del botón
document.querySelector(".button").addEventListener("click", () => {
  if (!ok) {
    catalogo.forEach((juego) => {
      const html = `
      <div class="carta">
        <article class=""><img src="${juego.path}"  alt="${juego.alt}"></article>
        <div class="epigrafe"><a class="enlace"
            href="${juego.href}">${juego.alt}</a>
        </div>
      </div>
`;

      todos.innerHTML += html;
    });
    ok = true;
  }
  // Alternar el nombre del botón
  if (name() === "Todos los juegos") {
    todos.style.display = "flex";

    setName("Ver menos");
  } else {
    todos.style.display = "none";
    setName("Todos los juegos");
  }
  console.log("Se cambió el nombre");
});

// Render inicial
render();
