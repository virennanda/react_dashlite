import React from "react";

const Header = () => {
  return (
    <div className="nk-block-between">
      <div className="nk-block-head-content">
        <h3 className="nk-block-title page-title">Investment Dashboard</h3>
        <div className="nk-block-des text-soft">
          <p>Welcome to DashLite Dashboard Template.</p>
        </div>
      </div>
      <div className="nk-block-head-content">
        <div className="toggle-wrap nk-block-tools-toggle">
          <a
            href="/"
            className="btn btn-icon btn-trigger toggle-expand mr-n1"
            data-target="pageMenu"
          >
            <em className="icon ni ni-more-v"></em>
          </a>
          <div className="toggle-expand-content" data-content="pageMenu">
            <ul className="nk-block-tools g-3">
              <li>
                <a
                  href="/"
                  className="btn btn-white btn-dim btn-outline-primary"
                >
                  <em className="icon ni ni-download-cloud"></em>
                  <span>Export</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="btn btn-white btn-dim btn-outline-primary"
                >
                  <em className="icon ni ni-reports"></em>
                  <span>Reports</span>
                </a>
              </li>
              <li className="nk-block-tools-opt">
                <div className="drodown">
                  <a
                    href="/"
                    className="dropdown-toggle btn btn-icon btn-primary"
                    data-toggle="dropdown"
                  >
                    <em className="icon ni ni-plus"></em>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="/">
                          <em className="icon ni ni-user-add-fill"></em>
                          <span>Add User</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <em className="icon ni ni-coin-alt-fill"></em>
                          <span>Add Order</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <em className="icon ni ni-note-add-fill-c"></em>
                          <span>Add Page</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
