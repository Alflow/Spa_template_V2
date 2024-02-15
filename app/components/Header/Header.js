export default function Header() {
  const $navbar = document.createElement("nav");

  $navbar.classList = "navbar navbar-expand-lg bg-body-tertiary";
  $navbar.setAttribute("data-bs-theme", "dark");

  $navbar.innerHTML = `  <div class="container-fluid">
  <a class="navbar-brand" href="#">PokeSpain API </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#pokemon">Pokedex España</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle" href="#entrenadores" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Gestiona los Pokemon!
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#insertarPokemon">Añade un nuevo Pokemon</a></li>
          <li><a class="dropdown-item" href="#modificarPokemon">Modifica tus Pokemon</a></li>
          <li><a class="dropdown-item" href="#eliminarPokemon">Elimina tus Pokemon</a></li>
          
          <li><hr class="dropdown-divider"></li>
         
        </ul>
      </li>
      
      <li class="nav-item">
        <a class="nav-link active" href="#insertarEntrenadores">Añade nuevos Entrenadores!</a>
      </li>
    </ul>
    
    <button type="button" class="btn mx-5 login" data-bs-toggle="modal"
    data-bs-target="#exampleModal">
    LOGIN
    </button>

    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    
    

  </div>
</div>
`;

  const $modal = document.createElement("div");

  $modal.innerHTML = ` <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body rounded">
            <form class="rounded" id="loginForm" method="POST">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">No compartiremos tus datos con nadie</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
                </div>
                <a class="nav-link active text-end" aria-current="page" href="#">¿No registrado? Regístrate
                    aquí.</a>
                <button type="submit" class="btn">Acceder</button>
            </form>
        </div>
    </div>
</div>
</div>`;

  $navbar.appendChild($modal);

  // Espera a que el DOM cargue completamente antes de agregar el event listener.
  document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let formData = new FormData(form);

      envio({
        url: "https://dummyjson.com/auth/login",
        method: "POST",
        // datos: JSON.stringify(Object.fromEntries(formData)),
        datos: formData,
        cbSuccess: (data) => {
          console.log(data);
        },
      });
    });
  });

  // Devuelve el navbar completo con el modal ya incluido.
  return $navbar;
}
