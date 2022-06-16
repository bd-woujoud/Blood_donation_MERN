import React, { useContext, useEffect, useState } from "react";
import { CameraOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import SideBarPrincipal from "../layouts/SiderBarPrincipal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectavatarstatus,
  UpdateUser,
  uploadavatar,
} from "../features/user/userSlice";
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2';
import { gouvernerat } from "../mocks/groupEmplacement";

const Profil = () => {
  const { user } = useContext(AuthContext);
  const [disabled, setdisabled] = useState(true);
  const [userdetails, setuserdetails] = useState(user);
  console.log(userdetails, "userdetails");
  const dispatch = useDispatch();

  const handlePicChanged = (e) => {
    let fdata = new FormData();
    fdata.append("avatar", e.target.files[0]);
    let data = {
      id: user._id,
      data: fdata,
    };

    dispatch(uploadavatar(data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(userdetails);
  };

  const handleupdate = () => {
    let data = {
      id: user._id,
      data: userdetails,
    };
    console.log(user, "zzzzzzzzzzzzzzzzzzzz");
    dispatch(UpdateUser(data));
    setdisabled(!disabled);
    Swal.fire({
      icon: 'success',
      title: 'votre profil est à jour!',

    })
  };



  return (

    <div>

      <SideBarPrincipal />
      <div id="content">
      <div className="row">
                        <div className="col-md-12">
                           <div className="page_title mb-3">
                              <h2 >Mon Profil </h2>
                           </div>
                        </div>
                     </div>
        <div className="midde_cont">
          <div className="container-fluid">
            <div className="row column1">
              <div className="col-md-2" />
              <div className="col-md-8">
                <div className="white_shd full margin_bottom_30">
                
                  <div className="full price_table padding_infor_info">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="full dis_flex center_text">
                          <div className="profile_img"><img width={180} height={180} className="rounded-circle" src={"http://localhost:4000/file/" +user.avatar} alt="#" />
                          <CameraOutlined onClick={() => document.getElementById("upload").click()}
                            style={{color: "blue",width: "40px",height: "40px",position: "absolute"}} className="upload"/>
                          <div class="contact_inner mt-5 ">
                            <h3>{user.nom_famille} {user.prenom}</h3>
                            <ul class="list-unstyled">
                              <li>
                                <i class="fa fa-envelope-o"></i> :
                                {user.email}
                              </li>
                              <li>
                                <i class="fa fa-phone"></i> :{user.tel}
                              </li>
                            </ul>
                          </div>
                        </div>
                          <div class="profile_contant">
                            <div className="col-md-12 ">
                              <div className="d-flex justify-content-between align-items-center  text-right">
                              
                                <EditOutlined
                                  onClick={() => setdisabled(!disabled)}
                                  style={{ fontSize: "30px", marginLeft: "100%" }}
                                />
                              </div>

                              <div className="col-md-12">
                                <label>Nom</label>
                                <input
                                  value={userdetails.nom_famille}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  name="nom_famille"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                />
                              </div>
                              <div className="col-md-12">
                                <label>Prenom</label>
                                <input
                                  value={userdetails.prenom}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  name="prenom"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                />
                              </div>
                              <div className="col-md-12">
                                <label> groupe_sanguin</label>
                                <input
                                  value={userdetails.groupe_sanguin}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  name=" groupe_sanguin"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                />
                              </div>
                              <div className="col-md-12">
                                <label>Téléphone</label>
                                <input
                                  value={userdetails.tel}
                                  onChange={handleChange}
                                  name="tel"
                                  type="text"
                                  className="form-control"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                />
                              </div>
                              <div className="col-md-12">
                                <label>Adresse</label>

                                <select
                                  value={userdetails.gouvernorat}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  name="gouvernorat"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                            >

                  {
                 gouvernerat.map((c, i) => {
                   return (
                     <option value={c._id} >{c}</option>
                   )
                 })
               }



                             </select>
                              </div>
                              <div className="col-md-12">
                                <label>Email</label>
                                <input
                                  value={userdetails.email}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  name="email"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                />
                              </div>
                              <div className="col-md-12">
                                <label>Password</label>
                                <input
                                  // value={userdetails.password}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  name="password"
                                  disabled={disabled}
                                  style={{
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                />
                              </div>

                              <div className="mt-5 mb-5 text-right">
                                <button
                                  onClick={() => handleupdate()}
                                  className="btn btn-prim profile-button"
                                  type="button"
                                >
                                  save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div >
                  </div >
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >

      <input
        id="upload"
        onChange={(e) => handlePicChanged(e)}
        type="file"
        hidden
      />
    </div >
  );
};

export default Profil;
