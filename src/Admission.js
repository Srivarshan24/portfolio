// import React, { useState } from 'react';
// import './Admission.css';
// import mainLogo from './assets/main-logo.png';
// import sliderBg from './assets/slider.png';

// export default function Admission() {
//   const [formData, setFormData] = useState({
//     name: '',
//     fatherName: '',
//     dob: '',
//     gender: '',
//     regNumber: '',
//     email: '',
//     mobileNumber: '',
//     parentMobileNumber: '',
//     community: '',
//     firstGraduate: '',
//     address: '',
//     city: '',
//     district: '',
//     state: '',
//     course: '',
//     referredBy: ''
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//     if (errorMessage) setErrorMessage('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.name.trim()) {
//       setErrorMessage('Please enter student name.');
//       return;
//     }
//     if (!formData.mobileNumber.trim()) {
//       setErrorMessage('Please enter mobile number.');
//       return;
//     }
//     if (formData.mobileNumber.trim().length < 10) {
//       setErrorMessage('Please enter a valid 10-digit mobile number.');
//       return;
//     }

//     setSubmitted(true);
//   };

//   const handleCloseModal = () => {
//     setSubmitted(false);
//     setFormData({
//       name: '',
//       fatherName: '',
//       dob: '',
//       gender: '',
//       regNumber: '',
//       email: '',
//       mobileNumber: '',
//       parentMobileNumber: '',
//       community: '',
//       firstGraduate: '',
//       address: '',
//       city: '',
//       district: '',
//       state: '',
//       course: '',
//       referredBy: ''
//     });
//   };

//   return (
//     <div className="mec-page-wrapper">
//       {/* Top Header */}
//       <header className="mec-header">
//         <div className="mec-header-container">
//           <div className="mec-header-left">
//             <a href="https://mec.edu.in" target="_blank" rel="noopener noreferrer">
//               <img
//                 src={mainLogo}
//                 alt="Muthayammal Engineering College Logo"
//                 className="mec-logo-img"
//               />
//             </a>
//           </div>

//           <div className="mec-header-right">
//             <div className="mec-admission-contact">
//               <span className="mec-admission-contact-title">For Admissions</span>
//               <span className="mec-admission-contact-numbers">
//                 <a href="tel:9442226737">94422 26737</a> | <a href="tel:9443348637">94433 48637</a>
//               </span>
//             </div>

//             <div className="mec-tnea-box">
//               <div className="mec-tnea-label-wrap">
//                 <span className="mec-tnea-label">TNEA</span>
//                 <span className="mec-tnea-label">Code</span>
//               </div>
//               <span className="mec-tnea-code">2610</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section with Campus Background & Admission Enquiry Form */}
//       <section
//         className="mec-hero-section"
//         style={{ backgroundImage: `url(${sliderBg})` }}
//       >
//         <div className="mec-hero-overlay"></div>

//         <div className="mec-hero-container">
//           {/* Left Tagline */}
//           <div className="mec-hero-left">
//             <h1 className="mec-hero-tagline">
//               LEARN &<br />
//               <span>DISCOVER.</span>
//             </h1>
//           </div>

//           {/* Right Admission Enquiry Form Card */}
//           <div className="mec-form-card-wrapper">
//             <div className="mec-form-card">
//               <h2 className="mec-form-title">ONLINE ADMISSION ENQUIRY – 2026</h2>

//               {/* Cloudflare Turnstile Box */}
//               <div className="mec-turnstile-box">
//                 <div className="mec-turnstile-left">
//                   <div className="mec-turnstile-check">✓</div>
//                   <span className="mec-turnstile-text">Success!</span>
//                 </div>
//                 <div className="mec-turnstile-right">
//                   <div className="mec-cloudflare-brand">
//                     <svg
//                       className="mec-cloudflare-logo-icon"
//                       viewBox="0 0 100 45"
//                       fill="#f6821f"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M78.6 18.2C76.9 11.9 71.3 7.4 64.6 7.4c-4.4 0-8.4 1.9-11.2 5.1C50.5 7.9 44.5 4.5 37.8 4.5 27.5 4.5 18.9 12 17.5 22 7.7 23.3 0 31.7 0 42c0 .6 0 1.2.1 1.8h86.7c7.3 0 13.2-5.9 13.2-13.2 0-6.9-5.3-12.4-12-12.9-.1 0-.3 0-.4.5z" />
//                     </svg>
//                     <span className="mec-cloudflare-name">CLOUDFLARE</span>
//                   </div>
//                   <div className="mec-cloudflare-subtext">
//                     <a href="#privacy">Privacy</a> • <a href="#help">Help</a>
//                   </div>
//                 </div>
//               </div>

