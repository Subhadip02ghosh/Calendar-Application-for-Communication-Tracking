import React, { useState } from 'react';

const CompanyCommunications = () => {
  const [company, setCompany] = useState({
    name: 'Company A',
    communications: [
      { type: 'LinkedIn Post', date: '2024-01-02', notes: 'Follow-up on LinkedIn post.' },
      { type: 'Email', date: '2024-01-05', notes: 'Follow-up email sent.' },
      { type: 'Phone Call', date: '2024-01-10', notes: 'Scheduled phone call.' },
    ],
  });

  const [newCommunication, setNewCommunication] = useState({
    type: '',
    date: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommunication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompany((prevState) => ({
      ...prevState,
      communications: [...prevState.communications, newCommunication],
    }));
    setNewCommunication({
      type: '',
      date: '',
      notes: '',
    });
  };

  return (
    <div>
      <h2>Company Communications for {company.name}</h2>
      <h3>Recent Communications</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {company.communications.map((comm, index) => (
            <tr key={index}>
              <td>{comm.type}</td>
              <td>{comm.date}</td>
              <td>{comm.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Log New Communication</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          placeholder="Communication Type"
          value={newCommunication.type}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newCommunication.date}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Add notes"
          value={newCommunication.notes}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Log Communication</button>
      </form>
    </div>
  );
};

export default CompanyCommunications;
