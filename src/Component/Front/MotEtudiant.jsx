const MotEtudiant = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="section-title position-relative mb-4">
                            <h3>Quelques Mot de nos Etudiants</h3>
                        </div>
                        <p className="m-0">Mot des anciens Etudiants sortant de notre etablissement</p>
                    </div>
                    <div className="col-lg-7">
                        <div className="owl-carousel testimonial-carousel">
                            <div className="bg-white p-5">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <p>Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit est est ipsum eos clita est ipsum. Est nonumy tempor at kasd. Sed at dolor duo ut dolor, et justo erat dolor magna sed stet amet elitr duo lorem</p>
                                <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                    <img className="img-fluid mr-4" src="public/acceuil/img/testimonial-2.jpg" alt=""/>
                                    <div>
                                        <h5>RAHERIMANANA Toky</h5>
                                        <span>Developpeur Back-End</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-5">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <p>Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit est est ipsum eos clita est ipsum. Est nonumy tempor at kasd. Sed at dolor duo ut dolor, et justo erat dolor magna sed stet amet elitr duo lorem</p>
                                <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                    <img className="img-fluid mr-4" src="public/acceuil/img/testimonial-1.jpg" alt=""/>
                                    <div>
                                        <h5>RABEARIVELO Johann</h5>
                                        <span>Developpeur Front-End</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MotEtudiant;