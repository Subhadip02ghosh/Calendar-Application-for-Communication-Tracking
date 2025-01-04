import React, { useState, useEffect } from 'react';
import './Dashboard.css'
const Dashboard = ({ companies }) => {
  const [highlightedCompanies, setHighlightedCompanies] = useState([]);

  // Function to handle hover effect (displaying notes)
  const handleHover = (companyId, communicationId) => {
    const company = companies.find((comp) => comp.id === companyId);
    const communication = company.communications.find(
      (comm) => comm.id === communicationId
    );
    alert(`Notes: ${communication.notes}`);
  };

  return (
    <div className="dashboard">
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>
                <ul>
                  {company.communications.slice(0, 5).map((comm, idx) => (
                    <li
                      key={idx}
                      onMouseEnter={() => handleHover(company.id, comm.id)}
                      style={{
                        backgroundColor: comm.status === 'overdue' ? 'red' : '',
                        color: comm.status === 'due_today' ? 'yellow' : '',
                      }}
                    >
                      {comm.type} - {comm.date}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                {company.nextCommunication.type} - {company.nextCommunication.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
