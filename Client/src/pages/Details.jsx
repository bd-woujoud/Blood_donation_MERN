import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetAnnonceById } from "../features/annonce/annonceSlice";
import { BsTelephoneOutbound } from 'react-icons/bs'

import abc from '../assets/image/proverbe.jpg'
function Details() {


  const [to, setTo] = useState('')
  const [message, setMessage] = useState('')
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const dispatch = useDispatch();
  //  const [single, setsingle] = useState(Annonce);
  const single = useSelector(state => state.annonces.getId)
  console.log(single, 'looogiiiiii')

  useEffect((id) => {
    dispatch(GetAnnonceById(id))
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalmail = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>

      {single &&

        <div className="content">

          <div class="container" >
            <div class="row" >
              <div class="col-md-12"style={{ marginTop: "150px" }}>
                <div class="wrapper">
                  <div class="row no-gutters ">
                    <div class="col-md-7">
                      <div class="contact-wrap w-100 p-md-5 p-4 ">
                        <h3 class="mb-5" style={{ fontWeight: "bold" }}>

                          Annonce du :

                          {single.categorie}

                        </h3>
                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          class="contactForm"
                        >
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="subject">
                                  nom
                                  <span
                                    style={{
                                      color: "black",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {single.user.nom_famille}
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="name">
                                  Prenom:
                                  <span
                                    style={{
                                      color: "black",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {single.user.prenom}

                                  </span>
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="emplacement">
                                  emplacement:
                                  <span
                                    style={{
                                      color: "black",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {single.emplacement}
                                    
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="email">
                                  groupe_sanguin
                                  <span
                                    style={{
                                      color: "black",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {single.groupe_sanguin}
                                  </span>
                                </label>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="subject">
                                  Téléphone:
                                  <span
                                    style={{
                                      color: "black",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {single.tel}
                                  </span>
                                </label>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="subject">
                                  Email:
                                  <span
                                    style={{
                                      color: "black",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {single.email}
                                  </span>
                                </label>
                              </div>
                            </div>

                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="label" htmlFor="#">
                                  description
                                </label>
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="message"
                                  cols={30}
                                  rows={4}
                                  defaultValue={single.description}
                                />
                              </div>
                            </div>
                            <br></br>
                            <div class="col-md-12">
                              <div class="form-group">
                                <h6 style={{ color: "orange", fontSize: "20px" }}>
                                  contacter le proprietaire d'annonce ?
                                </h6>
                                <p></p>
                                {single.tel ?

                                  <span className="float-right">
                                    <Button type="primary" onClick={() => setModal1Visible(true)} class="btn btn-primary  mt-4 " style={{ marginRight: "20px" }}>Appelez</Button>

                                    <Button type="primary" onClick={() => setModal2Visible(true)} class="btn btn-primary  mt-4 ">message</Button>
                                  </span>
                                  :
                                  <Button type="primary" onClick={() => setModal2Visible(true)} defaultValue="message" class="btn btn-primary float-right mt-4 mr-3" >message</Button>

                                }


                              </div>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="col-md-5 d-flex align-items-stretch">
                      <img
                        class="info-wrap w-100 p-5 img"
                        src={abc}
                      />
                    </div>
                  </div>

                  <Modal
                    title="Appelez le proprietaire"
                    visible={modal1Visible}
                    onOk={() => setModal1Visible(false)}
                    onCancel={() => setModal1Visible(false)}
                  >
                    <a 
                      style={{ fontSize: "25px", marginLeft: "20px" }}
                    >
                      {single.tel}

                    </a>
                  </Modal>

                  <Modal title="New message" visible={modal2Visible}
                    onOk={() => setModal2Visible(false)}
                    onCancel={() => setModal2Visible(false)}>

                    <div class="modal-body">
                      <form  >
                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label">to:</label>
                          <input type="text" disabled class="form-control" id="recipient-name" value={single.email} onChange={(e) => setTo(e.target.value)} />
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="col-form-label">Message:</label>
                          <textarea class="form-control" id="message-text" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                      </form>

                    </div>

                  </Modal>
                </div>
              </div>

            </div>
          </div>

        </div>
      }
    </div>
  );
}

export default Details;
