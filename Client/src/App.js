import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AnnonceList from "./components/AnnonceList";
import ContentBenificiaire from "./components/ContentBenificiaire";
import GetallAnnonces from "./components/GetAllAnnonces";
import GetUsers from "./components/GetUsers";
import Profil from "./components/Profil";
import { selectAddAnnonces } from "./features/annonce/annonceSlice";



import PrivateRoute from "./HigherOrderComponents/PrivateRoute";
import PublicRoute from "./HigherOrderComponents/PublicRoute";
// import TopBar from "./layouts/TopBar";
import DashAdmin from "./pages/DashAdmin";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
import Chart from "./components/Chart";
import { AuthContext } from "./context/AuthContext";
import TopBarHome from "./layouts/TopBarHome";
function App() {
  const add=useSelector(selectAddAnnonces)
  const [titre, settitre] = useState("");
  const [description, setDescription] = useState("");
  const [emplacement, setEmplacement] = useState("");
  const [groupe_sanguin, setGroupe] = useState("O+");
  const [categorie, setCategorie] = useState("don");
  useEffect(()=>{

    if(add ==="success"){
      settitre('')
      setDescription('')
      setEmplacement('')
      setCategorie('')
      setTimeout(() => {
      }, 3000);
    
      Swal.fire({
        icon: 'success',
        title: 'votre annonce à été créer avec succés!',
    })

    }
    
      },[add]) 

      const {isAuth}=useContext(AuthContext)
  return (
    <Router>
     
     <TopBarHome />

      <Switch>
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute role={["admin"]} path="/chart" component={Chart} />

    
        <PrivateRoute
          role={["admin", "beneficiaire"]}
          path="/dashboard"
          component={DashAdmin}
        />
        <PrivateRoute
          role={["admin", "beneficiaire"]}
          path="/annonces"
          component={AnnonceList}
        />
        <PrivateRoute
          role={["admin", "beneficiaire"]}
          path="/details"
          component={Details}
        />

        <PrivateRoute
          role={["admin", "beneficiaire"]}
          path="/profil"
          component={Profil}
        />

        <PrivateRoute
          role={["admin"]}
          path="/allannonces"
          component={GetallAnnonces}
        />
        
        <PrivateRoute
          role={["admin"]}
          path="/users"
          component={GetUsers}
        />

        <PrivateRoute
          role={["beneficiaire"]}
          path="/mesannonces"
          component={ContentBenificiaire}
        />

        <PublicRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
