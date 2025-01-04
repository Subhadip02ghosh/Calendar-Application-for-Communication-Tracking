import React, { useState } from 'react';
import './CompanyManagement.module.css'
import './CompanyManagement.css'

const CompanyManagement = ({ addCompany }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyLinkedIn, setCompanyLinkedIn] = useState('');
  const [companyEmails, setCompanyEmails] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyComments, setCompanyComments] = useState('');
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCompany = {
      name: companyName,
      location: companyLocation,
      linkedIn: companyLinkedIn,
      emails: companyEmails,
      phone: companyPhone,
      comments: companyComments,
      communicationPeriodicity: communicationPeriodicity,
    };

    addCompany(newCompany); // Add the new company to the list
    setCompanyName('');
    setCompanyLocation('');
    setCompanyLinkedIn('');
    setCompanyEmails('');
    setCompanyPhone('');
    setCompanyComments('');
    setCommunicationPeriodicity('');
  };

  return (
    <div>
      <h2>Add a New Company</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          value={companyLinkedIn}
          onChange={(e) => setCompanyLinkedIn(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Emails"
          value={companyEmails}
          onChange={(e) => setCompanyEmails(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
        <textarea
          placeholder="Comments"
          value={companyComments}
          onChange={(e) => setCompanyComments(e.target.value)}
        />
        <input
          type="text"
          placeholder="Communication Periodicity"
          value={communicationPeriodicity}
          onChange={(e) => setCommunicationPeriodicity(e.target.value)}
        />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default CompanyManagement;
