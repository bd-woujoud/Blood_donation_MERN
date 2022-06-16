import React from "react";

import { NavLink } from "react-router-dom";

function SidebarAdmin() {

  return (
    <div>


<nav id="sidebar">
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            <div className="logo_section">
              <a href="index.html"><img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" /></a>
            </div>
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting" />
            <div className="user_profle_side">
              <div className="user_img"><img className="img-responsive" src="images/layout_img/user_img.png"  style={{ height: "80px",width:"180px"}}   alt="#" /></div>

            </div>
          </div>
        </div>

        <div className="sidebar_blog_2 mt-5">
          <ul className="list-unstyled components">
            <li className="active">
             <NavLink to='dashboard'><i class="fa fa-file ml-3 mr-3 blue1_color"></i> <span>Mes annonces</span></NavLink>
            </li>
          </ul>
        </div>
    

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
            <NavLink to='allannonces'><i class="fa fa-table ml-3 mr-3 yellow_color"></i> <span>liste des annonces </span></NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
            <NavLink to='users'> <i class="fa fa-user ml-3 mr-3 red_color"></i> <span>users</span></NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
            <NavLink to='/chart'> <i class="fa fa-bar-chart ml-3 mr-3 green_color"></i> <span>Statistiques</span></NavLink>
            </li>
          </ul>
        </div>
       
      </nav>


    </div>
  )
}

export default SidebarAdmin