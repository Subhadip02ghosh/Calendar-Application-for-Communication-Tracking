import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/User/Dashboard'; // Existing Dashboard component
import CompanyManagement from './components/Admin/CompanyManagement'; // Add Company page
import CommunicationMethodManagement from './components/Admin/CommunicationMethodManagement';

const App = () => {
  const [companies, setCompanies] = useState([]);

  // Save company data (this would be replaced with API calls or local storage logic)
  const addCompany = (companyData) => {
    setCompanies([...companies, companyData]);
    console.log('Company added:', companyData); // This is where you could store the data in backend or state
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard companies={companies} />} />
          <Route path="/admin/methods" element={<CommunicationMethodManagement />} />
          <Route path="/admin/companies" element={<CompanyManagement />} />
          <Route
            path="/add-company"
            element={<CompanyManagement addCompany={addCompany} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
