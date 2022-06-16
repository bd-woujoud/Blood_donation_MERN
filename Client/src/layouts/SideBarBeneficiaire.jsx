import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SideBarBeneficiaire() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar_blog_1">
          <div className="sidebar_user_info">
            <div className="icon_setting" />
            <div className="user_profle_side">
              <div className="user_img">
                <img
                  style={{
                    height: "80px",
                    width: "180px",
                    marginLeft: "40px",
                  }}
                  className="img-responsive"
                  src={"http://localhost:4000/file/" + user.avatar}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to="/mesannonces">
                <i class="fa fa-table ml-3 mr-3 blue1_color"></i>

                <span>mes annonces</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to="/profil">
                <i class="fa fa-user ml-3 mr-3 yellow_color"></i>
                <span>Profil</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideBarBeneficiaire;
