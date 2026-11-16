import React, { useState } from 'react';
import './MembershipFormSection.css';
import membericon1 from "../../assets/membericon1.webp";
import membericon2 from "../../assets/membericon2.webp";
import membericon3 from "../../assets/membericon3.webp";

export default function MembershipFormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    whatsapp: '',
    city: '',
    country: '',
    batchYear: '',
    degree: '',
    occupation: '',
    organization: '',
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <section className="membership-form-section" id="membership-form">
      <div className="membership-form-container">
        {/* Header Badge & Title */}
        <div className="membership-form-header">
          <div className="membership-form-badge">
            <span className="membership-badge-dot" aria-hidden="true" />
            <span className="membership-badge-text">MEMBERSHIP FORM</span>
          </div>

          <h1 className="membership-form-title">
            Join the <span className="membership-title-highlight">Alumni Community</span>
          </h1>
        </div>

        {/* Step Indicator */}
        <div className="membership-stepper" aria-label="Registration Steps">

          {/* Step 1 */}
          <div className={`step-item ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
            <button
              type="button"
              className="step-circle"
              onClick={() => setCurrentStep(1)}
              aria-label="Step 1: Personal Details"
            >
              <img src={membericon1} alt="Personal Details" className="step-icon" />
            </button>
            <span className="step-label">STEP 1</span>
          </div>

          <div className={`step-connector ${currentStep > 1 ? 'active' : ''}`} />

          {/* Step 2 */}
          <div className={`step-item ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
            <button
              type="button"
              className="step-circle"
              onClick={() => setCurrentStep(2)}
              aria-label="Step 2: Academic Details"
            >
              <img src={membericon2} alt="Academic Details" className="step-icon" />
            </button>
            <span className="step-label">STEP 2</span>
          </div>

          <div className={`step-connector ${currentStep > 2 ? 'active' : ''}`} />

          {/* Step 3 */}
          <div className={`step-item ${currentStep === 3 ? 'active' : ''}`}>
            <button
              type="button"
              className="step-circle"
              onClick={() => setCurrentStep(3)}
              aria-label="Step 3: Professional Details"
            >
              <img src={membericon3} alt="Professional Details" className="step-icon" />
            </button>
            <span className="step-label">STEP 3</span>
          </div>

        </div>

        {/* Form Card Container */}
        <div className="membership-card">
          {submitted ? (
            <div className="membership-success-state">
              <div className="membership-success-icon">✓</div>
              <h2 className="membership-success-title">Welcome to the SKPD Alumni Family!</h2>
              <p className="membership-success-text">
                Thank you, <strong>{formData.name || 'Alumnus'}</strong>. Your membership registration has been received. Our alumni coordinator will review and send your official confirmation to <strong>{formData.email}</strong>.
              </p>
              <button
                type="button"
                className="membership-btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
              >
                Register Another Member
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext} className="membership-actual-form">
              {/* STEP 1: Personal Details */}
              {currentStep === 1 && (
                <div className="form-step-panel">
                  <div className="form-panel-heading">
                    <h2 className="form-panel-title">Personal Details</h2>
                    <p className="form-panel-subtitle">
                      Please provide your basic details to help us stay connected.
                    </p>
                  </div>

                  <div className="form-grid-2col">
                    {/* Name */}
                    <div className="form-field-group">
                      <label htmlFor="name" className="form-label">
                        Name <span className="field-required">*</span>
                      </label>
                      <div className="form-input-wrapper">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-input"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-field-group">
                      <label htmlFor="email" className="form-label">
                        Email <span className="field-required">*</span>
                      </label>
                      <div className="form-input-wrapper with-icon">
                        <span className="input-prefix-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </span>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="form-field-group">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number <span className="field-required">*</span>
                      </label>
                      <div className="form-input-wrapper with-icon">
                        <span className="input-prefix-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <input
                          id="mobile"
                          type="tel"
                          name="mobile"
                          className="form-input"
                          placeholder="00000 00000"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* WhatsApp Number */}
                    <div className="form-field-group">
                      <label htmlFor="whatsapp" className="form-label">
                        WhatsApp Number
                      </label>
                      <div className="form-input-wrapper with-icon">
                        <span className="input-prefix-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        </span>
                        <input
                          id="whatsapp"
                          type="tel"
                          name="whatsapp"
                          className="form-input"
                          placeholder="00000 00000"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Current City */}
                    <div className="form-field-group">
                      <label htmlFor="city" className="form-label">
                        Current City <span className="field-required">*</span>
                      </label>
                      <div className="form-input-wrapper with-icon">
                        <span className="input-prefix-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </span>
                        <input
                          id="city"
                          type="text"
                          name="city"
                          className="form-input"
                          placeholder="Ex. Chennai, Bengaluru,..."
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Current Country */}
                    <div className="form-field-group">
                      <label htmlFor="country" className="form-label">
                        Current Country
                      </label>
                      <div className="form-input-wrapper with-icon">
                        <span className="input-prefix-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                        </span>
                        <input
                          id="country"
                          type="text"
                          name="country"
                          className="form-input"
                          placeholder="Ex. India,..."
                          value={formData.country}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Footer: Checkbox & Next Button */}
                  <div className="form-footer-actions">
                    <label className="form-checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        className="form-checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="checkbox-text">
                        I agree to join the alumni community and receive updates.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className={`form-btn-next ${formData.name && formData.email ? 'is-valid' : ''}`}
                    >
                      <span className="btn-chevron-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Academic Details */}
              {currentStep === 2 && (
                <div className="form-step-panel">
                  <div className="form-panel-heading">
                    <h2 className="form-panel-title">Academic Details</h2>
                    <p className="form-panel-subtitle">
                      Share your school journey and batch details with fellow alumni.
                    </p>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field-group">
                      <label htmlFor="batchYear" className="form-label">
                        Passing Year / Batch <span className="field-required">*</span>
                      </label>
                      <div className="form-input-wrapper">
                        <input
                          id="batchYear"
                          type="text"
                          name="batchYear"
                          className="form-input"
                          placeholder="Ex. 1998, 2010"
                          value={formData.batchYear}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="degree" className="form-label">
                        Stream / Department
                      </label>
                      <div className="form-input-wrapper">
                        <input
                          id="degree"
                          type="text"
                          name="degree"
                          className="form-input"
                          placeholder="Ex. Commerce, Science, Arts"
                          value={formData.degree}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-footer-actions step-between">
                    <button
                      type="button"
                      className="form-btn-back"
                      onClick={handleBack}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="form-btn-next is-valid"
                    >
                      <span className="btn-chevron-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Professional Details */}
              {currentStep === 3 && (
                <div className="form-step-panel">
                  <div className="form-panel-heading">
                    <h2 className="form-panel-title">Professional Details</h2>
                    <p className="form-panel-subtitle">
                      Help connect the alumni network across industries and geographies.
                    </p>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field-group">
                      <label htmlFor="occupation" className="form-label">
                        Current Designation / Role
                      </label>
                      <div className="form-input-wrapper">
                        <input
                          id="occupation"
                          type="text"
                          name="occupation"
                          className="form-input"
                          placeholder="Ex. Senior Architect, Entrepreneur"
                          value={formData.occupation}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="organization" className="form-label">
                        Company / Organization
                      </label>
                      <div className="form-input-wrapper">
                        <input
                          id="organization"
                          type="text"
                          name="organization"
                          className="form-input"
                          placeholder="Ex. Google, TCS, Self-employed"
                          value={formData.organization}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-footer-actions step-between">
                    <button
                      type="button"
                      className="form-btn-back"
                      onClick={handleBack}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="form-btn-next is-valid submit-mode"
                    >
                      <span className="btn-chevron-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Submit Membership</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