//               {errorMessage && (
//                 <div className="mec-alert-msg">{errorMessage}</div>
//               )}

//               {/* Form Fields */}
//               <form onSubmit={handleSubmit} className="mec-form-grid" noValidate>
//                 {/* Row 1: Name & Father Name */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="mec-input"
//                       placeholder="Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="fatherName">Father Name</label>
//                     <input
//                       type="text"
//                       id="fatherName"
//                       name="fatherName"
//                       className="mec-input"
//                       placeholder="Father Name"
//                       value={formData.fatherName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Row 2: Date of Birth & Gender */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="dob">Date of Birth</label>
//                     <input
//                       type="date"
//                       id="dob"
//                       name="dob"
//                       className="mec-input"
//                       value={formData.dob}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="gender">Gender</label>
//                     <select
//                       id="gender"
//                       name="gender"
//                       className="mec-select"
//                       value={formData.gender}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Row 3: Register Number & Email */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="regNumber">Register Number [+2 / Diploma / ug]</label>
//                     <input
//                       type="text"
//                       id="regNumber"
//                       name="regNumber"
//                       className="mec-input"
//                       placeholder="Register Number"
//                       value={formData.regNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="mec-input"
//                       placeholder="Email Id"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Row 4: Mobile Number & Parent Mobile Number */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="mobileNumber">Mobile Number</label>
//                     <input
//                       type="tel"
//                       id="mobileNumber"
//                       name="mobileNumber"
//                       maxLength={10}
//                       className="mec-input"
//                       placeholder="Mobile Number"
//                       value={formData.mobileNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="parentMobileNumber">Parent Mobile Number</label>
//                     <input
//                       type="tel"
//                       id="parentMobileNumber"
//                       name="parentMobileNumber"
//                       maxLength={10}
//                       className="mec-input"
//                       placeholder="Parent Mobile Number"
//                       value={formData.parentMobileNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Row 5: Community & First Graduate */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="community">Community</label>
//                     <select
//                       id="community"
//                       name="community"
//                       className="mec-select"
//                       value={formData.community}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select</option>
//                       <option value="OC">OC</option>
//                       <option value="BC">BC</option>
//                       <option value="BCM">BCM</option>
//                       <option value="MBC">MBC</option>
//                       <option value="SC">SC</option>
//                       <option value="ST">ST</option>
//                       <option value="SCA">SCA</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="firstGraduate">First Graduate</label>
//                     <select
//                       id="firstGraduate"
//                       name="firstGraduate"
//                       className="mec-select"
//                       value={formData.firstGraduate}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Row 6: Address & City / Town */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="address">Address</label>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       className="mec-input"
//                       placeholder="Address"
//                       value={formData.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="city">City / Town</label>
//                     <input
//                       type="text"
//                       id="city"
//                       name="city"
//                       className="mec-input"
//                       placeholder="City / Town"
//                       value={formData.city}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Row 7: District & State */}
//                 <div className="mec-form-row">
//                   <div className="mec-form-group">
//                     <label htmlFor="district">District</label>
//                     <input
//                       type="text"
//                       id="district"
//                       name="district"
//                       className="mec-input"
//                       placeholder="District"
//                       value={formData.district}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mec-form-group">
//                     <label htmlFor="state">State</label>
//                     <select
//                       id="state"
//                       name="state"
//                       className="mec-select"
//                       value={formData.state}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select</option>
//                       <option value="Tamil Nadu">Tamil Nadu</option>
//                       <option value="Andhra Pradesh">Andhra Pradesh</option>
//                       <option value="Karnataka">Karnataka</option>
//                       <option value="Kerala">Kerala</option>
//                       <option value="Telangana">Telangana</option>
//                       <option value="Puducherry">Puducherry</option>
//                       <option value="Bihar">Bihar</option>
//                       <option value="Gujarat">Gujarat</option>
//                       <option value="Maharashtra">Maharashtra</option>
//                       <option value="Rajasthan">Rajasthan</option>
//                       <option value="Uttar Pradesh">Uttar Pradesh</option>
//                       <option value="West Bengal">West Bengal</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Row 8: Course (Full Width) */}
//                 <div className="mec-form-row full-width">
//                   <div className="mec-form-group">
//                     <label htmlFor="course">Course</label>
//                     <select
//                       id="course"
//                       name="course"
//                       className="mec-select"
//                       value={formData.course}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select</option>
//                       <option value="B.E - Bio Medical Engineering">B.E - Bio Medical Engineering</option>
//                       <option value="B.E - Computer Science and Engineering">B.E - Computer Science and Engineering</option>
//                       <option value="B.E - Computer Science and Engineering (Artificial Intelligence and Machine Learning)">B.E - Computer Science and Engineering (Artificial Intelligence and Machine Learning)</option>
//                       <option value="B.E - Computer Science and Engineering (Cyber Security)">B.E - Computer Science and Engineering (Cyber Security)</option>
//                       <option value="B.E - Electronics Engineering (VLSI Design and Technology)">B.E - Electronics Engineering (VLSI Design and Technology)</option>
//                       <option value="B.E - Electronics and Communication Engineering">B.E - Electronics and Communication Engineering</option>
//                       <option value="B.E - Electrical and Electronics Engineering">B.E - Electrical and Electronics Engineering</option>
//                       <option value="B.E - Civil Engineering">B.E - Civil Engineering</option>
//                       <option value="B.E - Mechanical Engineering">B.E - Mechanical Engineering</option>
//                       <option value="B.E - Mechatronics Engineering">B.E - Mechatronics Engineering</option>
//                       <option value="B.Tech - Bio Technology">B.Tech - Bio Technology</option>
//                       <option value="B.Tech - Information Technology">B.Tech - Information Technology</option>
//                       <option value="B.Tech - Artificial Intelligence and Data Science">B.Tech - Artificial Intelligence and Data Science</option>
//                       <option value="B.Tech - Computer Science and Business Systems">B.Tech - Computer Science and Business Systems</option>
//                       <option value="M.E - Computer Science and Engineering">M.E - Computer Science and Engineering</option>
//                       <option value="M.E - VLSI Design">M.E - VLSI Design</option>
//                       <option value="M.E - Power Systems Engineering">M.E - Power Systems Engineering</option>
//                       <option value="M.E - CAD/CAM">M.E - CAD/CAM</option>
//                       <option value="Master of Business Administration">Master of Business Administration (MBA)</option>
//                       <option value="Master of Computer Applications">Master of Computer Applications (MCA)</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Row 9: Referred by (Full Width) */}
//                 <div className="mec-form-row full-width">
//                   <div className="mec-form-group">
//                     <label htmlFor="referredBy">Referred by</label>
//                     <input
//                       type="text"
//                       id="referredBy"
//                       name="referredBy"
//                       className="mec-input"
//                       placeholder="Name & Mobile No."
//                       value={formData.referredBy}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Row 10: Apply Submit Button */}
//                 <div className="mec-submit-row">
//                   <button type="submit" className="mec-btn-apply">
//                     Apply
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Submission Success Modal */}
//       {submitted && (
//         <div className="mec-modal-backdrop" onClick={handleCloseModal}>
//           <div className="mec-modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="mec-modal-icon">✓</div>
//             <h3 className="mec-modal-title">Enquiry Submitted Successfully!</h3>
//             <p className="mec-modal-text">
//               Thank you for choosing <strong>Muthayammal Engineering College</strong>.
//               Our admission cell will contact you shortly.
//             </p>

//             <div className="mec-modal-details">
//               <p><strong>Applicant Name:</strong> {formData.name || 'N/A'}</p>
//               <p><strong>Mobile:</strong> {formData.mobileNumber || 'N/A'}</p>
//               <p><strong>Email:</strong> {formData.email || 'N/A'}</p>
//               <p><strong>Selected Course:</strong> {formData.course || 'Not specified'}</p>
//             </div>

//             <button className="mec-modal-close-btn" onClick={handleCloseModal}>
//               Close & Submit Another
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

