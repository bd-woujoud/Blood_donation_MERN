
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, GetUser, selectdelete, selectusers } from '../features/user/userSlice'
import SideBarPrincipal from '../layouts/SiderBarPrincipal'
import { FaRegTrashAlt } from "react-icons/fa"

function GetUsers() {

    const dispatch = useDispatch()
    const allusers = useSelector(selectusers)
    const deleteuser = useSelector(selectdelete)

    useEffect(() => {

    dispatch(GetUser("beneficiaire"))

   }, [deleteuser])

    return (

        <div>

            <SideBarPrincipal />
                <div id="content" >
                <div className="row">
                        <div className="col-md-12">
                           <div className="page_title mb-3">
                              <h2 style={{paddingTop: "30px" }}>Liste des utilisateurs enregistrés </h2>
                           </div>
                        </div>
                     </div>
                    <div className="midde_cont"style={{ paddingTop: '50px' }}>
                        <div className="container-fluid">
                            <div className="row column1">
                                <div className="col-md-12">
                                    <div className="white_shd full margin_bottom_30">
                                        <div className="full graph_head">
                                            <div className="heading1 margin_0">
                                                <h2>Users_list</h2>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table className="table table-bordered" >
                                                <thead style={{ color: 'black', fontsize:"25px"}} >
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom</th>
                                                        <th>Prenom</th>
                                                        <th>Email</th>
                                                        <th>adresse</th>
                                                        <th>téléphone</th> 
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        allusers.map((e, i) => {
                                                            
                                                            return (
                                                                <tr>
                                                                    <td> {i} </td>
                                                                    <td> {e.nom_famille} </td>
                                                                    <td> {e.prenom} </td>
                                                                    <td> {e.email} </td>
                                                                    <td> {e.gouvernorat} </td>
                                                                    <td> {e.tel} </td> 
                                                                    <td className='center'>                                                  
                                                                        <FaRegTrashAlt  onClick={() => dispatch(DeleteUser(e._id))}  style={{color:"red",fontSize:"25px",cursor:'pointer'}}/> 
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
             </div>
    )
}

export default GetUsers