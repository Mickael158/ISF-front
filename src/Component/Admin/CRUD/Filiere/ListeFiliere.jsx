import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ListeFiliere = () => {
    const [Filiere,setFiliere] = useState('');
    const token = localStorage.getItem("token");
    const fetch = async () => {
        try{
         const response = await axios.get('http://localhost:8080/Filiere/SelectAll_Filiere',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
         });
         setFiliere(response.data.data);
        }catch(error){
            console.log(error);
            toast.error("Erreur de recuperation");
        }
    };
    const suppressionFiliere = async (event,id) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:8080/Filiere/Delete_Filiere',{id_filiere : id},
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
                                            <button className="btn btn-danger btn-block d-flex justify-content-center align-items-center" style={{'width': '50px'}} onClick={(e) => suppressionFiliere(e, F.id_filiere)}><i className="now-ui-icons shopping_basket"></i></button>
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