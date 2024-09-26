import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ListeMatiere = () => {
    const [Matiere,setMatiere] = useState('');
    const token = localStorage.getItem("token");
    const fetch = async () => {
        try{
            const response = await axios.get('http://localhost:8080/Matiere/SelectAll_Matiere',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setMatiere(response.data.data);
        }catch(error){
            toast.error("Recuperation des donnee echouer!");
            console.log("Erreur de recuperation",error);
        }
    };
    const suppressionMatiere = async (event,id) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:8080/Matiere/Delete_Matiere',{id_matiere : id},
                {
                    headers:
                        {
                            'content-type': 'application/json',
                            'Authorization':`Bearer ${token}`
                        }
                },
            );
            fetch();
            toast.success("Filiere Supprimer!");
        }catch(error){
            toast.error("Erreur de suppresion de la formation!");
            console.log(error);
        }
    };
    useEffect(() => {
        fetch();
    });
    return (
        <>
            <ToastContainer />
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Matiere</th>
                        <th>Coefficient</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                   {Array.isArray(Matiere) ? (
                       Matiere.map( M => (
                           <tr key={M.id_matiere} className="text-center">
                               <td>
                                   {M.nom_matiere}
                               </td>
                               <td>
                                   {M.coeff}
                               </td>
                               <td className="d-flex justify-content-center align-items-center">
                                   <button className="btn btn-danger btn-block d-flex align-items-center justify-content-center" style={{'width': '50px'}} onClick={(e) => suppressionMatiere(e, M.id_matiere)} ><i className="now-ui-icons shopping_basket"></i></button>
                               </td>
                           </tr>
                       ) )
                   ) : ( <tr><td>Null</td></tr>) }
                </tbody>
            </table>
        </>
    )
}

export default ListeMatiere;