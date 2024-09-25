import { useState } from "react";
import InsertionPrixEcolage from "./INsertionPrixEcolage";

const PrixEcolage = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Ajouter</button>
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>cONSULTATION</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionPrixEcolage />}
                </div>
            </div>
        </>
    )
}
export default PrixEcolage;