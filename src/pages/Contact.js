import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
