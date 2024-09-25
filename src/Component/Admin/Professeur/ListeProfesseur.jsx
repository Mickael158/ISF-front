import axios from "axios";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const ListeProfesseur = () => {
    const [Professeur,setProfesseur] = useState('');
    const Liste = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Professeur/SelectAll_Professeur');
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
                <h4 className="text-center mb-4">Liste de tous les professeurs !</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Adresse</th>
                            <th>Telephone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(Professeur) ? (
                            Professeur.map( P => (
                                <tr key={P.id_professeur} className="text-center">
                                        <td>
                                            {P.id_personne.nom}
                                        </td>
                                        <td>
                                            {P.id_personne.prenom}
                                        </td>
                                        <td>
                                            {P.id_personne.adresse}
                                        </td>
                                        <td>
                                            {P.id_personne.telephone}
                                        </td>
                                        <td>
                                            {P.id_personne.email}
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
export default ListeProfesseur;