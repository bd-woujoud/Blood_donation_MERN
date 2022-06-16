import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAnnonce, selectAnnonces, UpdateAnnonce } from "../features/annonce/annonceSlice";
import { Modal } from "antd";
import { emplacement, group, gouvernerat } from "../mocks/groupEmplacement";

function ItemAnnonce({ annonce }) {

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [upAnnonce, setUpAnnonce] = useState({});
  const annonces = useSelector(selectAnnonces)

  const showModal = (id) => {
    setIsModalVisible(true);
    setUpAnnonce(annonces.find(o => o._id === id))
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUpAnnonce((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleUpdate = () => {

    let data = {
      titre: upAnnonce.titre,
      description: upAnnonce.description,
      categorie: upAnnonce.categorie,
      gouvernorat: upAnnonce.gouvernorat,
      emplacement: upAnnonce.emplacement,
      groupe_sanguin: upAnnonce.groupe_sanguin,
      id: annonce._id,
    };
    dispatch(UpdateAnnonce(data));
    handleOk();

  };


  return (
    <tr>
      <td>{annonce.titre}</td>
      <td>{annonce.description}</td>
      <td>{annonce.gouvernorat}</td>
      <td>{annonce.emplacement}</td>
      <td>{annonce.groupe_sanguin}</td>
      <td>{annonce.categorie}</td>
      <td>
        <BsPencilSquare
          onClick={() => showModal(annonce._id)}
          style={{
            color: "blue",
            fontSize: "20px",
            marginRight: "30px",
            cursor: "pointer",
          }}
        />

        <TiDeleteOutline
          onClick={() => dispatch(DeleteAnnonce(annonce._id))}
          style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
        />
      </td>
      <Modal
        title="update"
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* form for update */}

        <br />
        <form>
          <div class="form-group" style={{ height: "50px" }}>
            <input
              name="titre"
              style={{ height: "50px", color: "black", fontSize: "15px" }}
              type="text"
              class="form-control"
              placeholder="Title"
              onChange={handleChange}
              value={upAnnonce.titre}
            />
          </div>

          <div class="form-group" style={{ height: "50px" }}>
            <input
              name="description"
              style={{ height: "50px", color: "black", fontSize: "15px" }}
              type="text"
              class="form-control"
              placeholder="description"
              onChange={handleChange}
              value={upAnnonce.description}
            />
          </div>

          <div class="form-group" style={{ height: "50px" }}>
            <select
              name="gouvernorat"
              class="form-control"
              style={{ height: "50px", color: "black", fontSize: "15px" }}
              onChange={handleChange}
              value={upAnnonce.gouvernorat}
            >
              {
                gouvernerat.map((c, i) => {
                  return (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  );
                })}
            </select>
          </div>
          
          <div class="form-group" style={{ height: "50px" }}>
            <input
              name="emplacement"
              class="form-control"
              style={{ height: "50px", color: "black", fontSize: "15px" }}
              onChange={handleChange}
              value={upAnnonce.emplacement}
            />

          </div>

     


          <div class="form-group" style={{ height: "50px" }}>
            <select
              name="groupe_sanguin"
              class="form-control"
              style={{ height: "50px", color: "black", fontSize: "15px" }}
              onChange={handleChange}
              value={upAnnonce.groupe_sanguin}
            >
              {group.map((c, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>

          <div class="form-group" style={{ height: "50px" }}>
            <select
              name="categorie"
              class="form-control"
              style={{ height: "50px", color: "black", fontSize: "15px" }}
              onChange={handleChange}
              value={upAnnonce.categorie}
            >
              <option>don</option>
              <option>demande</option>

            </select>
          </div>
        </form>
        <div class="modal-footer">
          <button onClick={handleUpdate} type="button" class="btn btn-primary">
            Modifier
          </button>
        </div>
      </Modal>
    </tr>
  );
}

export default ItemAnnonce;
