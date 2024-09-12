const Contact = () => {
    return (
        <>
            <div className="col-lg-6 py-5">
                <div className="bg-white p-5 my-5">
                    <h3 className="text-center mb-4">CONTACTEZ-NOUS</h3>
                    <form>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Votre Nom" style={{"padding": "30px 20px"}}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Votre Email" style={{"padding": "30px 20px"}}/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Sujet" style={{"padding": "30px 20px"}}/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <textarea name="" id="" placeholder="Votre Message" className="form-control bg-light border-0" style={{"padding": "20px 20px","height": "200px"}}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-12">
                                <button className="btn btn-info btn-block" type="submit" style={{"height": "60px"}}> <i className="fas fa-mail-bulk pr-2"></i>ENVOYER</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;