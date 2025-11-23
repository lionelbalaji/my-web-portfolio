import React from "react";
import DynamicForm from "../components/DynamicForm";

const Contact = () => {
  return (
    <div className="w-full">
      <h3 className="text-accent-blue font-semibold text-center md:text-4xl text-xl tracking-wide font-orbitron animate-slideInRight mb-5">
        CONTACT
      </h3>
      <div className="">
        <DynamicForm />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Contact;
