const Directeur = () => {
    return (
        <div className="container-fluid py-5" id="acceuil">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{"minHeight": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/Image/Mot-du-directeur.jpg" style={{"objectFit": "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title position-relative mb-4">
                        <h3 className="display-6">Mot du Directeur</h3>
                    </div>
                    <p>

L’IS-INFO ou Institut Supérieur d’Informatique est l’une des universités privées qui se focalise principalement dans le la formation en informatique. Ce choix constitue notre principale force puisque le fait de ne choisir qu’un seul domaine, cela nous permet de maitriser de plus en plus ce que l’on fait et surtout de proposer une formation qui se trouve dans notre domaine d’excellence. Nous affirmons sans prétention que les formations disposées au sein de l’Institut sont parmi les meilleures à Madagascar. Notre slogan n’est autre que : « IS-INFO, l’institut de référence en informatique ». 

L’existence de l’IS-INFO se base sur une seule idéologie, donner une formation de qualité à un prix abordable. Cela veut dire que notre but est donner l’opportunité aux étudiants issus de la classe moyenne, d’avoir un avenir meilleur. La réussite d’une personne ne dépend pas de sons statut social. Ce n’est pas uniquement les enfants des familles aisées qui peuvent devenir des dirigeants en entreprise. Avec une connaissance approfondie et une formation adéquate à la demande du marché du travail, tout le monde a sa chance de réussir dans sa vie.

Actuellement, nous entamons notre vingtième année d’existence et nous sommes dans notre phase de maturité. L’établissement ne cesse de faire une amélioration contenue de sa formation que ce soit en termes de contenu qu’en termes d’infrastructure et de matériel. Par conséquent, l’IS-INFO est l’une des universités le plus prisées des étudiants dans notre pays et ses sortants se trouvent dans les plus grandes entreprises malgaches que ce soit dans le domaine privé ou public.  

En tant que directeur fondateur de l’IS-INFO, mon souhait le plus fort c’est que dans les vingt prochaines années, l’Institut continuera encore à former des jeunes et que ces derniers puissent tout d’abord réussir leur vie et aussi de proposer leur savoir afin de développer notre pays bien aimé « MADAGASCAR ». 
</p>
<h5 className="text-info">
Le Directeur de l’Institut
</h5>
<p style={{"fontWeight":"bold"}}>RAKOTOARIVAO Manohisoa Tsiory</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Directeur;