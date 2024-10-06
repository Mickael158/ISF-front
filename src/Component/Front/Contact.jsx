const Contact = () => {
    return (
        <>
            <div className="col-lg-6 py-5 d-flex alig-items-center justify-content-center" id="contact" style={{"marginTop":"5%"}}>
                <div className="p-5 my-5 ">
                    <h3 className="text-center mb-4">CONTACTEZ-NOUS</h3>
                    <h5 className="text-center mb-4 text-muted">Vous pouvez suivre ces liens afin de nous contacter</h5>
                    <div className="d-flex justify-content-center mt-5 gap-5">
                        <a className="text-muted mr-4 d-flex flex-column align-items-center gap-2 justify-content-center" href="https://www.facebook.com/Isinfo.Institut?locale=fr_FR" target="_blank"><i className="fab fa-2x fa-facebook-f"></i><small>facebook</small></a>
                        <a className="text-muted mr-4 d-flex flex-column align-items-center gap-2 justify-content-center" href="https://wa.me/261346040950" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-whatsapp"></i><small>+261 34 30 931 82</small></a>
                        <a className="text-muted mr-4 d-flex flex-column align-items-center gap-2 justify-content-center" href="https://mail.google.com/mail/u/0/#search/isinfo%40blueline.mg" target="_blank"><i className="fa fa-2x fa-envelope"></i><small>email</small></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 py-5">
                <a href="https://www.google.com/maps/place/IS-INFO+Ampasamadinika/@-18.90926,47.5199722,561m/data=!3m1!1e3!4m6!3m5!1s0x21f07e05a66533f1:0x45e71e01a7c8cc16!8m2!3d-18.9096266!4d47.5204471!16s%2Fg%2F1ptw3__nj?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" >
                    <img className="img-fluid" src="/Image/localisation.png" alt="Blueline" />
                </a>
            </div>
        </>
    ) 
}
export default Contact;