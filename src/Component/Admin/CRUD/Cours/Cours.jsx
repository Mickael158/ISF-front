import { useState } from "react";
import InsertionCours from "./InsertionCours.jsx";

const Cours = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Ajouter</button>
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(1)}}>Suivie Cours</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionCours />}
                </div>
            </div>
        </>
    )
}
export default Cours;