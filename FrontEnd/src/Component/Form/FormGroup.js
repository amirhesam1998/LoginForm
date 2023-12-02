import React from "react";

export default function FormGroup({ children }) {
  return (
    <div className="container">
      <div className="row justify-content-center m-5">
        <div className="col-md-6 p-4 alireza">{children}</div>
      </div>
    </div>
  );
}
