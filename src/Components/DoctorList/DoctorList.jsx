import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DoctorList.css';
import SidebarSection from '../Sidebar/SidebarSection';

const DoctorList = () => {
    const { id } = useParams();
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch('/doctorlist.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setDoctors(data); // Assuming the structure contains "doctors" key
            })
            .catch((error) => console.error('Fetch error:', error));
    }, []);
   
    const handleDelete = (id) => {
        setDoctors(doctors.filter(doctor => doctor.id !== id));
    };
    
    const handleEdit = (id) => {
        const doctorToEdit = doctors.find(doctor => doctor.id === id);
        setSelectedDoctor(doctorToEdit);
        setIsEditing(true);
    };
    const handleSave = (updatedDoctor) => {
        setDoctors(doctors.map(doctor => (doctor.id === updatedDoctor.id ? updatedDoctor : doctor)));
        setSelectedDoctor(null);
        setIsEditing(false);
    };
    return (
        <div className="doctor-list-page row">
            <SidebarSection /> {/* Use the common Sidebar */}
            <div className='col-sm-9'>
                <div className="doctor-list-content">
                    <h2>Available Doctors</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Profile Picture</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Speciality</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.id}>
                                    <td>
                                        <img src={doctor.profilePicture} alt={doctor.name} style={{height:"100px"}} />
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.mobile}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        <button onClick={() => {
                                            setSelectedDoctor(doctor);
                                            setIsEditing(false);
                                        }} className='btn btn-primary'>View Details</button>
                                        {/* <Link to="/view-doctor-details/1" className='btn btn-primary'>View Details</Link> */}
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(doctor.id)} className='btn btn-warning'>Edit</button>
                                        {/* <Link to={'/update-doctor-details/${doctor.id}'}>Edit</Link> */}
                                        {/* <Link to={'/update-doctor-details/1'} className='btn btn-warning'>Edit</Link> */}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(doctor.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedDoctor && (
                        isEditing ? (
                            <DoctorDetail
                                doctor={selectedDoctor}
                                onSave={handleSave}
                                onClose={() => {
                                    setSelectedDoctor(null);
                                    setIsEditing(false);
                                }}
                            />
                        ) : (
                            <DoctorDetails
                                doctor={selectedDoctor}
                                onClose={() => setSelectedDoctor(null)}
                            />
                        )
                    )}

                </div>
            </div>
        </div>
    );
};
// Doctor Detail Component for Editing
const DoctorDetail = ({ doctor, onSave, onClose }) => {
    const [formData, setFormData] = useState(doctor);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };
  
    return (
      <div className='edit-view'>
        <h2>Edit Doctor</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Mobile:</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
          </div>
          <div>
            <label>Specialty:</label>
            <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} />
          </div>
          <button type="submit" style={{marginRight:"10px"}}className='btn btn-primary'>Save</button>
          <button type="button"className='btn btn-danger' onClick={onClose}>Close</button>
        </form>
      </div>
    );
  };
  
  // Doctor Details Component for Viewing
const DoctorDetails = ({ doctor, onClose }) => {
    return (
      <div className='edit-view'>
        <h2>Doctor Details</h2>
        <div className='detail-box'>
        <div className='doct-name'>{doctor.name}</div>
            <div className='img-circle'><img src={doctor.profilePicture} alt={doctor.name} /></div>
            <div className='doctor-detail'>
                <p><strong>Email:</strong> {doctor.email}</p>
                <p><strong>Contact No:</strong> {doctor.mobile}</p>
                <p><strong>Specialty:</strong> {doctor.speciality}</p>
                <button className="btn btn-danger" onClick={onClose}>Close</button>
            </div>
        </div>
      </div>
    );
  };
export default DoctorList;