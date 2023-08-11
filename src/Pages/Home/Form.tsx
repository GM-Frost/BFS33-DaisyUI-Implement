import { useState } from "react";

const Form = () => {
  const [formItem, setFormItem] = useState({
    fullname: "",
    email: "",
    address: "",
    phonenumber: "",
    gender: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? (checked ? value : "") : value;
    setFormItem((prevFormItem) => ({
      ...prevFormItem,
      [name]: newValue,
    }));
    console.log(formItem);
  };
  return (
    <>
      <h1 className="text-center font-bold uppercase mt-10">form Components</h1>
      <div className="w-full flex justify-center mt-10 gap-4">
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4 card w-96 glass"
        >
          <div className="form-control">
            <label className="block text-white text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="fullname"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="block text-white text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="address"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="block text-white text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="phonenumber"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Gender</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                name="gender"
                value="male"
                checked={formItem.gender === "male"}
                onChange={handleChange}
              />
              <span className="label-text">Male</span>
              <input
                type="checkbox"
                className="checkbox checkbox-secondary"
                name="gender"
                value="female"
                checked={formItem.gender === "female"}
                onChange={handleChange}
              />
              <span className="label-text">Female</span>
            </label>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </div>
        </form>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body flex flex-col">
            <h2 className="card-title">Form Details!</h2>
            <p>Full Name: {submitted ? formItem.fullname : ""}</p>
            <p>Email: {submitted ? formItem.email : ""}</p>
            <p>Address: {submitted ? formItem.address : ""}</p>
            <p>Phone: {submitted ? formItem.phonenumber : ""}</p>
            <p>Gender: {submitted ? formItem.gender : ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
