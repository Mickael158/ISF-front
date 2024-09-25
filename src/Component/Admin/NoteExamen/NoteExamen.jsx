import { useState } from "react";
import InsertionNoteExamen from "./InsertionNoteExamen.jsx";
import ListeNoteExamen from "./ListeNoteExamen.jsx";

const NoteExamen = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'100vh'}}>
                <div className="w-100 mb-2 container">
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(0)}}>Nouveau</button>
                    <button className="btn btn-success btn-sm" onClick={() => {setPage(1)}}>Suivie</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionNoteExamen />}
                    {Page === 1 && <ListeNoteExamen />}
                </div>
            </div>
        </>
    )
}
export default NoteExamen;