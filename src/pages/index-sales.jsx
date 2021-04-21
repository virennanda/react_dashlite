import React from "react";
import Header from "../components/sales/header";
import NewUsers from "../components/sales/newUsers.card";
import Notifications from "../components/sales/notifications.card";
import RecentActivities from "../components/sales/recentActivities.card";
import SalesOverview from "../components/sales/salesOverview";
import SalesRevenueCard from "../components/sales/salesRevenue.card";
import Subscriptions from "../components/sales/subscriptions.card";
import SupportRequest from "../components/sales/supportRequest.card";

const IndexSales = () => {
  return (
    <div className="nk-content nk-content-fluid">
      <div className="container-xl wide-xl">
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <Header />
            </div>
            <div className="nk-block">
              <div className="row g-gs">
                <SalesRevenueCard />
                <Subscriptions />
                <SalesOverview />
                <RecentActivities />
                <NewUsers />
                <SupportRequest />
                <Notifications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexSales;
