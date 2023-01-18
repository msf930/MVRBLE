import React from "react";
import "../Styles/footer.css";

const Footer = () => {
    return (
      <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* column1 */}
                <div className="col">
                    <h4> MVRBLE</h4>
                    <ul className="list-unstyled">
                        <li>323-242-5343</li>
                        <li>Los Angeles, CA</li>
                        <li>445 Auburn Ave Suite #221</li>
                    </ul>
                </div>
                {/* column2 */}
                <div className="col">
                    <h4> INFORMATION</h4>
                    <ul className="list-unstyled">
                        <li>RETURNS</li>
                        <li>SHIPPING</li>
                        <li>TERMS</li>
                    </ul>
                </div>
                {/* column3 */}
                <div className="col">
                    <h4> MORE</h4>
                    <ul className="list-unstyled">
                        <li>MEMBERSHIP</li>
                        <li>CONTACT</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row">
                <p className="col-sml">
                &copy;{new Date().getFullYear()} MVRBLE Inc | All Rights Reserved | TermsOf Service | Privacy

                </p>
            </div>
        </div>
      </div>
    );
  };
    
  export default Footer;