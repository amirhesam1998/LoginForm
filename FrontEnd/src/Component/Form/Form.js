import React from "react";

export default function Form({ children, onSubmit, layout }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (onSubmit) {
  //     onSubmit(e);
  //   }
  // };
  const formClass = layout === 'horizontal' ? 'form-inline' : '';

  return (
    <form className={`m-2 ${formClass}`}>
      {layout === 'vertical' ? (
        <div className="form-group">
          <div className="col">{children}</div>
        </div>
      ) : (
        <div className="form-group ">{children}</div>
      )}
    </form>
  );
}
