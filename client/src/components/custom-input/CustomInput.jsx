import React from "react";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      {label && <label className="block mb-2">{label}</label>}

      <input
        {...rest}
        className="border border-gray-500 rounded px-3 py-2 w-full"
      />
    </div>
  );
};

export default CustomInput;
