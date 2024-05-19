const catalogo = [
  {
    path: "./img/ac2.jpg",
    alt: "Assassin's Creed II",
    href: "",
  },
  {
    path: "./img/ac3.jpeg",
    alt: "Assassin's Creed III",
    href: "https://www.ubisoft.com/es-mx/game/assassins-creed/assassins-creed-3-remastered",
  },
  {
    path: "./img/ac4.jpg",
    alt: "Assassin's Creed IV",
    href: "https://store.ubisoft.com/ofertas/assassins-creed-iv-black-flag-gold-edition/575ffdb4a3be1633568b4e92.html?lang=es_AR&lang=la_AR",
  },
  {
    path: "./img/acmirage.jpg",
    alt: "Assassin's Creed Mirage",
    href: "https://store.ubisoft.com/ofertas/assassins-creed-mirage/62ea4f9709372571f2736a72.html?lang=es_AR&lang=la_AR",
  },
  {
    path: "./img/acodyssey.png",
    alt: "Assassin's Creed Odyssey",
    href: "https://store.ubisoft.com/ofertas/assassins-creed-odyssey---ultimate-edition/5afda8aa6b54a4271407a877.html?lang=es_AR&lang=la_AR",
  },
  {
    path: "./img/acrevelations.jpg",
    alt: "Assassin's Creed Revelations",
    href: "https://www.ubisoft.com/es-mx/game/assassins-creed/revelations",
  },
  {
    path: "./img/acsyndicate.jpg",
    alt: "Assassin's Creed Syndicate",
    href: "https://www.ubisoft.com/es-mx/game/assassins-creed/syndicate",
  },
  {
    path: "./img/acunity.jpg",
    alt: "Assassin's Creed Unity",
    href: "https://store.ubisoft.com/ofertas/assassins-creed-unity/575ffdb7a3be1633568b4ed8.html?lang=es_AR&lang=la_AR",
  },
  {
    path: "./img/acvalhalla.png",
    alt: "Assassin's Creed Valhalla",
    href: "https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla",
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

const todos = document.querySelector(".contenedorDeImagenes");

//evento de clic del botón
document.querySelector(".button").addEventListener("click", () => {
  if (!ok) {
    catalogo.forEach((juego) => {
      const html = `
      <div class="carta">
        <article class=""><img src="${juego.path}"  alt="${juego.alt}"></article>
        <div class="epigrafe"><a class="enlace" target="_blank"
            href="${juego.href}" >${juego.alt}</a>
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
});

// Render inicial
render();
