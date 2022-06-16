import React from "react";

import "antd/dist/antd.css";

import GetAnnonceDonAdmin from "./GetAnnonceDonAdmin";
import SideBarPrincipal from "../layouts/SiderBarPrincipal";

function ContentBenificiaire() {
  return (
    <div>
      <SideBarPrincipal />
      <div id="content">
        <div class="main ml-5">
          <div class="container-fluid">
            <div className="row column1 " style={{ marginTop: "50px" }}>
              <div class="col-md-10">
                <GetAnnonceDonAdmin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBenificiaire;
