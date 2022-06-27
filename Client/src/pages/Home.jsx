import React from 'react'
import '../assets/css/home.css'
import ab from '../assets/image/groupes.png'
import cd from '../assets/image/compatible.jpeg'
import tunis from '../assets/image/centre.png'

function Home() {

  return (

    <div>

      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row">
              <div className="col-xl-6">
                <h1>REJOIGNEZ-NOUS</h1>
                <h1> DEVENEZ DONNEUR !</h1>
              
              </div>
            </div>
          </div>
        </section>{/* End Hero */}


        <main id="main">
          <section id="services" className="services section-bg ">
            <div className="container" data-aos="fade-up">
              
                <div className="row">
                  <div className="col-md-6">
                    <img src={tunis} alt className="img-fluid" /></div>
                  <div className="col-md-6">
                    <div className="section-title">
                      <h2>OÙ ALLER POUR DONNER ?</h2></div>
                    <p>
                      Vous pouvez sauver des vies, tout près de chez vous partout en tunisie.
                    </p>
                    <p>Votre don est un acte citoyen, solidaire et libre qui permet de répondre à des besoins quotidiens de manière bénévole.
                      Plus vous serez nombreux et réguliers à donner,
                      plus nous pourrons aider ensemble chaque jour les patients qui en ont besoin.</p>
                  </div>
                </div>

             
            </div>{/* End .content*/}


          </section>{/* End About Section */}

          {/* ======= Tabs Section ======= */}
          <section id="tabs" className="tabs">
            <div className="container" data-aos="fade-up">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                      <div className="section-title">
                        <h3>Répartition des groupes sanguins</h3></div>
                      <p className="fst-italic">
                        Répartition des groupes sanguins
                        Il existe plusieurs systèmes antigéniques qui permettent d’identifier les cellules sanguines. Les plus connus sont les systèmes ABO et Rh qui définissent la compatibilité et l'incompatibilité sanguine entre le donneur et le receveur.

                        Le système ABO permet d’attribuer à chaque individu une lettre qui caractérise son groupe sanguin : A, B, AB ou O. Le système Rh détermine si vous êtes Rh positif ou négatif.

                        Dans la population caucasienne (individus présentant des traits physiques européens et une peau claire), la répartition des différents types de sang est la suivante :
                      </p>

                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                      <img src={ab} alt className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="tabs" className="tabs">
            <div className="container" data-aos="fade-up">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                      <img src={cd} alt className="img-fluid" />
                    </div>


                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                      <div className="section-title">
                        <h3>Compatibilité des groupes sanguins</h3></div>
                      <p className="fst-italic">
                        Les personnes du groupe O, également appelées « donneurs universels », peuvent donner leurs globules rouges  à n’importe quel receveur. Le groupe O- est surtout utilisé dans les situations d'urgence.

                        A l’inverse, les personnes du groupe AB+ sont les « receveurs universels », ils peuvent recevoir du sang, des globules rouges, de tous les groupes sanguins.

                        Toutefois, dans la majorité des cas, les receveurs sont transfusés avec le sang d'un donneur de leur propre groupe sanguin.
                      </p>
                      <p></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Tabs Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg ">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>POURQUOI DONNER ?</h2>

              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <i className="bi bi-briefcase" />

                    <p>Parce qu’à l’heure actuelle, aucun médicament ne peut se substituer au sang humain ou à ses composants. </p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bi bi-card-checklist" />

                    <p>Le sang humain est donc toujours un produit irremplaçable.</p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bi bi-bar-chart" />

                    <p> chaque jour, des centaines de malades ou accidentés ont besoin d’une transfusion pour survivre et guérir. </p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bi bi-binoculars" />

                    <p>Chaque jour, nous avons besoin de sang pour accompagner une personne accidentée, un malade atteint de cancer.. Les situations sont aussi variées que régulières.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </section>{/* End Services Section */}

          {/* ======= Pricing Section ======= */}
          <section id="pricing" className="pricing section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Comment se passe le don de sang ?</h2>

              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 ">
                  <div className="box" data-aos="fade-up" data-aos-delay={100}>

                    <h4><sup>DURÉE DU DON</sup></h4>
                    <ul>
                      Le don de sang dure en moyenne 10 minutes. À cela, il faut ajouter le temps pour
                      l’entretien médical pré-don, ainsi que pour la collation et le temps de repos qui suit le prélèvement.
                      Au total, le don de sang dure approximativement 45 minutes.
                    </ul>

                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="box featured" data-aos="fade-up" data-aos-delay={200}>

                    <h4><sup>FRÉQUENCE</sup></h4>
                    <ul>
                      Vous pouvez donner maximum 4 dons de sang par an (365 jours) avec un délai de minimum 2 mois entre 2 dons.
                    </ul>

                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="box" data-aos="fade-up" data-aos-delay={300}>

                    <h4><sup>AVEC ET SANS RENDEZ-VOUS</sup></h4>
                    <ul>
                      Il n’est pas nécessaire de prendre rendez-vous pour aller donner votre sang dans
                      une collecte mobile .
                      Nous vous y accueillons durant les heures d’ouverture.
                      Il est par contre nécessaire de fixer un rendez-vous en ligne pour donner du sang dans un de nos 16 centres de prélèvement fixes.
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Pricing Section */}




          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">

                <h2>Contact</h2>

              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>


                <div className="col-md-4">
                  <div className="info-box">
                    <i className="bx bx-map" />
                    <h3>Our Address</h3>
                    <p>Rue yasser arafet</p>
                    <p>sahloul Sousse</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box ">
                    <i className="bx bx-envelope" />
                    <h3>Email Us</h3>
                    <p>info@example.com<br />contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box">
                    <i className="bx bx-phone-call" />
                    <h3>Call Us</h3>
                    <p>+216 558 955<br />+216 558 955</p>
                  </div>
                </div>

              </div>

            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top mt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Blood donation<span>.</span></h3>
                  <p>
                    Sahloul <br />

                    sousse<br /><br />
                    <strong>Phone:</strong> +216 558 955<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>


  )
}

export default Home 