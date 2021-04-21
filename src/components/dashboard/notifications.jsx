import React from "react";

const Notification = () => {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="card card-bordered h-100">
        <div className="card-inner border-bottom">
          <div className="card-title-group">
            <div className="card-title">
              <h6 className="title">Notifications</h6>
            </div>
            <div className="card-tools">
              <a href="/" className="link">
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="card-inner">
          <div className="timeline">
            <h6 className="timeline-head">November, 2019</h6>
            <ul className="timeline-list">
              <li className="timeline-item">
                <div className="timeline-status bg-primary is-outline"></div>
                <div className="timeline-date">
                  13 Nov <em className="icon ni ni-alarm-alt"></em>
                </div>
                <div className="timeline-data">
                  <h6 className="timeline-title">Submited KYC Application</h6>
                  <div className="timeline-des">
                    <p>Re-submitted KYC form.</p>
                    <span className="time">09:30am</span>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-status bg-primary"></div>
                <div className="timeline-date">
                  13 Nov <em className="icon ni ni-alarm-alt"></em>
                </div>
                <div className="timeline-data">
                  <h6 className="timeline-title">Submited KYC Application</h6>
                  <div className="timeline-des">
                    <p>Re-submitted KYC form.</p>
                    <span className="time">09:30am</span>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-status bg-pink"></div>
                <div className="timeline-date">
                  13 Nov <em className="icon ni ni-alarm-alt"></em>
                </div>
                <div className="timeline-data">
                  <h6 className="timeline-title">Submited KYC Application</h6>
                  <div className="timeline-des">
                    <p>Re-submitted KYC form.</p>
                    <span className="time">09:30am</span>
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

export default Notification;
