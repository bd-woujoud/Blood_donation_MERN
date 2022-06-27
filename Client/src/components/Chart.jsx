
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetallAnnonce, selectAnnonces } from '../features/annonce/annonceSlice';
import { GetUser, selectusers } from '../features/user/userSlice';
import SideBarPrincipal from '../layouts/SiderBarPrincipal';
import { Chartperso } from './ChartPerso';


function Chart() {

   const annonce = useSelector(selectAnnonces)
   const users = useSelector(selectusers)
 
   const dispatch = useDispatch()

   useEffect(() => {

      dispatch(GetUser())
        console.log(users,'oppaaa');
      dispatch(GetallAnnonce())
   }, [])

   const Aplus = annonce.filter(u => u.groupe_sanguin === "A+")
   const Amoins = annonce.filter(u => u.groupe_sanguin === "A-")
   const Bplus = annonce.filter(u => u.groupe_sanguin === "B+")
   const Bmoins = annonce.filter(u => u.groupe_sanguin === "B-")
   const Oplus = annonce.filter(u => u.groupe_sanguin === "O+")
   const Omoins = annonce.filter(u => u.groupe_sanguin === "O-")
   const ABplus = annonce.filter(u => u.groupe_sanguin === "AB+")
   const ABmoins = annonce.filter(u => u.groupe_sanguin === "AB-")
   const don = annonce.filter(u => u.categorie === "don")
   const demande = annonce.filter(u => u.categorie === "demande")


   return (

      <div>

         <SideBarPrincipal />
         <div id="content">
            <div className="midde_cont">
               <div className="container-fluid" >

                  <div className="row column1">
                  

                     <div class="col-md-3 col-lg-3 mt-5">
                        <div class="full counter_section margin_bottom_30">
                           <div class="couter_icon">
                              <div>
                                 <i class="fa fa-user green_color"></i>
                              </div>
                           </div>
                           <div class="counter_no">
                              <div>
                                 <p class="total_no"> {don.length}</p>
                                 <p class="head_couter">Annonce de Don</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3 col-lg-3 mt-5">
                        <div class="full counter_section margin_bottom_30">
                           <div class="couter_icon">
                              <div>
                                 <i class="fa fa-user green_color"></i>
                              </div>
                           </div>
                           <div class="counter_no">
                              <div>
                                 <p class="total_no"> {demande.length}</p>
                                 <p class="head_couter"> Demande</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
             


               <div className="row column1">

                  <div class="col-md-3 col-lg-3">
                     <div class="full socile_icons linked margin_bottom_30">
                        <div class="social_icon">
                           <i class="fa">A</i>
                        </div>
                        <div class = "social_cont">
                           <ul>
                              <li>
                                 <span><strong> A+</strong></span>
                                 <span>{Aplus.length}</span>
                              </li>
                              <li>
                                 <span><strong>A-</strong></span>
                                 <span>{Amoins.length}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-3 col-lg-3">
                     <div class="full socile_icons linked margin_bottom_30">
                        <div class="social_icon">
                           <i class="fa ">B</i>
                        </div>
                        <div class="social_cont">
                           <ul>
                              <li>
                                 <span><strong>B+</strong></span>
                                 <span>{Bplus.length}</span>
                              </li>
                              <li>
                                 <span><strong>B-</strong></span>
                                 <span>{Bmoins.length}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-3 col-lg-3">
                     <div class="full socile_icons linked margin_bottom_30">
                        <div class="social_icon">
                           <i class="fa ">O</i>
                        </div>
                        <div class="social_cont">
                           <ul>
                              <li>
                                 <span><strong>O+</strong></span>
                                 <span>{Oplus.length}</span>
                              </li>
                              <li>
                                 <span><strong>O-</strong></span>
                                 <span>{Omoins.length}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>


                  <div class="col-md-3 col-lg-3">
                     <div class="full socile_icons linked margin_bottom_30">
                        <div class="social_icon">
                           <i class="fa">AB</i>
                        </div>
                        <div class="social_cont">
                           <ul>
                              <li>
                                 <span><strong>AB+</strong></span>
                                 <span>{ABplus.length}</span>
                              </li>
                              <li>
                                 <span><strong>AB-</strong></span>
                                 <span>{ABmoins.length}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

               </div>





               <div className="row column1">
                  <div className="col-lg-10">
                     <div className="white_shd full margin_bottom_30" style={{ marginTop: '40px' }}>
                        <div className="full graph_head">
                           <div className="heading1 margin_0">
                              <h2>Line Chart donation Sahloul</h2>
                           </div>
                        </div>
                        <div className="map_section padding_infor_info">

                           <Chartperso style={{ height: "100px" }} />


                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>

      </div >

   )
}

export default Chart

