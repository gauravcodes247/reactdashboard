import React, { useState } from "react";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    company: "Team Gaurav ",
    username: "gaurav123",
    email: "",
    firstName: "First Name",
    lastName: "last name",
    address: "Melbourne, Australia",
    city: "Melbourne",
    country: "Australia",
    postalCode: "",
    about: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Profile Updated!");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-light text-gray-700 mb-6">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Company (disabled)" name="company" value={formData.company} disabled />
          <Input label="Username" name="username" value={formData.username} onChange={handleChange} />
          <Input label="Email Address" name="email" value={formData.email} onChange={handleChange} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>

        {/* Address */}
        <Input label="Address" name="address" value={formData.address} onChange={handleChange} />

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="City" name="city" value={formData.city} onChange={handleChange} />
          <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
          <Input label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </div>

        {/* About */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">About Me</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="4"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition"
          >
            UPDATE PROFILE
          </button>
        </div>

      </form>
    </div>
  );
};

const Input = ({ label, name, value, onChange, disabled }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default EditProfile;
