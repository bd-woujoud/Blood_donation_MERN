import React from 'react'


import ContentAdmin from '../components/ContentAdmin'
import SideBarPrincipal from '../layouts/SiderBarPrincipal'


function DashAdmin() {

    return (

        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <ContentAdmin/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashAdmin
