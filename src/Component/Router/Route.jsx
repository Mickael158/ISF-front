import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../Login/Login';
import Acceuil from '../Acceuil/Acceuil';
import Dashboard from '../Admin/Dashboard/dashbord';

const Root = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/" element={<Acceuil />} />
                    <Route path="/Admin" element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    );
}

export default Root;
