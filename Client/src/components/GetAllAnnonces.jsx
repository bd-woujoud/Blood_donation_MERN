

import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { DeleteAnnonce, GetallAnnonce, selectAnnonces } from '../features/annonce/annonceSlice';
import SideBarPrincipal from '../layouts/SiderBarPrincipal';

function GetallAnnonces() {

    const dispatch = useDispatch();
    const annonces = useSelector(selectAnnonces);
    useEffect(() => {
        dispatch(GetallAnnonce());
    }, []);

    return (


        <div>
            <SideBarPrincipal />
            {annonces &&
                <div id="content" >
                    <div class="midde_cont">
                    <div class="row column_title">
                        <div class="col-md-12">
                           <div class="page_title">
                                <h2>Liste des annonces publiées </h2>
                            </div>
                        </div>
                    </div>
                    {/* <div class="midde_cont ml-5" style={{ paddingTop: '50px' }}>
                        <div class="container-fluid">
                            <div className="row column1">
                                <div className="col-md-11"> */}


                                    <div class="table-responsive">
                                        <table class="table table-hover" >
                                            <thead style={{ backgroundColor: '#708090',fontSize:"17px", border: 'none' ,color:"white",height:"20px"}}>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Titre</th>
                                                    <th>description</th>
                                                    <th>emplacement</th>
                                                    <th>groupe_sanguin</th>
                                                    <th>categorie</th>
                                                    <th>Date de publication</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    annonces.map((a, i) => {

                                                        return (

                                                            <tr>
                                                                <td>{i}</td>
                                                                <td>{a.titre}</td>
                                                                <td>{a.description}</td>
                                                                <td>{a.emplacement}</td>
                                                                <td>{a.groupe_sanguin}</td>
                                                                <td>{a.categorie}</td>
                                                                <td>{moment(a.createdAt).format('DD-MM-YYYY')}</td>
                                                                <td class="d-flex align-items-center">
                                                                    <button onClick={() => dispatch(DeleteAnnonce(a._id))} type="button" class="btn btn-prim btn-sm btn-icon-text">
                                                                        Supprimé
                                                                        <i class="typcn typcn-delete-outline btn-icon-append" ></i>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })}

                                            </tbody>
                                        </table>


                                    </div>
                                    {/* </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default GetallAnnonces