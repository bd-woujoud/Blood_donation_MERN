import React from "react";

import "antd/dist/antd.css";

import GetAnnonceDonAdmin from "./GetAnnonceDonAdmin";
import SideBarPrincipal from "../layouts/SiderBarPrincipal";

function ContentAdmin() {
  return (
    <div>
      <SideBarPrincipal />
      <div id="content">
      <div class="midde_cont">
                  <div class="container-fluid ">
                  <div class="row column4 graph ">
                        <div class="col-md-12 mt-5 col-lg-10">
                <GetAnnonceDonAdmin />
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
}

export default ContentAdmin;
