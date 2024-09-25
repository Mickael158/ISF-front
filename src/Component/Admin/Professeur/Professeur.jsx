import { useState } from "react";
import InsertionProfesseur from "./InsertionProfesseur.jsx";
import ListeProfesseur from "./ListeProfesseur.jsx";

const Professeur = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div style={{'height':'100vh'}}>
                <div className="w-100 mb-2 container">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Nouveau</button>
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(1)}}>Liste</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionProfesseur />}
                    {Page === 1 && <ListeProfesseur />}
                </div>
            </div>
        </>
    )
}
export default Professeur;