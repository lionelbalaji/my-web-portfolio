import React, { useState } from "react";
import Input from "../utils/Input";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const DynamicForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pvxmjf6", // replace
        "template_4bpktdm", // replace
        data,
        "7HllK_FqgMfHTKxi1" // replace
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for contacting Me.",
            icon: "success",
            confirmButtonColor: "#2b8cff", // accent-blue
          });
        },
        (error) => {
          console.log("FAILED...", error);
          Swal.fire({
            title: "Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
          });
        }
      );

    setData({
      name: "",
      email: "",
      mobilenumber: "",
      message: "",
    });
  };

  const fields = [
    { id: 1, name: "name", value: data.name, placeholder: "Your Name" },
    { id: 2, name: "email", value: data.email, placeholder: "Your Email" },
    {
      id: 3,
      name: "mobilenumber",
      value: data.mobilenumber,
      placeholder: "Your Mobile Number",
    },
    {
      id: 4,
      name: "message",
      value: data.message,
      placeholder: "Your Message",
    },
  ];

  return (
    <div>
      <form>
        {fields.map((item) => (
          <div key={item.id}>
            <Input
              name={item.name}
              placeholder={item.placeholder}
              value={item.value}
              onChange={handlechange}
            />
          </div>
        ))}
        <div className="w-full flex justify-start mt-4 px-6 md:px-6">
          <button
            type="submit"
            onClick={handleclick}
            className="border-2 border-accent-blue bg-accent-blue text-text-primary px-5 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-accent-blue/20 hover:text-accent-blueDark transition-all duration-300 w-auto sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
