import React from "react";

const TopInvestedPlans = () => {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="card card-bordered card-full">
        <div className="card-inner d-flex flex-column h-100">
          <div className="card-title-group mb-3">
            <div className="card-title">
              <h6 className="title">Top Invested Plan</h6>
              <p>In last 30 days top invested schemes.</p>
            </div>
            <div className="card-tools mt-n4 mr-n1">
              <div className="drodown">
                <a
                  href="/"
                  className="dropdown-toggle btn btn-icon btn-trigger"
                  data-toggle="dropdown"
                >
                  <em className="icon ni ni-more-h"></em>
                </a>
                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="/">
                        <span>15 Days</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="active">
                        <span>30 Days</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>3 Months</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-list gy-3">
            <div className="progress-wrap">
              <div className="progress-text">
                <div className="progress-label">Strater Plan</div>
                <div className="progress-amount">58%</div>
              </div>
              <div className="progress progress-md">
                <div className="progress-bar" data-progress="58"></div>
              </div>
            </div>
            <div className="progress-wrap">
              <div className="progress-text">
                <div className="progress-label">Silver Plan</div>
                <div className="progress-amount">18.49%</div>
              </div>
              <div className="progress progress-md">
                <div
                  className="progress-bar bg-orange"
                  data-progress="18.49"
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <div className="progress-text">
                <div className="progress-label">Dimond Plan</div>
                <div className="progress-amount">16%</div>
              </div>
              <div className="progress progress-md">
                <div className="progress-bar bg-teal" data-progress="16"></div>
              </div>
            </div>
            <div className="progress-wrap">
              <div className="progress-text">
                <div className="progress-label">Platinam Plan</div>
                <div className="progress-amount">29%</div>
              </div>
              <div className="progress progress-md">
                <div className="progress-bar bg-pink" data-progress="29"></div>
              </div>
            </div>
            <div className="progress-wrap">
              <div className="progress-text">
                <div className="progress-label">Vibranium Plan</div>
                <div className="progress-amount">33%</div>
              </div>
              <div className="progress progress-md">
                <div className="progress-bar bg-azure" data-progress="33"></div>
              </div>
            </div>
          </div>
          <div className="invest-top-ck mt-auto">
            <canvas className="iv-plan-purchase" id="planPurchase"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInvestedPlans;
