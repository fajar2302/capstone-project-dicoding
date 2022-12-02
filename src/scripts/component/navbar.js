class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg bg-light ">
    <a class="navbar-brand" href="#">
        <div class="logo">
            <img src="../public/landing-page-picture/green-city 1.png" alt="Logo">
        </div>
        <div class="title">
            <h1>PeduliLingkungan</h1>
        </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto"">
            <li class=" nav-item">
            <a class="nav-link active" aria-current="page" href="#/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/tentang-sampah">Tentang Sampah</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/login">Login</a>
            </li>
        </ul>
    </div>
</nav>`;
  }
}

customElements.define('nav-bar', Navbar);
