import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ListePromotion = () => {
    const [Promotion,setPromotion] = useState('');
    const token = localStorage.getItem("token");
    const fetch = async () => {
        try{
            const response = await axios.get('http://localhost:8080/Promotion/selectAll_Promotion',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setPromotion(response.data.data);
            toast.success("Recuperation des donnees reussis");
        }catch(error){
            toast.error("Erreur de recuperation des donnees");
            console.log("erreur : ",error);
        }
    };
    useEffect(() => {
        fetch();
        console.log(Promotion);
    });
    return (
        <>
            <ToastContainer />
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Promotion</th>
                        <th>Filiere</th>
                        <th>Formation</th>
                        <th>Rentree</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(Promotion) ? (
                            Promotion.map(P => (
                                <tr key={P.id_promotion} className="text-center">
                                        <td>
                                            {P.codep}
                                        </td>
                                        <td>
                                            {P.filiere_id.codef}
                                        </td>
                                        <td>
                                            {P.formation_id.nom_formation}
                                        </td>
                                        <td>
                                            {P.anne_promotion}
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Null</td></tr>) }
                </tbody>
            </table>
        </>
    )
}

export default ListePromotion;