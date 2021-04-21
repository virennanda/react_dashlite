import React from "react";
import BalanceInAccount from "../components/dashboard/balanceInAccount.card";
import Header from "../components/dashboard/header";
import InvestmentOverview from "../components/dashboard/investmentOverview";
import Notification from "../components/dashboard/notifications";
import RecentActivities from "../components/dashboard/recentActivities";
import RecentInvestments from "../components/dashboard/recentInventments";
import TopInvestedPlans from "../components/dashboard/topInvestedPlans";
import TotalDeposit from "../components/dashboard/totalDeposit.card";
import TotalWidthdrawal from "../components/dashboard/totalWidthdrawal.card";

const Dashboard = () => {
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
                <TotalDeposit />
                <TotalWidthdrawal />
                <BalanceInAccount />
                <InvestmentOverview />
                <TopInvestedPlans />
                <RecentActivities />
                <Notification />
                <RecentInvestments />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
