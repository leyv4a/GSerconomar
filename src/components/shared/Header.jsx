


function Header() {

  const estilos = {
    
  }
  return (
   <>
  <nav class="navbar navbar-expand-lg px-5">
  <div class="container-fluid">
    <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none d-xl-none" href="#">SerconomarLogo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
         <a class="nav-link active" href="#">Productos</a>
        <a class="nav-link active" href="#">Nosotros</a>
        <a class="nav-link active" href="#">Procesos</a>
        <a class="nav-link active" href="#">Filosofia</a>
        <a class="nav-link active" href="#">Nosotros</a>
      </div>
      <span>
        <a class="btn btn-primary" href="#">Bolsa de trabajo</a>
      </span>
    </div>
  </div>
</nav>
</>
  )
}

export default Header