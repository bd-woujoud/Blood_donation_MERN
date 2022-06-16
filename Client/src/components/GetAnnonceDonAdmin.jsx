import React, { useContext, useEffect, useState } from "react";
import { MdBloodtype } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CreateAnnonceDon from "./CreateAnnonceDon";
import {GetallAnnonce,selectAnnonces,selectupdateAnnonces,selectdeleteAnnonces,GetByUser,
  selectAddAnnonces,
} from "../features/annonce/annonceSlice";
import ItemAnnonce from "./ItemAnnonce";
import { AuthContext } from "../context/AuthContext";

function GetAnnonceDonAdmin() {
  const annonces = useSelector(selectAnnonces);
  const add = useSelector(selectAddAnnonces);
   const deleteA = useSelector(selectdeleteAnnonces);
   const updateA = useSelector(selectupdateAnnonces);
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  useEffect(() => {

    dispatch(GetByUser(user._id));

  }, [deleteA,updateA,add]);


  return (
    <div>
      <div class="dash_blog">
        <div class="dash_blog_inner">
          <div class="dash_head">
            
            {/*boutton + create*/}
            <h3 style={{ color: "black" }}>
              <span>
                <MdBloodtype
                  style={{ color: "red", width: "50px", height: "50px" }}
                />
                Mes Annonces
              </span>
              <CreateAnnonceDon />
            </h3>
          </div>
          <div class="table_section padding_infor_info">
          <div class="table-responsive-sm">
            <table class="table table-striped projects">
              <thead class="thead-dark">
                <tr>
                  <th>Titre</th>
                  <th>description</th>
                  <th>gouvernorat</th>
                  <th>emplacement</th>
                  <th>groupe_sanguin</th>
                  <th>categorie</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {annonces.map((a, i) => {
                  return <ItemAnnonce annonce={a} />;
                })}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetAnnonceDonAdmin;
