import '../../assets/acceuil/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../assets/acceuil/css/style.css';
import '../../assets/acceuil/fontawesome/css/all.css';
import Navbar from '../Front/NavBar';
import Header from '../Front/Header';
import Apropos from '../Front/Apropos';
import Directeur from '../Front/Directeur';
import Filiere from '../Front/Filiere';
import Diplome from '../Front/Diplome';
import Formation from '../Front/Formation';
import Contact from '../Front/Contact';
import MotEtudiant from '../Front/MotEtudiant';
import Footer from '../Front/Footer';

const Acceuil = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Directeur />
        <Apropos />
        <Filiere />
        <div className="container-fluid">
            <Diplome />
            <Formation />
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <Contact />
                <MotEtudiant />
            </div>
        </div>
        <Footer />
        <a href="#" className="btn btn-sm btn-info rounded-0 btn-lg-square back-to-top text-align-center align-content-center"><i className="fa fa-angle-double-up fs-5"></i></a>
        </>
    )
} 
export default Acceuil;
