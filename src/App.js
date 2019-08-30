import React from 'react';
import Navbar from './demo/Navbar';
import Product from './demo/Product';
import RightMenu from './demo/RightMenu';
import Collection from './demo/Collection';
import Footer from './demo/Footer';

// css
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/aos.css';
import './css/style.css';
import './fonts/icomoon/style.css';

function App() {
  return (
    <div className="site-wrap">
      <Navbar />
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
          <Product />
          <RightMenu />
          </div>
        </div>
      </div>
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
