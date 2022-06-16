
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser, selectusers } from '../features/user/userSlice';
import SideBarPrincipal from '../layouts/SiderBarPrincipal';
import { Chartperso } from './ChartPerso';


function Chart() {

   
   const user = useSelector(selectusers)
  const dispatch = useDispatch()
   useEffect(() => {

      dispatch(GetUser())

    }, [])

   return (
      <div>     
         <SideBarPrincipal />
    {user &&
         <div id="content">
            <div className="midde_cont">
               <div className="container-fluid" >
           
                  <div className="row column1">
                  <div class="col-md-6 col-lg-3">
                           <div class="full counter_section margin_bottom_30">
                              <div class="couter_icon">
                                 <div> 
                                    <i class="fa fa-user yellow_color"></i>
                                 </div>
                              </div>
                              <div class="counter_no">
                                 <div>
                                    <p class="total_no"> {user.length}</p>
                                    <p class="head_couter">Welcome</p>
                                 </div>
                              </div>
                           </div>
                        </div></div>
                  <div className="row column1">
                     <div className="col-lg-10">
                        <div className="white_shd full margin_bottom_30"style={{marginTop:'40px'}}>
                           <div className="full graph_head">
                              <div className="heading1 margin_0">
                                 <h2>Line Chart donation Sahloul</h2>
                              </div>
                           </div>
                           <div className="map_section padding_infor_info">

                              <Chartperso style={{height:"100px"}}/>


                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
}
      </div>

   )
}

export default Chart

