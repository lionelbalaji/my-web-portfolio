import React from "react";

const Input = ({ name, value, placeholder, onChange }) => {
  const isMessage = name === "message";

  return (
    <div className="w-full my-2 px-6 sm:px-6">
      {isMessage ? (
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="
            w-full 
            border-2 
            border-accent-blueDark 
            bg-transparent
            p-3
            sm:p-4 
            h-28 
            sm:h-36
            resize-none
            outline-none
            text-white
            rounded-lg
            text-sm
            sm:text-base
            placeholder:text-gray-400
            mb-4
            animate-slideInBottom
          "
        />
      ) : (
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="
            w-full
            h-10 
            sm:h-12
            border-2 
            border-accent-blueDark 
            bg-transparent
            p-3
            sm:p-4
            my-2
            outline-none
            text-white
            rounded-lg
            text-sm
            sm:text-base
            placeholder:text-gray-400
            animate-slideInLeft
          "
        />
      )}
    </div>
  );
};

export default Input;
