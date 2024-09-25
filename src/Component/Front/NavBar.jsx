const Navbar = () => {
    return (
        <>
            <div className="container-fluid p-0 sticky-top">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="/Login" className="navbar-brand ml-lg-3">
                        <h3 className="m-0 text-uppercase text-info"><img src="/Image/logo.jpeg" style={{"width": "60px"}}/> IS-INFO</h3>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center px-lg-3 align-items-center" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a href="#acceuil" className="nav-item nav-link active" style={{'fontSize':'17px'}}>Acceuil</a>
                            <a href="#apropos" className="nav-item nav-link" style={{'fontSize':'17px'}}>Apropos</a>
                            <a href="#filiere" className="nav-item nav-link" style={{'fontSize':'17px'}}>Filiere</a>
                            <a href="#diplome" className="nav-item nav-link" style={{'fontSize':'17px'}}>Diplome</a>
                            <a href="#formation" className="nav-item nav-link" style={{'fontSize':'17px'}}>Formations</a>
                            <a href="#contact" className="nav-item nav-link" style={{'fontSize':'17px'}}>Contact</a>
                        </div>
                        <a href="/Login" className="btn btn-info">Se connecter</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;
