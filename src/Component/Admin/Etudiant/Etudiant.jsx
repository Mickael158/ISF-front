import { useState } from "react";
import InsertionEtudiant from "./InsertionEtudiant.jsx";

const Etudiant = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Nouveau</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionEtudiant />}
                </div>
            </div>
        </>
    )
}
export default Etudiant;