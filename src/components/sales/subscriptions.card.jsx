import React from "react";

const Subscriptions = () => {
  return (
    <div className="col-xxl-6">
      <div className="card card-bordered h-100">
        <div className="card-inner">
          <div className="card-title-group align-start gx-3 mb-3">
            <div className="card-title">
              <h6 className="title">Sales Overview</h6>
              <p>
                In 30 days sales of product subscription.{" "}
                <a href="/">See Details</a>
              </p>
            </div>
            <div className="card-tools">
              <div className="dropdown">
                <a
                  href="/"
                  className="btn btn-primary btn-dim d-none d-sm-inline-flex"
                  data-toggle="dropdown"
                >
                  <em className="icon ni ni-download-cloud"></em>
                  <span>
                    <span className="d-none d-md-inline">Download</span> Report
                  </span>
                </a>
                <a
                  href="/"
                  className="btn btn-icon btn-primary btn-dim d-sm-none"
                  data-toggle="dropdown"
                >
                  <em className="icon ni ni-download-cloud"></em>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="/">
                        <span>Download Mini Version</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>Download Full Version</span>
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="/">
                        <em className="icon ni ni-opt-alt"></em>
                        <span>More Options</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-sale-data-group align-center justify-between gy-3 gx-5">
            <div className="nk-sale-data">
              <span className="amount">$82,944.60</span>
            </div>
            <div className="nk-sale-data">
              <span className="amount sm">
                1,937 <small>Subscribers</small>
              </span>
            </div>
          </div>
          <div className="nk-sales-ck large pt-4">
            <canvas
              className="sales-overview-chart"
              id="salesOverview"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
