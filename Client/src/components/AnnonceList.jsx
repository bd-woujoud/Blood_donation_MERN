import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetallAnnonce,SearchAnnonce,selectAnnonces} from "../features/annonce/annonceSlice";

import AnnonceItem from "./AnnonceItem";

import "../assets/css/home.css"

function AnnonceList() {
  const dispatch = useDispatch();
  const annonces = useSelector(selectAnnonces);
   const [search, setsearch] = useState('')

  useEffect(() => {

    let dat = {
      keyword: search
    }

    dispatch(SearchAnnonce(dat));

  },[search]);


  return (

    <div>
       <section>
          <div className="banner-main">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row">
              <div className="col-xl-6 mt-5">
                <h1 className="mt-5">REJOIGNEZ-NOUS</h1>
                <h2> DEVENEZ DONNEUR !</h2>
              </div>
              <div class="input-group center">
                <div class="form-outline">
                  <div className="inbox-head  mt-5 mb-5">
                    {/*page acceuil list des annonces*/}
                    <form action="#" className="center  search_inbox">
                      <input
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                        type="text "
                        id="form1"
                        className="form-control"
                        placeholder="Search... "
                      />
                      <button className="btn sr-btn " type="button">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>


  
{/* 
      <div className="container-fluid pt-5" style={{ backgroundColor:'#efeae2'}}>
            <div className="inbox-head  mt-5 mb-5" >
        {/*page acceuil list des annonces*
       <form action="#" className="center  search_inbox">
          <div className="input-append">
            <input  value={search} onChange={(e) => setsearch(e.target.value)} type="text " className="sr-input" placeholder="Search... " />
            <button className="btn sr-btn " type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div> */}



      <div className="row column1 ">
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <div className=" full margin_bottom_30">
            <div className="row column1">
              <div className="col-md-12">
              
                  <div className="full graph_head">
                    <div className="heading1 margin_0">
                      <h1>
                        <b>Liste des annonces de don</b>
                      </h1>
                    </div>
                  </div>
                  {annonces.map((a, i) => {
                    return <AnnonceItem Annonce={a} key={a._id} />;
                  })}
                </div>
              </div>
            </div>
          </div>


            <div className="col-md-3">
    <div className="full margin_bottom_30" style={{backgroundColor:"#ED7368"}}>
      <div className="full graph_head">
        <div className="heading1 margin_0">
          <h2>Avis  bébnéficiaire</h2>
        </div>
      </div>
      <div className="full graph_revenue">
        <div className="row">
          <div className="col-md-12">
            <div className="content testimonial">
              <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                {/* Wrapper for carousel items */}
                <div className="carousel-inner">
                  <div className="item carousel-item active">
                    <div className="img-box"><img src="images/layout_img/user_img.jpg" alt /></div>
                    <p className="testimonial">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae..</p>
                    <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                  </div>
                  <div className="item carousel-item">
                    <div className="img-box"><img src="images/layout_img/user_img.jpg" alt /></div>
                    <p className="testimonial">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae..</p>
                    <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                  </div>
                  <div className="item carousel-item">
                    <div className="img-box"><img src="images/layout_img/user_img.jpg" alt /></div>
                    <p className="testimonial">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae..</p>
                    <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                  </div>
                </div>
                {/* Carousel controls */}
                <a className="carousel-control left carousel-control-prev" href="#testimonial_slider" data-slide="prev">
                  <i className="fa fa-angle-left" />
                </a>
                <a className="carousel-control right carousel-control-next" href="#testimonial_slider" data-slide="next">
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
 

</div>



            </div>
        </div>
      </div>
    

  
  );
}

export default AnnonceList;
