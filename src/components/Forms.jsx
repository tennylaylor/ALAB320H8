import { useState } from "react";

export default function Form({ moviesearch }) {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    moviesearch(formData.searchterm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        placeholder="Search for a movie..."
        value={formData.searchterm}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
