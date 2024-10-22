import React from 'react';
import { Link } from 'react-router-dom';
import './ViewSpecialization.css'; // Optional: Create a CSS file for styling
import SidebarSection from '../Sidebar/SidebarSection';
const ViewSpecialization = ({ specializations, setSpecializations }) => {
  // Function to handle deleting specialization
  const handleDeleteSpecialization = (id) => {
    const updatedSpecializations = specializations.filter(spec => spec.id !== id);
    setSpecializations(updatedSpecializations);
  };
  return (
    <div className="view-specialization">
      <SidebarSection /> {/* Use the common Sidebar */}
      <div className='col-sm-9'>
      <div className="content">
        <h1 style={{textAlign:"center"}}>Specializations</h1>
        <div style={{ marginTop: '1rem',marginBottom:"1rem" }}>
          <Link to="/add-specialization" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
            Add Specialization
          </Link>
        </div>
        {/* Specializations List */}
        <div className="specialization-list">
          {specializations.length > 0 ? (
            <ul>
              {specializations.map((spec) => (
                <li key={spec.id}>
                  <span>{spec.name}</span>
                  <button
                    onClick={() => handleDeleteSpecialization(spec.id)}
                    style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
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
export default ViewSpecialization;