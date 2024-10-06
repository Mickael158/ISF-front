import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Gérer l'ouverture et la fermeture de la navbar
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Fermer la navbar lorsque l'utilisateur clique sur un lien
    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="container-fluid p-0 sticky-top">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="/Login" className="navbar-brand ml-lg-3">
                        <h3 className="m-0 text-uppercase text-info">
                            <img src="/Image/logo.jpeg" style={{ width: "60px" }} alt="Logo" /> IS-INFO
                        </h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarCollapse"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : 'hide'} transition`} id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a href="#acceuil" className="nav-item nav-link active" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                Acceuil
                            </a>
                            <a href="#apropos" className="nav-item nav-link" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                A propos
                            </a>
                            <a href="#filiere" className="nav-item nav-link" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                Filière
                            </a>
                            <a href="#diplome" className="nav-item nav-link" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                Diplôme
                            </a>
                            <a href="#formation" className="nav-item nav-link" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                Formations
                            </a>
                            <a href="#contact" className="nav-item nav-link" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                Contact
                            </a>
                            <a href="#evenement" className="nav-item nav-link" style={{ fontSize: '17px' }} onClick={closeNavbar}>
                                Evènement
                            </a>
                        </div>
                        <a href="/Login" className="btn btn-info" onClick={closeNavbar}>Se connecter</a>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
