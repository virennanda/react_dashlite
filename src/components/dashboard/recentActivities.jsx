import React from "react";

const RecentActivities = () => {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="card card-bordered card-full">
        <div className="card-inner border-bottom">
          <div className="card-title-group">
            <div className="card-title">
              <h6 className="title">Recent Activities</h6>
            </div>
            <div className="card-tools">
              <ul className="card-tools-nav">
                <li>
                  <a href="/">
                    <span>Cancel</span>
                  </a>
                </li>
                <li className="active">
                  <a href="/">
                    <span>All</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nk-activity">
          <li className="nk-activity-item">
            <div className="nk-activity-media user-avatar bg-success">
              <img src="./images/avatar/c-sm.jpg" alt="" />
            </div>
            <div className="nk-activity-data">
              <div className="label">Keith Jensen requested to Widthdrawl.</div>
              <span className="time">2 hours ago</span>
            </div>
          </li>
          <li className="nk-activity-item">
            <div className="nk-activity-media user-avatar bg-warning">HS</div>
            <div className="nk-activity-data">
              <div className="label">Harry Simpson placed a Order.</div>
              <span className="time">2 hours ago</span>
            </div>
          </li>
          <li className="nk-activity-item">
            <div className="nk-activity-media user-avatar bg-azure">SM</div>
            <div className="nk-activity-data">
              <div className="label">Stephanie Marshall got a huge bonus.</div>
              <span className="time">2 hours ago</span>
            </div>
          </li>
          <li className="nk-activity-item">
            <div className="nk-activity-media user-avatar bg-purple">
              <img src="./images/avatar/d-sm.jpg" alt="" />
            </div>
            <div className="nk-activity-data">
              <div className="label">Nicholas Carr deposited funds.</div>
              <span className="time">2 hours ago</span>
            </div>
          </li>
          <li className="nk-activity-item">
            <div className="nk-activity-media user-avatar bg-pink">TM</div>
            <div className="nk-activity-data">
              <div className="label">Timothy Moreno placed a Order.</div>
              <span className="time">2 hours ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;
