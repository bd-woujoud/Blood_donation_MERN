import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthService from "../services/AuthService";
import '../assets/css/topbar.css'
function TopBarHome() {
  const { isAuth } = useContext(AuthContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const { user } = useContext(AuthContext);
  const { setUser, setIsAuth } = useContext(AuthContext);
  const history = useHistory();
  function handleLogout() {
    console.log("..logout");

    AuthService.logout().then((jsonData) => {
      if (jsonData.success) {
        setUser(jsonData.user);
        setIsAuth(false);
        localStorage.clear("userdetails");
      }
    });
  }



  return (
    <div>
      <nav className="navigation">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="icon_info">
            <ul className="user_profile_dd ">
              <li class="nav-item">
                <a class="nav-link active" href="/home">
                  Accueil
                </a>
              </li>

              <li class="nav-item">
                <NavLink to="/annonces">

                  Annonces

                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>


              {
                (user.role === "admin" || user.role === "beneficiaire") &&
                <li class="nav-item">
                  <NavLink to="/dashboard">

                    Mon Espace

                  </NavLink>
                </li>

              }

              {isAuth ? (
                <li>
                  <button
                    class="btn btn-prim"
                    style={{ marginRight: "10px" }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li class="nav-item">
                  <button
                    class="btn btn-prim "
                    style={{ marginRight: "10px" }}
                    onClick={() => history.push("/login")}
                  >
                    Connexion
                  </button>
                  <button
                    class="btn btn-prim"
                    onClick={() => history.push("/register")}
                  >
                    Inscription
                  </button>
                </li>
              )}
            </ul>
          </div>
          </div>

      </nav>


    </div>
  )}
;

export default TopBarHome;
