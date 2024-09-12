import { useState } from "react";
import axios from "axios";

const InsertionEtudiant = () => {
    const [Nom,setNom] = useState('');
    const [Prenom,setPrenom] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Matricule,setMatricule] = useState('');
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post('http://localhost:8080/Etudiant/insertionEtudiant',
                { nom:Nom, prenom:Prenom, telephone:Telephone, matricule:Matricule, promotion_id:"1",genre_id:"1" },
                {
                    headers:
                    {
                        'content-type': 'application/json'
                    }
                },
            );
            console.log('Inserer',response.data);
            setNom('');
            setPrenom('');
            setTelephone('');
            setMatricule('');
        }catch(error)
        {
            console.error('Erreur d\'insertion' , error)
        }

    }
    return (
        <>
            <div className="w-100 mt-2 mb-2">
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Matricule} onChange={(e) => setMatricule(e.target.value)} placeholder="Matricule Etudiant" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone Etudiant" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}}>
                                        <option value="">Promotion</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}}>
                                        <option value="">Formation</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Adresse Etudiant" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}}>
                                        <option value="">Genre</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-success">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default InsertionEtudiant;