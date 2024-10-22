import React, { useState } from 'react';
import './SearchDoctor.css'; // Optional: Create a CSS file for styling
import SidebarSection from '../Sidebar/SidebarSection';
const SearchDoctor = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    doctorName: '',
    specialization: '',
    location: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to fetch search results based on searchCriteria (doctorName, specialization, location)
    // For now, we're mocking the search result
    const mockResults = [
      { name: 'Dr. John Doe', specialization: 'Cardiology', location: 'New York' },
      { name: 'Dr. Jane Smith', specialization: 'Dermatology', location: 'Los Angeles' },
    ];
    setSearchResults(mockResults);
  };
  return (
    <div className="search-doctor-container">
      
<SidebarSection />
      <div className="search-doctor-content">
        <h1>Search for a Doctor</h1>
        <form onSubmit={handleSearch} className="search-form">
          <label>
            Doctor Name:
            <input
              type="text"
              name="doctorName"
              value={searchCriteria.doctorName}
              onChange={handleInputChange}
              placeholder="Enter Doctor Name"
            />
          </label>
          <label>
            Specialization:
            <input
              type="text"
              name="specialization"
              value={searchCriteria.specialization}
              onChange={handleInputChange}
              placeholder="Enter Specialization"
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={searchCriteria.location}
              onChange={handleInputChange}
              placeholder="Enter Location"
            />
          </label>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="search-results">
          <h2>Search Results:</h2>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>
                  <strong>{result.name}</strong> - {result.specialization} - {result.location}
                </li>
              ))}
            </ul>
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchDoctor;