import React, { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import { CreateAnnonce, selectAddAnnonces, selecterrors } from "../features/annonce/annonceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2';
import { gouvernerat } from "../mocks/groupEmplacement";

function CreateAnnonceDon() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const [titre, settitre] = useState("");
  const [description, setDescription] = useState("");
  const [gouvernorat, setGouvernorat] = useState("");
  const [emplacement, setEmplacement] = useState("");
  const [groupe_sanguin, setGroupe] = useState("O+");
  const [categorie, setCategorie] = useState("don");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const errors=useSelector(selecterrors)

  const showModal = () => {

    setIsModalVisible(true);

  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {

    setIsModalVisible(false);

  };

  const createAnnonce = () => {

    let data = {

      titre: titre,
      description: description,
      groupe_sanguin: groupe_sanguin,
      gouvernorat: gouvernorat,
      emplacement: emplacement,
      categorie: categorie,
      tel:tel,
      email:email,
      user: user._id,

    };
    console.log(data);
    dispatch(CreateAnnonce(data));
  };
  
const add=useSelector(selectAddAnnonces)
  useEffect(()=>{

if(add ==="success"){
  
  settitre('')
  setDescription('')
  setGouvernorat('')
  setEmplacement('')
  setCategorie('')
  setEmail('')
  setTel('')
  setTimeout(() => {
  }, 3000);

  Swal.fire({
    icon: 'success',
    title: 'votre annonce à été créer avec succés!',
})
  handleOk()
}

  },[add])
  

const ErrorHandler = ({ name }) => { 
  return (
      <>
          {
             errors.map(e => {
                  return (
                      <>
                          {
                              e.path[0] === name
                              &&
                              <span style={{ color: "red" }}  >{e.message}</span>
                          }
                      </>
                  )
              })
          }
      </>
  )
}

  return (
    <>
      <span
        class="plus_green_bt"
        onClick={showModal}
        style={{ cursor: "pointer" }}
      >
        +
      </span>

      <Modal
        footer={null}
        title="Ajouter votre annonce"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div class="modal-body">
          <form>
            <div class="form-group" >
              <input
                value={titre}
                onChange={(e) => settitre(e.target.value)}
                style={{ height: "50px",color: 'black', fontSize: '15px'  ,lineHeight:"50px" }} 
                type="text"
                class="form-control"
                placeholder="Titre"
              />
                  <ErrorHandler name='titre' />
            </div>

            <div class="form-group" >
           
              <select
              value={gouvernorat}  onChange={(e) => setGouvernorat(e.target.value)}
                class="form-control"
              style={{ height: "50px",color: 'black', fontSize: '15px'  ,lineHeight:"50px" }} 
                placeholder="gouvernorat"
              >
                     {
                    gouvernerat.map((c, i) => {console.log(c,'cccccccccccc');
                      return (
                        <option value={c._id} >{c}</option>
                      )
                    })
                  }
          
              </select>
              <ErrorHandler name='gouvernorat' />
            </div>



            <div class="form-group"   >
              <input 

                value={emplacement}
                onChange={(e) => setEmplacement(e.target.value)}
                style={{ height: "50px",color: 'black', fontSize: '15px'  ,lineHeight:"50px" }} 
                type="text"
                class="form-control"
                placeholder="emplacement"
             
              />
                  <ErrorHandler name='emplacement' />
            </div>

            <div class="form-group"  >

              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
               style={{ height: "50px",color:'black',fontSize: '15px',lineHeight:"50px" }} 

                type="text"
                class="form-control"
                placeholder="description"
              />

             <ErrorHandler name='description' />
            </div>
            <div class="form-group"  >

              <input
                value={tel}
                onChange={(e) => setTel(e.target.value)}
               style={{ height: "50px",color:'black',fontSize: '15px',lineHeight:"50px" }} 

                type="text"
                class="form-control"
                placeholder="Numéro de téléphone"
              />

             <ErrorHandler name='tel' />
            </div>

            <div class="form-group"  >

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               style={{ height: "50px",color:'black',fontSize: '15px',lineHeight:"50px" }} 

                type="text"
                class="form-control"
                placeholder="tapez votre email"
              />

             <ErrorHandler name='email' />
            </div>

            <div class="form-group" >
              <select
                value={groupe_sanguin}
                onChange={(e) => setGroupe(e.target.value)}
                class="form-control"
              style={{ height: "50px",color: 'black', fontSize: '15px'  ,lineHeight:"50px" }} 
                placeholder="groupe_sanguin"
              >
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
              </select>
              <ErrorHandler name='groupe_sanguin' />
            </div>

            <div class="form-group" >
              <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                class="form-control"
              style={{ height: "50px",color: 'black', fontSize: '15px'  ,lineHeight:"50px" }} 

                placeholder="categorie"
              >
                <option value={"don"}>don</option>
                <option value={"demande"}>demande</option>
              </select>
              <ErrorHandler name='categorie' />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button  class="btn btn-primary" onClick={createAnnonce}>
            Ajouter
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CreateAnnonceDon;
