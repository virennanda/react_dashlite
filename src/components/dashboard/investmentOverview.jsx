import React from "react";

const InvestmentOverview = () => {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="card card-bordered card-full">
        <div className="card-inner">
          <div className="card-title-group mb-1">
            <div className="card-title">
              <h6 className="title">Investment Overview</h6>
              <p>
                The investment overview of your platform.{" "}
                <a href="/">All Investment</a>
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs nav-tabs-card nav-tabs-xs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#overview">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#thisyear">
                This Year
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#alltime">
                All Time
              </a>
            </li>
          </ul>
          <div className="tab-content mt-0">
            <div className="tab-pane active" id="overview">
              <div className="invest-ov gy-2">
                <div className="subtitle">Currently Actived Investment</div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      49,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Amount</div>
                  </div>
                  <div className="invest-ov-stats">
                    <div>
                      <span className="amount">56</span>
                      <span className="change up text-danger">
                        <em className="icon ni ni-arrow-long-up"></em>
                        1.93%
                      </span>
                    </div>
                    <div className="title">Plans</div>
                  </div>
                </div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      49,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Paid Profit</div>
                  </div>
                </div>
              </div>
              <div className="invest-ov gy-2">
                <div className="subtitle">Investment in this Month</div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      49,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Amount</div>
                  </div>
                  <div className="invest-ov-stats">
                    <div>
                      <span className="amount">23</span>
                      <span className="change down text-danger">
                        <em className="icon ni ni-arrow-long-down"></em>
                        1.93%
                      </span>
                    </div>
                    <div className="title">Plans</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="thisyear">
              <div className="invest-ov gy-2">
                <div className="subtitle">Currently Actived Investment</div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      89,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Amount</div>
                  </div>
                  <div className="invest-ov-stats">
                    <div>
                      <span className="amount">96</span>
                      <span className="change up text-danger">
                        <em className="icon ni ni-arrow-long-up"></em>
                        1.93%
                      </span>
                    </div>
                    <div className="title">Plans</div>
                  </div>
                </div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      99,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Paid Profit</div>
                  </div>
                </div>
              </div>
              <div className="invest-ov gy-2">
                <div className="subtitle">Investment in this Month</div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      149,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Amount</div>
                  </div>
                  <div className="invest-ov-stats">
                    <div>
                      <span className="amount">83</span>
                      <span className="change down text-danger">
                        <em className="icon ni ni-arrow-long-down"></em>
                        1.93%
                      </span>
                    </div>
                    <div className="title">Plans</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="alltime">
              <div className="invest-ov gy-2">
                <div className="subtitle">Currently Actived Investment</div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      249,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Amount</div>
                  </div>
                  <div className="invest-ov-stats">
                    <div>
                      <span className="amount">556</span>
                      <span className="change up text-danger">
                        <em className="icon ni ni-arrow-long-up"></em>
                        1.93%
                      </span>
                    </div>
                    <div className="title">Plans</div>
                  </div>
                </div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      149,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Paid Profit</div>
                  </div>
                </div>
              </div>
              <div className="invest-ov gy-2">
                <div className="subtitle">Investment in this Month</div>
                <div className="invest-ov-details">
                  <div className="invest-ov-info">
                    <div className="amount">
                      249,395.395{" "}
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="title">Amount</div>
                  </div>
                  <div className="invest-ov-stats">
                    <div>
                      <span className="amount">223</span>
                      <span className="change down text-danger">
                        <em className="icon ni ni-arrow-long-down"></em>
                        1.93%
                      </span>
                    </div>
                    <div className="title">Plans</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOverview;
