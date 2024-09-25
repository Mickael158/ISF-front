const Apropos = () => {
    return (
        <div className="container-fluid bg-image" style={{"margin": "10px 0 90px 0"}} id="apropos">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 my-5 pb-lg-5">
                    <div className="section-title position-relative mb-4">
                        <h1 className="display-6">APROPOS</h1> 
                    </div>
                    <h6 className="mb-4 pb-2 font-weight-bold">L IS-INFO est une Institut dans la formation des jeunes dans le domaine de l Informatique, a ce jours elle a dejas 20 ans d experience dans ce domaine avec des professeurs qualifiers et aussi une exemple de methode de travail pour les Etudiants.</h6>
                    <div className="d-flex align-items-center mb-2">
                        <div className="btn btn-dark mr-4">
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <p className="m-0">Lot IBI 22 Ampasamadinika - Antananarivo 101 Madagascar</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <div className="btn btn-dark mr-4">
                            <i className="fas fa-phone-square text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <p className="m-0">034 74 966 18 / 034 60 409 50</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="btn btn-dark mr-4">
                            <i className="fa fa-envelope text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <p className="m-0">isinfo@blueline.mg</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-5" style={{"minHeight": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/Image/Logo.jpg" style={{"objectFit": "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Apropos;