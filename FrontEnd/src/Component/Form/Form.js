import React from "react";

export default function Form({ children, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form className="m-2" onSubmit={handleSubmit}>
      <div className="form-group">{children}</div>
    </form>
  );
}
