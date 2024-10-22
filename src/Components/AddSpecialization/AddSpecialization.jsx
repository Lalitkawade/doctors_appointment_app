import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddSpecialization.css'; // Optional: Create a CSS file for styling
import SidebarSection from '../Sidebar/SidebarSection';

const AddSpecialization = ({ onAddSpecialization, specializations = [], setSpecializations }) => {
  // Function to handle deleting specialization
  const handleDeleteSpecialization = (id) => {
    const updatedSpecializations = specializations.filter((spec) => spec.id !== id);
    setSpecializations(updatedSpecializations);
  };

  const [newSpecialization, setNewSpecialization] = useState('');
  const navigate = useNavigate();

  const handleAddSpecialization = () => {
    if (newSpecialization.trim() !== '') {
      // Call the function passed down to add the specialization
      onAddSpecialization(newSpecialization);
      // Navigate back to the View Specialization page
      navigate('/view-specialization');
    }
  };

  return (
    <div className="add-specialization-page">
      <SidebarSection /> {/* Use the common Sidebar */}
      <div className="col-sm-9">
        <div className="content">
          <h1>Specialization</h1>


          <div className="add-specialization-form">
          <button
              onClick={handleAddSpecialization}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Add Specialization
            </button>
            <input
              type="text"
              placeholder="Enter Specialization"
              value={newSpecialization}
              onChange={(e) => setNewSpecialization(e.target.value)}
              style={{ padding: '8px', marginRight: '10px' }}
            />
           
          </div>

          <div className="specialization-list">
            {specializations && specializations.length > 0 ? ( // Check if specializations exists and has length
              <ul>
                {specializations.map((spec) => (
                  <li key={spec.id}>
                    <span>{spec.name}</span>
                    <button
                      onClick={() => handleDeleteSpecialization(spec.id)}
                      style={{
                        marginLeft: '10px',
                        padding: '5px 10px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No specializations available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpecialization;
