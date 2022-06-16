import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SidebarAdmin from './SidebarAdmin'
import SideBarBeneficiaire from './SideBarBeneficiaire'

function SideBarPrincipal() {

    const { user } = useContext(AuthContext)
  return (

    <div >
  
     {
     user.role === "admin" ? <SidebarAdmin /> : <SideBarBeneficiaire/>}

    </div>
  )
}

export default  SideBarPrincipal 