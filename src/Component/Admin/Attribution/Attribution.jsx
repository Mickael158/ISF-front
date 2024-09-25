import { useState } from "react";
import InsertionAttribution from "./InsertionAttribution.jsx";
import ListeAttribution from "./ListeAttribution.jsx";

const Attribution = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'100vh'}}>
                <div className="w-100 mb-2 container">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Nouveau</button>
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(1)}}>Liste d'attibution des profs</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionAttribution />}
                    {Page === 1 && <ListeAttribution />}
                </div>
            </div>
        </>
    )
}
export default Attribution;