import React from "react";

const HeaderMain = () => {
  return (
    <main className="container-fluid">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "500px", textAlign: "center" }}
      >
        <div className="col-10 mx-auto ">
          <h1
            className="text-white"
            style={{ fontWeight: 900, fontSize: "4rem" }}
          >
            The Professional
          </h1>
          <h1
            className="text-white"
            style={{ fontWeight: 900, fontSize: "4rem" }}
          >
            Approach To Security
          </h1>
          <p
            className="text-white mt-4 mx-auto"
            style={{ width: "auto", maxWidth: "800px" }}
          >
            PATRON IS THE LEADING SECURITY SERVICES ORIENTED COMPANIES IN
            DHAKA,BANGLADESH. PROFESSIONAL SECURITY SERVICES IN BANGLADESH.
          </p>
          <button className="btn brand-btn mt-5">Get Started</button>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
