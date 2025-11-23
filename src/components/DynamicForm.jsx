import React, { useState } from "react";
import Input from "../utils/Input";

const DynamicForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    message: "",
  });
  const [alldata, setAlldata] = useState([]);
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

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    setAlldata((prev) => [...prev, data]);
    console.log("alldata", data);
    setData({
      name: "",
      email: "",
      mobilenumber: "",
      message: "",
    });
  };
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
            className="
      border-2 
      border-accent-blue 
      bg-accent-blue 
      text-text-primary 
      px-5 
      py-2 
      rounded-lg 
      text-sm 
      sm:text-base
      font-medium
      hover:bg-accent-blue/20 
      hover:text-accent-blueDark 
      transition-all 
      duration-300 
      w-auto
      sm:w-auto
    "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
