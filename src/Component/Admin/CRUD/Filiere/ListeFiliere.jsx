import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ListeFiliere = () => {
    const [Filiere,setFiliere] = useState('');
    const fetch = async () => {
        try{
         const response = await axios.get('http://localhost:8080/Filiere/SelectAll_Filiere');
         setFiliere(response.data.data);
         toast.success("Recuperation des donnees reussis!");
        }catch(error){
            console.log(error);
            toast.error("Erreur de recuperation");
        }
    };
    useEffect(() => {
        fetch();
    },[]);
    return (
        <>
            <ToastContainer />
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Filiere</th>
                        <th>Code Filiere</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(Filiere) ? (
                            Filiere.map( F => (
                                <tr key={F.id_filiere} className="text-center">
                                        <td>
                                            {F.filiere}
                                        </td>
                                        <td>
                                            {F.codef}
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-danger btn-block d-flex justify-content-center align-items-center" style={{'width': '50px'}} onClick={(e) => SuppressionRole(e, rolees.id)}><i className="now-ui-icons shopping_basket"></i></button>
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Null</td></tr>) }
                </tbody>
            </table>
        </>
    )
}

export default ListeFiliere;