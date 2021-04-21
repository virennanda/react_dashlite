import React from "react";

const TotalDeposit = () => {
  return (
    <div className="col-md-4">
      <div className="card card-bordered card-full">
        <div className="card-inner">
          <div className="card-title-group align-start mb-0">
            <div className="card-title">
              <h6 className="subtitle">Total Deposit</h6>
            </div>
            <div className="card-tools">
              <em
                className="card-hint icon ni ni-help-fill"
                data-toggle="tooltip"
                data-placement="left"
                title="Total Deposited"
              ></em>
            </div>
          </div>
          <div className="card-amount">
            <span className="amount">
              {" "}
              49,595.34 <span className="currency currency-usd">USD</span>
            </span>
            <span className="change up text-danger">
              <em className="icon ni ni-arrow-long-up"></em>1.93%
            </span>
          </div>
          <div className="invest-data">
            <div className="invest-data-amount g-2">
              <div className="invest-data-history">
                <div className="title">This Month</div>
                <div className="amount">
                  2,940.59 <span className="currency currency-usd">USD</span>
                </div>
              </div>
              <div className="invest-data-history">
                <div className="title">This Week</div>
                <div className="amount">
                  1,259.28 <span className="currency currency-usd">USD</span>
                </div>
              </div>
            </div>
            <div className="invest-data-ck">
              <canvas className="iv-data-chart" id="totalDeposit"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalDeposit;
