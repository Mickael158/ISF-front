const Footer = () => {
    return (
        <>
            <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{"marginTop": "90px"}}>
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-4 mb-5">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="mt-n2 text-uppercase text-white">IS-INFO</h1>
                    </a>
                    <p className="m-0">L Institut de reference en Informatique</p>
                </div>
                <div className="col-md-12 mb-5">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Informations</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>Lot IBI 22 Ampasamadinika - Antananarivo 101 Madagascar</p>
                            <p><i className="fa fa-phone mr-2"></i>034 74 966 18 / 034 60 409 50</p>
                            <p><i className="fa fa-envelope mr-2"></i>direction@isinfo.mg / isinfo@blueline.mg</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-facebook-f"></i></a>
                                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-whatsapp"></i></a>
                                <a className="text-white mr-4" href="#"><i className="fa fa-2x fa-envelope"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Filieres</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Informatique de Gestion (IG)</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Maintenace et Reseau (MR)</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Genie Logiciel (GL)</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Administrateur Systems et Reseaux (ASR)</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Diplome</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Licence Bac +3</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Master Bac +5</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{"borderColor": "rgba(256, 256, 256, .1) !important"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0">Copyright &copy; <a className="text-white" href="#">zosephatoky@gmail.com / razafindrakotomickael77@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Footer;