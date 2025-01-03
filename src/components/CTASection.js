import React from "react";

const CTASection = () => {
  return (
    <section className="cta-area pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Let's work together</span>
              <h2>We Love to Listen to Your Requirements</h2>
              <a href="#contactus" className="btn-outline">
                Estimate Project <i className="fas fa-chevron-right fa-icon"></i>
              </a>
              <p className="cta-call">
                Or call us now{" "}
                <a href="tel:+91-95259-52621">
                  <i className="fas fa-phone-alt"></i> +91-95259-52621
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="shape shape-a1">
        <img src="https://imaginativo.in/assets/images/shape/shape-3.svg" alt="shape" />
      </div>
      <div className="shape shape-a2">
        <img src="https://imaginativo.in/assets/images/shape/shape-4.svg" alt="shape" />
      </div>
      <div className="shape shape-a3">
        <img src="https://imaginativo.in/assets/images/shape/shape-13.svg" alt="shape" />
      </div>
      <div className="shape shape-a4">
        <img src="https://imaginativo.in/assets/images/shape/shape-11.svg" alt="shape" />
      </div>
    </section>
  );
};

export default CTASection;
