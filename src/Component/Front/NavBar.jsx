const Navbar = () => {
    return (
        <>
            <div className="container-fluid p-0 sticky-top">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="/Login" className="navbar-brand ml-lg-3">
                        <h3 className="m-0 text-uppercase text-info"><img src="public/acceuil/image/logo isinfo 2019-2020.PNG" style={{"width": "60px"}}/> IS-INFO</h3>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a href="index.html" className="nav-item nav-link active" style={{'fontSize':'13px'}}>Acceuil</a>
                            <a href="about.html" className="nav-item nav-link" style={{'fontSize':'13px'}}>Apropos</a>
                            <a href="about.html" className="nav-item nav-link" style={{'fontSize':'13px'}}>Filiere</a>
                            <a href="about.html" className="nav-item nav-link" style={{'fontSize':'13px'}}>Diplome</a>
                            <a href="about.html" className="nav-item nav-link" style={{'fontSize':'13px'}}>Formations</a>
                            <a href="course.html" className="nav-item nav-link" style={{'fontSize':'13px'}}>Contact</a>
                        </div>
                        <a href="/Login" className="btn btn-info py-2 px-4 d-none d-lg-block">Se connecter</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;
