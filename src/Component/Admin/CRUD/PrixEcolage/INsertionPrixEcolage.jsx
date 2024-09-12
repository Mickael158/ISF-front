import { useState } from "react";
import axios from "axios";

const InsertionPrixEcolage = () => {
    const [Valeur,setValeur] = useState('');
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post('http://localhost:8080/Cours/insertionPrixEcolage',
                { valeur:Valeur, id_niveau:"5" },
                {
                    headers:
                    {
                        'content-type': 'application/json'
                    }
                },
            );
            console.log('Inserer',response.data);
            setValeur('');
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
                            <input type="text" className="form-control" value={Valeur} onChange={(e) => setValeur(e.target.value)} placeholder="Valeur en Ariary" style={{'height':'50px'}}/>
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
export default InsertionPrixEcolage;