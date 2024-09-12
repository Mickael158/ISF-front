import {useEffect, useState} from "react";
import axios from "axios";

const InsertionPromotion = () => {
    const [CodePromotion,setCodePromotion] = useState('');
    const [AnnePromotion,setAnnePromotion] = useState('');
    const [Filiere,setFiliere] = useState('');
    const [Formation,setFormation] = useState('');
    const [IdFormation,setIdFormation] = useState('');
    const [IdFiliere,setIdFiliere] = useState('');
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post('http://localhost:8080/Promotion/insertionPromotion',
                { codep:CodePromotion, anne_promotion:AnnePromotion, filiere_id:IdFiliere, formation_id:IdFormation },
                {
                    headers:
                    {
                        'content-type': 'application/json'
                    }
                },
            );
            console.log('Inserer',response.data);
            setCodePromotion('');
            setAnnePromotion('');
        }catch(error)
        {
            console.error('Erreur d\'insertion' , error)
        }

    }
    const ListeFiliere = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Filiere/SelectAll_Filiere');
            setFiliere(response.data.data);
        }catch (error){
            console.log('ERREUR DE RECUPERATION',error)
        }
    };
    const ListeFormation = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Formation/selectAll_Formation');
            setFormation(response.data.data);
        }catch (error){
            console.log('ERREUR DE RECUPERATION',error)
        }
    };
    useEffect(() => {
        ListeFiliere();
        ListeFormation();
    },[]);
    return (
        <>
            <div className="w-100 mt-2 mb-2">
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="d-flex">
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={CodePromotion} onChange={(e) => setCodePromotion(e.target.value)} placeholder="Nom de la Promotion" style={{'height':'50px'}}/>
                            </div>
                            <div className="col-md-6">
                                <input type="month" className="form-control" value={AnnePromotion} onChange={(e) => setAnnePromotion(e.target.value)} placeholder="Anne Promotion" style={{'height':'50px'}}/>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="col-md-6">
                                <select name="" id="" className="form-control" value={IdFiliere} onChange={(e)=> setIdFiliere(e.target.value)}>
                                    {Array.isArray(Filiere) ? (
                                        Filiere.map((f) => (
                                            <option className="form-control" key={f.id_filiere} value={f.id_filiere}>
                                                {f.codef}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select name="" id="" className="form-control" value={IdFormation} onChange={(e)=> setIdFormation(e.target.value)}>
                                    {Array.isArray(Formation) ? (
                                        Formation.map((f) => (
                                            <option className="form-control" key={f.id_formation} value={f.id_formation}>
                                                {f.nom_formation}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                </select>
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
export default InsertionPromotion;