import { useState } from "react";
import axios from "axios";

const InsertionFormation = () => {
    const [NomFormation,setNomFormation] = useState('');
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post('http://localhost:8080/Formation/insertionFormation',
                { nom_formation:NomFormation },
                {
                    headers:
                    {
                        'content-type': 'application/json'
                    }
                },
            );
            console.log('Inserer',response.data);
            setNomFormation('');
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
                        <div className="d-flex">
                        <div className="col-md-6">
                            <input type="text" className="form-control" value={NomFormation} onChange={(e) => setNomFormation(e.target.value)} placeholder="Nom de la Formation" style={{'height':'50px'}}/>
                        </div>
                        {/* <div className="col-md-6">
                            <input type="text" className="form-control" value={NomFormation} onChange={(e) => setNomFormation(e.target.value)} placeholder="Code Filiere" style={{'height':'50px'}}/>
                        </div> */}
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
export default InsertionFormation;