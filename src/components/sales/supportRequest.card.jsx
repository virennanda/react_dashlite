import React from "react";

const SupportRequest = () => {
  return (
    <div className="col-lg-6 col-xxl-4">
      <div className="card card-bordered h-100">
        <div className="card-inner border-bottom">
          <div className="card-title-group">
            <div className="card-title">
              <h6 className="title">Support Requests</h6>
            </div>
            <div className="card-tools">
              <a href="/" className="link">
                All Tickets
              </a>
            </div>
          </div>
        </div>
        <ul className="nk-support">
          <li className="nk-support-item">
            <div className="user-avatar">
              <img src="./images/avatar/a-sm.jpg" alt="" />
            </div>
            <div className="nk-support-content">
              <div className="title">
                <span>Vincent Lopez</span>
                <span className="badge badge-dot badge-dot-xs badge-warning ml-1">
                  Pending
                </span>
              </div>
              <p>Thanks for contact us with your issues...</p>
              <span className="time">6 min ago</span>
            </div>
          </li>
          <li className="nk-support-item">
            <div className="user-avatar bg-purple-dim">
              <span>DM</span>
            </div>
            <div className="nk-support-content">
              <div className="title">
                <span>Daniel Moore</span>
                <span className="badge badge-dot badge-dot-xs badge-info ml-1">
                  Open
                </span>
              </div>
              <p>Thanks for contact us with your issues...</p>
              <span className="time">2 Hours ago</span>
            </div>
          </li>
          <li className="nk-support-item">
            <div className="user-avatar">
              <img src="./images/avatar/b-sm.jpg" alt="" />
            </div>
            <div className="nk-support-content">
              <div className="title">
                <span>Larry Henry</span>
                <span className="badge badge-dot badge-dot-xs badge-success ml-1">
                  Solved
                </span>
              </div>
              <p>Thanks for contact us with your issues...</p>
              <span className="time">3 Hours ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportRequest;
