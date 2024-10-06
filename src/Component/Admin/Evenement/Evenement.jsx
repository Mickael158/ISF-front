import axios from 'axios';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function Evenement() {
  const [formData, setFormData] = useState({
    date_evenement: '',
    lieu_evenement: '',
    decription: '',
    evenement: '',
  });
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // Ajoutez les données JSON en tant que chaîne
    data.append('credentials', JSON.stringify({
      date_evenement: formData.date_evenement,
      lieu_evenement: formData.lieu_evenement,
      decription: formData.decription,
      evenement: formData.evenement,
    }));

    // Ajoutez les fichiers image
    images.forEach((image) => {
      data.append('image', image);
    });

    try {
      const response = await axios.post(
        'http://localhost:8080/Evenement/insertionEvenement',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Cela peut être omis, axios le gère automatiquement
          },
        }
      );
      console.log('Réponse du serveur :', response.data);
      toast.success("Evenement assurer");
    } catch (error) {
      console.error('Erreur lors de l\'insertion de l\'événement :', error);
    }
  };
  const SupprimerEvenement = async (e , id) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:8080/Evenement/Delete_Evenemet/' + id,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Cela peut être omis, axios le gère automatiquement
          },
        }
      );
      selectEvenement();
      toast.success("Evenement assurer");
    } catch (error) {
      toast.success("Evenement assurer" , error);
    }
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };
  const [Evenement, setEvenement] = useState([]);

    const selectEvenement = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Evenement/select_evenemet_proch');
            setEvenement(response.data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des événements : ", error);
        }
    };

    useEffect(() => {
        selectEvenement();
    }, []);

  return (
    <>
        <ToastContainer />
    <h3 className='text-center mt-3 mb-3'>Ajouter les prochains a organiser</h3>
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-6'>
                <input
                    type="date"
                    placeholder="Date de l'événement"
                    value={formData.date_evenement}
                    className='form-control mt-3'
                    onChange={(e) => setFormData({ ...formData, date_evenement: e.target.value })}
                    style={{"height":"50px"}}
                />
            </div>
            <div className='col-6'>
                <input
                    type="text"
                    placeholder="Lieu de l'événement"
                    value={formData.lieu_evenement}
                    className='form-control mt-3'
                    onChange={(e) => setFormData({ ...formData, lieu_evenement: e.target.value })}
                    style={{"height":"50px"}}
                />
            </div>
            <div className='col-6'>
            <input
        type="text"
        placeholder="Description"
        className='form-control mt-3'
        value={formData.decription}
        onChange={(e) => setFormData({ ...formData, decription: e.target.value })}
        style={{"height":"50px"}}
      />
            </div>
            <div className='col-6'>
            <input
        type="text"
        placeholder="Événement"
        className='form-control mt-3'
        value={formData.evenement}
        onChange={(e) => setFormData({ ...formData, evenement: e.target.value })}
        style={{"height":"50px"}}
      />
            </div>
            <div className='col-6'>
            <input type="file" multiple onChange={handleFileChange} className='form-control d-flex align-items-center justify-content-center mt-3' style={{"height":"50px"}}/>
            </div>
            <div className='col-6 d-flex align-items-center mt-3'><button type="submit" className='btn btn-success'>Valider</button></div>
        </div>
      
    </form>
    <div className="card">
              <div className="card-header">
                <h4 className="card-title">Les evenement Afficher</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-dark text-center">
                      <th>
                        Nom
                      </th>
                      <th>
                        Date de l'evenemet
                      </th>
                      <th>
                        Lieu
                      </th>
                      <th>
                        action
                      </th>
                    </thead>
                    <tbody>
                    {Array.isArray(Evenement) ? (
                            Evenement.map(event => (
                                <tr key={event.id} className="text-center">
                                        <td>
                                            {event.evenement}
                                        </td>
                                        <td>
                                            {event.date_evenement}
                                        </td>
                                        <td>
                                            {event.lieu_evenement}
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-danger btn-block" style={{'width': '50%'}} onClick={(e) => SupprimerEvenement(e, event.id_evenement)} ><i className="now-ui-icons shopping_basket"></i></button>
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Null</td></tr>) }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    </>
    
  );
}

export default Evenement;
