import React, { Component } from 'react';
import Footer from './components/common/footer';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import IndexSales from './pages/index-sales';
class App extends Component {
  componentDidMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    script1.async = true;
    script2.async = true;
    script3.async = true;
    script1.src = "./assets/js/bundle.js?ver=2.4.0";
    script2.src = "./assets/js/scripts.js?ver=2.4.0";
    script3.src = "./assets/js/charts/gd-default.js?ver=2.4.0";
    this.div.appendChild(script1);
    this.div.appendChild(script2);
    this.div.appendChild(script3);
  }
  render() {
    return (
      <div ref={(el) => (this.div = el)} className="nk-body npc-invest bg-lighter">
        <div className="nk-app-root">
          <div className="nk-wrap ">
            <Navbar />
            {/* <Dashboard /> */}
            <IndexSales />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
