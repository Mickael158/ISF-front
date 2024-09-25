const Filiere = () => {
    return (
        <>
        <div className="container-fluid" id="filiere">
        <div className="row mx-0 justify-content-center pb-4    ">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h1 className="display-5 mb-1">FILIERE PROPOSER</h1>
                    <h4>Voici les Filiere proposer par notre etablissement</h4>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-white text-white licence" style={{"width": "90%","height": "170px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-muted">Vous aurez deux filieres aux choix pour l obtention du diplome de Licence</h6>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 d-flex flex-column" style={{"rowGap": "20px"}}>
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-info text-white licence" style={{"width": "90%","height": "170px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 font-weight-bold text-white">INFORMATIQUE DE GESTION (IG)</h5>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-white">Qui est plus orienter vers la programmation , develepomment</h6>
                      </div>
                    </div>
                </div>
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-info text-white licence" style={{"width": "90%","height": "170px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 font-weight-bold text-white">MAINTENANCE ET RESEAU (MR)</h5>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-white">Qui concerne tous ce qui est Reseau et Maintenance</h6>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 d-flex flex-column" style={{"rowGap": "20px"}}>
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-outline-primary text-white licence" style={{"width": "90%","height": "170px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center bg-info" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 font-weight-bold text-white">GENIE LOGICIEL (GL)</h5>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-white">Qui est une suite successive de la formation IG, ce qui veut dire une approfondissement de ce domaine</h6>
                      </div>
                    </div>
                </div>
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-outline-primary text-white licence" style={{"width": "90%","height": "170px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center bg-info" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 font-weight-bold text-white">ADMINISTRATEUR SYSTEM ET RESEAU (ASR)</h5>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-white">Qui est une suite successive de la formation MR, ce qui veut dire une approfondissement de ce domaine</h6>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-white text-white licence" style={{"width": "90%","height": "170px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-muted">Vous aurez deux filieres aux choix pour l obtention du diplome de Master</h6>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>

    )
}
export default Filiere;
