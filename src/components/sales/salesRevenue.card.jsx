import React from "react";

const SalesRevenueCard = () => {
  return (
    <div className="col-xxl-6">
      <div className="row g-gs">
        <div className="col-lg-6 col-xxl-12">
          <div className="card card-bordered">
            <div className="card-inner">
              <div className="card-title-group align-start mb-2">
                <div className="card-title">
                  <h6 className="title">Sales Revenue</h6>
                  <p>In last 30 days revenue from subscription.</p>
                </div>
                <div className="card-tools">
                  <em
                    className="card-hint icon ni ni-help-fill"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Revenue from subscription"
                  ></em>
                </div>
              </div>
              <div className="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                <div className="nk-sale-data-group flex-md-nowrap g-4">
                  <div className="nk-sale-data">
                    <span className="amount">
                      14,299.59{" "}
                      <span className="change down text-danger">
                        <em className="icon ni ni-arrow-long-down"></em>
                        16.93%
                      </span>
                    </span>
                    <span className="sub-title">This Month</span>
                  </div>
                  <div className="nk-sale-data">
                    <span className="amount">
                      7,299.59{" "}
                      <span className="change up text-success">
                        <em className="icon ni ni-arrow-long-up"></em>
                        4.26%
                      </span>
                    </span>
                    <span className="sub-title">This Week</span>
                  </div>
                </div>
                <div className="nk-sales-ck sales-revenue">
                  <canvas
                    className="sales-bar-chart"
                    id="salesRevenue"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-12">
          <div className="row g-gs">
            <div className="col-sm-6 col-lg-12 col-xxl-6">
              <div className="card card-bordered">
                <div className="card-inner">
                  <div className="card-title-group align-start mb-2">
                    <div className="card-title">
                      <h6 className="title">Active Subscriptions</h6>
                    </div>
                    <div className="card-tools">
                      <em
                        className="card-hint icon ni ni-help-fill"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Total active subscription"
                      ></em>
                    </div>
                  </div>
                  <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
                    <div className="nk-sale-data">
                      <span className="amount">9.69K</span>
                      <span className="sub-title">
                        <span className="change down text-danger">
                          <em className="icon ni ni-arrow-long-down"></em>
                          1.93%
                        </span>
                        since last month
                      </span>
                    </div>
                    <div className="nk-sales-ck">
                      <canvas
                        className="sales-bar-chart"
                        id="activeSubscription"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12 col-xxl-6">
              <div className="card card-bordered">
                <div className="card-inner">
                  <div className="card-title-group align-start mb-2">
                    <div className="card-title">
                      <h6 className="title">Avg Subscriptions</h6>
                    </div>
                    <div className="card-tools">
                      <em
                        className="card-hint icon ni ni-help-fill"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Daily Avg. subscription"
                      ></em>
                    </div>
                  </div>
                  <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
                    <div className="nk-sale-data">
                      <span className="amount">346.2</span>
                      <span className="sub-title">
                        <span className="change up text-success">
                          <em className="icon ni ni-arrow-long-up"></em>
                          2.45%
                        </span>
                        since last week
                      </span>
                    </div>
                    <div className="nk-sales-ck">
                      <canvas
                        className="sales-bar-chart"
                        id="totalSubscription"
                      ></canvas>
                    </div>
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

export default SalesRevenueCard;
