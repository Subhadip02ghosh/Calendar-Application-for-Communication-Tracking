import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
    const [methods, setMethods] = useState([
        { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
        { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: true },
        { name: 'Email', description: 'Send an Email', sequence: 3, mandatory: false },
        { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
        { name: 'Other', description: 'Other communication method', sequence: 5, mandatory: false }
    ]);

    const handleEdit = (index, newData) => {
        const updatedMethods = methods.map((method, i) => i === index ? { ...method, ...newData } : method);
        setMethods(updatedMethods);
    };

    const handleDelete = (index) => {
        setMethods(methods.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Communication Methods Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Sequence</th>
                        <th>Mandatory</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {methods.map((method, index) => (
                        <tr key={index}>
                            <td>{method.name}</td>
                            <td>{method.description}</td>
                            <td>{method.sequence}</td>
                            <td>{method.mandatory ? 'Yes' : 'No'}</td>
                            <td>
                                <button onClick={() => handleEdit(index, { sequence: method.sequence + 1 })}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CommunicationMethodManagement;
