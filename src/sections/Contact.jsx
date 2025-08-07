import React, { useState } from 'react';

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const handleFormUpdate = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section id="contact" className="bg-gray-300 h-[100vh] flex items-center justify-center mx-auto pt-24">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <form>
            <input
              type="text"
              placeholder="First Name"
              value={userDetails.firstName}
              name="firstName"
              onChange={handleFormUpdate}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={userDetails.lastName}
              name="lastName"
              onChange={handleFormUpdate}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={userDetails.email}
              name="email"
              onChange={handleFormUpdate}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              name="phoneNumber"
              onChange={handleFormUpdate}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
