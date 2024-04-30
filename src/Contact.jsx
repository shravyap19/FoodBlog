import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required.";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
      formIsValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Optionally, also clear any existing errors if needed
      setErrors({});
    }
  };

  return (
    <div className="intro">
      <h1 className="about-me">Contact Me</h1>
      <p className="about_me_desc">
        Have a question, suggestion, or just want to say hello? Feel free to get
        in touch using the form below!
      </p>
      <form onSubmit={handleSubmit}>
        <p className="about_me_desc mt-6 mb-1">Your Name:</p>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <p className="about_me_desc mt-6 mb-1">Your Email:</p>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <p className="about_me_desc mt-6 mb-1">Your Message:</p>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        <div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
