import React from "react";
import { BiCategory, BiMap } from "react-icons/bi";
import { FaFileContract } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
function AnnonceItem({ Annonce }) {

  const history = useHistory();

  return (
    <div>
       <div className="white_shd full margin_bottom_30">
      <div className="full price_table padding_infor_info">
        <div className="row">
          <div className=" col-md-12 col-s-6   margin_bottom_10">
            <div className="contact_blog">
              <div className="contact_inner">
                <div className="left">
                  <h3>{Annonce.titre}</h3>
                </div>
                <div
                  className="btn btn-prim float-right"
                  onClick={() => {
                    localStorage.setItem("singlepostid",Annonce._id);
                    history.push("/details");
                  }}
                >
                  Voir Plus

                </div>
                <div className="bottom_list">
                  <p>{Annonce.description}</p>
                  <hr></hr>

                  <div class="row">
                    <div class="col-l-3 col-md-3 col-sm-3 col-3">
                      <BiCategory
                        className="icons"
                        style={{ color: "red" }}
                      />
                      <span>{Annonce.categorie}</span>
                    </div>

                    <div class=" col-l-3 col-md-3 col-sm-3 col-3">
                      <FaFileContract
                        className="icons"
                        style={{ color: "red" }}
                      />
                      <span>{Annonce.groupe_sanguin}</span>
                    </div>

                    <div class="col-l-3 col-md-3 col-sm-3 col-3">
                      <BiMap className="icons" style={{ color: "red" }} />
                      <span>{Annonce.emplacement}</span>
                    </div>

                    <div class="col-l-3 col-md-3 col-sm-3 col-3">
                      <FaRegCalendarAlt
                        className="icons"
                        style={{ color: "red" }}
                      />
                      <span>
                        {moment(Annonce.createdAt).format("DD-MM-YYYY")}
                      </span>
                    </div>
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

export default AnnonceItem;
