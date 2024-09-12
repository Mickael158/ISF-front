
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import '../../../assets/admin/demo/demo.css';
import '../../../assets/admin/css/bootstrap.min.css';
import '../../../assets/admin/css/now-ui-dashboard.min.css';
import Statistic from "../Statistic/Statistic";
import Crud from "../CRUD/Crud";
import Etudiant from "../Etudiant/Etudiant.jsx";


const Dashbord = () => {
  const [page, setPage] = useState(0);
  // const User = localStorage.getItem('users');
  const navigate = useNavigate();
  const deconnexion = () => {
    localStorage.removeItem('token');
    navigate('/Login');
  }
  //  console.log(User);
  return (
    <>
      <div className="wrapper ">
      <div className="sidebar" data-color="blue">
      <div className="logo">
        <a href="#" className="simple-text">
          IS-INFO
        </a>
        <a href="#" className="simple-text logo-normal">
          {/* {User.username} */}
        </a>
      </div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <ul className="nav">
          <li className="active"
            onClick={() => {
                setPage(0);
              }}
              >
            <a href="#">
              <i className="now-ui-icons design_app"></i>
              <p>Tableau de bord</p>
            </a>
          </li>
          <li onClick={() => {
                setPage(2);
              }}>
            <a href="#">
              <i className="now-ui-icons education_atom"></i>
              <p>Etudiant</p>
            </a>
          </li>
          <li onClick={() => {
                setPage(3);
              }}>
            <a href="#">
              <i className="now-ui-icons education_atom"></i>
              <p>Ecolage</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>Examen</p>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => {
              setPage(1)
            }}>
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>CRUD</p>
            </a>
          </li>
          
          <li className="active-pro" onClick={deconnexion}>
            <a href="#">
              <i className="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>Deconnexion</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
      <div className="main-panel" id="main-panel">
        {page === 0 && <Statistic />}
        {page === 1 && <Crud />}
        {page === 2 && <Etudiant />}
      </div>
    </div>
    
      
    </>
  )
}

export default Dashbord
