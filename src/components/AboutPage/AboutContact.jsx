import { useState } from 'react';
import './AboutContact.css';
import contactCampus from '../../assets/contact_campus.webp';

export default function AboutContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been received.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                {/* Left Column: Campus Image */}
                <div className="contact-image-wrapper">
                    <div className="contact-image-card">
                        <img
                            src={contactCampus}
                            alt="Heritage SKPD school colonnade and campus courtyard"
                            className="contact-campus-img"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-wrapper">
                    <div className="contact-badge">
                        <span className="contact-badge-dot" aria-hidden="true" />
                        <span className="contact-badge-text">CONTACT</span>
                    </div>

                    <h2 className="contact-title">
                        <span className="contact-highlight">Stay Connected</span> With Us
                    </h2>

                    <p className="contact-subtitle">
                        Have something to share or simply want to reconnect? We'd love to
                        hear from you.
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Row 1: Name and Email */}
                        <div className="contact-form-row">
                            <div className="contact-input-group">
                                <label className="contact-label" htmlFor="contact-name">
                                    Name <span className="required-star">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="contact-input"
                                    required
                                />
                            </div>

                            <div className="contact-input-group">
                                <label className="contact-label" htmlFor="contact-email">
                                    Email <span className="required-star">*</span>
                                </label>
                                <div className="contact-input-with-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-field-icon">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        className="contact-input input-padded"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Phone and Subject */}
                        <div className="contact-form-row">
                            <div className="contact-input-group">
                                <label className="contact-label" htmlFor="contact-phone">
                                    Mobile Number <span className="required-star">*</span>
                                </label>
                                <div className="contact-input-with-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-field-icon">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="00000 00000"
                                        className="contact-input input-padded"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-input-group">
                                <label className="contact-label" htmlFor="contact-subject">
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="contact-input"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="contact-input-group">
                            <label className="contact-label" htmlFor="contact-message">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className="contact-textarea"
                                required
                            />
                        </div>

                        {/* Row 4: Submit Button right-aligned */}
                        <div className="contact-submit-row">
                            <button type="submit" className="contact-submit-btn">
                                <span className="contact-btn-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="13 17 18 12 13 7"></polyline>
                                        <polyline points="6 17 11 12 6 7"></polyline>
                                    </svg>
                                </span>
                                <span>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

