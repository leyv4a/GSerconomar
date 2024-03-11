


function Header() {

 
  return (
   <>
  <nav class="navbar navbar-expand-lg sticky-top container">
  <div class="container-fluid">
    <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none d-xl-none" href="#">SerconomarLogo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav me-auto mb-2 mb-lg-0 mt-xs-5 fw-semibold">
         <a class="nav-link active text-center" href="#">Productos</a>
        <a class="nav-link active text-center" href="#">Nosotros</a>
        <a class="nav-link active text-center" href="#">Procesos</a>
        <a class="nav-link active text-center" href="#">Filosofia</a>
        <a class="nav-link active text-center" href="#">Nosotros</a>
      </div>
      <span className="d-flex justify-content-center">
        <a class="btn btn-primary " href="#">Bolsa de trabajo</a>
      </span>
    </div>
  </div>
</nav>
</>
  )
}

export default Header