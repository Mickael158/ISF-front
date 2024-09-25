import { useState } from "react";
import InsertionExamen from "./InsertionExamen.jsx";

const Examen = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'100vh'}}>
                <div className="w-100 mb-2 container">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Nouveau</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionExamen />}
                </div>
            </div>
        </>
    )
}
export default Examen;