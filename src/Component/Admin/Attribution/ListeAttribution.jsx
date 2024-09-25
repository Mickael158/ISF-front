import axios from "axios";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const ListeAttribution = () => {
    const [Professeur,setProfesseur] = useState('');
    const Liste = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Professeur_matiere/SelectAll_ProfesseurMatiere');
            setProfesseur(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        Liste();
    },[])
    return(
        <>
            <div className="container">
                <h4 className="text-center mb-4">Liste des attributions pour les professeurs !</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th>Professeur</th>
                            <th>Matiere</th>
                            <th>Promotion</th>
                            <th>Niveaux</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(Professeur) ? (
                            Professeur.map( P => (
                                <tr key={P.id_professeur} className="text-center">
                                        <td>
                                            {P.professeur_id.id_personne.nom} {P.professeur_id.id_personne.prenom}
                                        </td>
                                        <td>
                                            {P.matiere_id.nom_matiere}
                                        </td>
                                        <td>
                                            {P.id_cours.promotion_id.codep}
                                        </td>
                                        <td>
                                            {P.id_cours.id_niveaux.nom}
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Null</td></tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ListeAttribution;