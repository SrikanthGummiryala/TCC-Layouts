import React, { useState } from 'react';
import './Testimonials.css';
import { Pencil, Trash2 } from 'lucide-react';
import TestimonialEditor from './TestimonialEditor';

const Testimonials = () => {
  const [heading, setHeading] = useState('TESTIMONIALS');
  const [testimonials, setTestimonials] = useState([
    {
      name: 'Emily R.',
      title: 'Graphic Designer',
      image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740',
      text: 'This platform absolutely transformed my job search experience!',
      stars: 5,
    },
    {
      name: 'Robert T.',
      title: 'Software Engineer',
      image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg', // relative path example
      text: 'I found my dream role in just a week thanks to this website.',
      stars: 5,
    },
    {
      name: 'Sophia L.',
      title: 'HR Manager',
      image: 'https://www.sakshi.com/gallery_images/2022/12/15/Anchor%20Srimukhi%20New%20House%20Warming%20ceremony%20Photos_6.jpg',
      text: 'Recruiting top talent has never been easier. Highly recommend!',
      stars: 5,
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleDelete = (index) => {
    const updated = testimonials.filter((_, i) => i !== index);
    setTestimonials(updated);
  };

  const handleSave = (updatedTestimonial) => {
    const updated = [...testimonials];
    updated[editingIndex] = updatedTestimonial;
    setTestimonials(updated);
    setEditingIndex(null);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2
          contentEditable
          suppressContentEditableWarning
          className="editable-heading"
          onBlur={(e) => setHeading(e.target.textContent)}
        >
          {heading}
        </h2>
        <div className="underline"></div>

        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card-actions">
                <button onClick={() => setEditingIndex(index)}>
                  <Pencil size={20} />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <Trash2 size={20} />
                </button>
              </div>
              <blockquote>“ {item.text} ”</blockquote>
              <img src={item.image} alt={item.name} className="user-img" />
              <h4>{item.name}</h4>
              <p className="title">{item.title}</p>
              <div className="stars">
                {'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {editingIndex !== null && (
        <TestimonialEditor
          testimonial={testimonials[editingIndex]}
          onSave={handleSave}
          onCancel={() => setEditingIndex(null)}
        />
      )}
    </section>
  );
};

export default Testimonials;
