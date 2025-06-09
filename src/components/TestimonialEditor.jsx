import React, { useState, useEffect } from 'react';

const TestimonialEditor = ({ testimonial, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...testimonial });

  useEffect(() => {
    setFormData({ ...testimonial });
  }, [testimonial]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="editor-modal">
      <form className="editor-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Testimonial:
          <textarea name="text" value={formData.text} onChange={handleChange} required />
        </label>
        <label>
          Stars:
          <input
            name="stars"
            type="number"
            min="1"
            max="5"
            value={formData.stars}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL or Relative Path:
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https:// or /images/example.jpg"
          />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {formData.image && (
          <img src={formData.image} alt="Preview" className="preview-img" />
        )}
        <div className="editor-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialEditor;
