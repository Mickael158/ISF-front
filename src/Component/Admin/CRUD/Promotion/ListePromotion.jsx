import { useEffect, useState } from "react";

const ListePromotion = () => {
    // const [Formation,setFormation] = useState('');
    // const fetch = () => {
    //     axios.get('https://localhost:8080/api/Formation').then(response => {
    //         setFormation(response.data);
    //     });
    // };
    // useEffect(() => {
    //     fetch();
    // },[]);
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Formation</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                {/* {Array.isArray(fetch) ? (
                            fetch.map(Formation => (
                                <tr key={Formation.id}>
                                        <td>
                                            {Formation.nomFormation}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-block" style={{'width': '50%'}} onClick={(e) => SuppressionRole(e, rolees.id)}>Supprimer</button>
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Null</td></tr>) } */}
                </tbody>
            </table>
        </>
    )
}

export default ListePromotion;